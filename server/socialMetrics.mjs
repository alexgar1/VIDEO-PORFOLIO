const REQUEST_TIMEOUT_MS = 15_000
const CACHE_TTL_MS = 5 * 60 * 1000
const ERROR_CACHE_TTL_MS = 30 * 1000

const SUPPORTED_SOURCES = new Set(['instagram', 'tiktok'])

const requestHeaders = {
  'User-Agent': 'Mozilla/5.0',
}

const metricCache = new Map()

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const normalizeUrl = (value) => {
  if (typeof value !== 'string') return null

  try {
    const parsedUrl = new URL(value.trim())
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') return null
    parsedUrl.hash = ''
    return parsedUrl.toString()
  } catch {
    return null
  }
}

const normalizeSource = (value) => {
  if (typeof value !== 'string') return null
  const normalized = value.trim().toLowerCase()
  return SUPPORTED_SOURCES.has(normalized) ? normalized : null
}

const parseCompactCount = (value) => {
  if (typeof value !== 'string') return null

  const normalized = value.replace(/,/g, '').trim().toUpperCase()
  const match = normalized.match(/^(\d+(?:\.\d+)?)([KMB])?$/)
  if (!match) return null

  const numericValue = Number(match[1])
  if (!Number.isFinite(numericValue) || numericValue < 0) return null

  const suffix = match[2]
  if (!suffix) return Math.round(numericValue)
  if (suffix === 'K') return Math.round(numericValue * 1_000)
  if (suffix === 'M') return Math.round(numericValue * 1_000_000)
  if (suffix === 'B') return Math.round(numericValue * 1_000_000_000)
  return null
}

const toCount = (value) => {
  if (typeof value === 'number' && Number.isFinite(value) && value >= 0) {
    return Math.round(value)
  }

  if (typeof value !== 'string') return null

  const asInteger = Number(value.replace(/,/g, '').trim())
  if (Number.isFinite(asInteger) && asInteger >= 0) return Math.round(asInteger)

  return parseCompactCount(value)
}

const firstCountMatch = (input, patterns) => {
  for (const pattern of patterns) {
    const match = pattern.exec(input)
    if (!match) continue
    const parsedCount = toCount(match[1])
    if (parsedCount !== null) return parsedCount
  }

  return null
}

const extractScopedSegment = (input, anchorPattern, before = 8_000, after = 140_000) => {
  if (!anchorPattern) return input
  const match = anchorPattern.exec(input)
  if (!match) return input

  const start = Math.max(0, match.index - before)
  const end = Math.min(input.length, match.index + after)
  return input.slice(start, end)
}

const extractMetaDescription = (html) => {
  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)
  return match?.[1] ?? ''
}

const parseInstagramTarget = (rawUrl) => {
  const url = new URL(rawUrl)
  const normalizedPath = url.pathname.replace(/\/+$/, '')
  const match = normalizedPath.match(/^\/(reel|p|tv)\/([^/]+)$/i)
  if (!match) return null

  return {
    shortcode: match[2],
    mediaType: match[1].toLowerCase(),
  }
}

const parseTikTokVideoId = (rawUrl) => {
  const url = new URL(rawUrl)
  const match = url.pathname.match(/\/video\/(\d+)/)
  return match?.[1] ?? null
}

const fetchDocument = async (url) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      headers: requestHeaders,
      redirect: 'follow',
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Request failed (${response.status}) for ${url}`)
    }

    return await response.text()
  } finally {
    clearTimeout(timeoutId)
  }
}

const fetchInstagramMetrics = async (url) => {
  const target = parseInstagramTarget(url)
  if (!target) {
    throw new Error(`Unsupported Instagram URL: ${url}`)
  }

  const embedUrl = `https://www.instagram.com/${target.mediaType}/${target.shortcode}/embed/captioned/`
  const html = await fetchDocument(embedUrl)
  const normalizedHtml = html.replace(/\\"/g, '"')
  const escapedShortcode = escapeRegExp(target.shortcode)
  const segment = extractScopedSegment(normalizedHtml, new RegExp(`shortcode":"${escapedShortcode}"`), 8_000, 180_000)

  const views =
    firstCountMatch(segment, [
      /video_view_count":\s*"?([\d,]+)"?/,
      /video_play_count":\s*"?([\d,]+)"?/,
      /play_count":\s*"?([\d,]+)"?/,
    ]) ??
    firstCountMatch(extractMetaDescription(normalizedHtml), [/([\d.,KMB]+)\s+(?:plays|views)\b/i])

  const likes =
    firstCountMatch(segment, [
      /edge_liked_by":\{"count":\s*"?([\d,]+)"?/,
      /edge_media_preview_like":\{"count":\s*"?([\d,]+)"?/,
      /like_count":\s*"?([\d,]+)"?/,
    ]) ?? firstCountMatch(extractMetaDescription(normalizedHtml), [/([\d.,KMB]+)\s+likes?\b/i])

  const comments =
    firstCountMatch(segment, [
      /edge_media_to_comment":\{"count":\s*"?([\d,]+)"?/,
      /comment_count":\s*"?([\d,]+)"?/,
    ]) ?? firstCountMatch(extractMetaDescription(normalizedHtml), [/([\d.,KMB]+)\s+comments?\b/i])

  return { views, likes, comments }
}

const fetchTikTokMetrics = async (url) => {
  const videoId = parseTikTokVideoId(url)
  if (!videoId) {
    throw new Error(`Unsupported TikTok URL: ${url}`)
  }

  const html = await fetchDocument(url)
  const segment = extractScopedSegment(
    html,
    new RegExp(`"id":"${escapeRegExp(videoId)}"|"itemId":"${escapeRegExp(videoId)}"`),
    2_000,
    220_000,
  )
  const statsSegment = extractScopedSegment(segment, /"stats":\{/, 0, 8_000)

  const views =
    firstCountMatch(statsSegment, [/"playCount":\s*"?([\d,]+)"?/]) ??
    firstCountMatch(segment, [/"playCount":\s*"?([\d,]+)"?/])
  const likes =
    firstCountMatch(statsSegment, [/"diggCount":\s*"?([\d,]+)"?/]) ??
    firstCountMatch(segment, [/"diggCount":\s*"?([\d,]+)"?/])
  const comments =
    firstCountMatch(statsSegment, [/"commentCount":\s*"?([\d,]+)"?/]) ??
    firstCountMatch(segment, [/"commentCount":\s*"?([\d,]+)"?/])

  return { views, likes, comments }
}

const fetchMetricsBySource = async (source, url) => {
  if (source === 'instagram') return fetchInstagramMetrics(url)
  if (source === 'tiktok') return fetchTikTokMetrics(url)
  throw new Error(`Unsupported source: ${source}`)
}

const sanitizeMetrics = (metrics) => {
  const nextMetrics = {}

  for (const metricName of ['views', 'likes', 'comments']) {
    const value = toCount(metrics?.[metricName])
    if (value !== null) nextMetrics[metricName] = value
  }

  return nextMetrics
}

const normalizeMetricMinimums = (value) => {
  if (!value || typeof value !== 'object') return null

  const nextMinimums = {}

  for (const metricName of ['views', 'likes', 'comments']) {
    const minimumValue = toCount(value[metricName])
    if (minimumValue !== null) {
      nextMinimums[metricName] = minimumValue
    }
  }

  return Object.keys(nextMinimums).length > 0 ? nextMinimums : null
}

const applyMetricMinimums = (metrics, minimums) => {
  if (!minimums) return metrics

  const nextMetrics = { ...metrics }

  for (const metricName of ['views', 'likes', 'comments']) {
    const minimumValue = toCount(minimums[metricName])
    if (minimumValue === null) continue

    const currentValue = toCount(nextMetrics[metricName])
    if (currentValue === null || currentValue < minimumValue) {
      nextMetrics[metricName] = minimumValue
    }
  }

  return nextMetrics
}

const normalizeRequestedItem = (item) => {
  if (!item || typeof item !== 'object') return null

  const id = typeof item.id === 'string' ? item.id.trim() : ''
  const source = normalizeSource(item.source)
  const url = normalizeUrl(item.url)
  const metricMinimums = normalizeMetricMinimums(item.metricMinimums)

  if (!id || !source || !url) return null
  return { id, source, url, metricMinimums }
}

const getCachedMetrics = (cacheKey) => {
  const cached = metricCache.get(cacheKey)
  if (!cached) return null
  if (cached.expiresAt <= Date.now()) {
    metricCache.delete(cacheKey)
    return null
  }
  return cached
}

const setCachedMetrics = (cacheKey, payload, ttlMs) => {
  metricCache.set(cacheKey, {
    ...payload,
    expiresAt: Date.now() + ttlMs,
  })
}

const fetchMetricsForItem = async (item) => {
  const metricMinimumsKey = item.metricMinimums ? JSON.stringify(item.metricMinimums) : ''
  const cacheKey = `${item.source}:${item.url}:${metricMinimumsKey}`
  const cached = getCachedMetrics(cacheKey)
  if (cached) {
    return {
      id: item.id,
      metrics: cached.metrics,
      error: cached.error,
    }
  }

  try {
    const rawMetrics = await fetchMetricsBySource(item.source, item.url)
    const metrics = applyMetricMinimums(sanitizeMetrics(rawMetrics), item.metricMinimums)
    setCachedMetrics(cacheKey, { metrics, error: null }, CACHE_TTL_MS)
    return {
      id: item.id,
      metrics,
      error: null,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown metrics error'
    const fallbackMetrics = applyMetricMinimums({}, item.metricMinimums)
    setCachedMetrics(cacheKey, { metrics: fallbackMetrics, error: message }, ERROR_CACHE_TTL_MS)
    return {
      id: item.id,
      metrics: fallbackMetrics,
      error: message,
    }
  }
}

export const fetchLiveSocialMetrics = async (items) => {
  const normalizedItems = Array.isArray(items) ? items.map(normalizeRequestedItem).filter(Boolean) : []
  const dedupedItems = [...new Map(normalizedItems.map((item) => [item.id, item])).values()]
  const results = await Promise.all(dedupedItems.map((item) => fetchMetricsForItem(item)))

  const metricsByItemId = {}
  const errorsByItemId = {}

  for (const result of results) {
    if (Object.keys(result.metrics).length > 0) {
      metricsByItemId[result.id] = result.metrics
    }

    if (result.error) {
      errorsByItemId[result.id] = result.error
    }
  }

  return {
    fetchedAt: new Date().toISOString(),
    metrics: metricsByItemId,
    errors: errorsByItemId,
  }
}
