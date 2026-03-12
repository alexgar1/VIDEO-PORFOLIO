import { fetchLiveSocialMetrics } from './socialMetrics.mjs'

const setCommonHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 'no-store')
}

const sendJson = (res, statusCode, payload) => {
  setCommonHeaders(res)
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

const parseJsonBody = async (req) => {
  if (req.body && typeof req.body === 'object') return req.body

  let rawBody = ''
  for await (const chunk of req) {
    rawBody += chunk
  }

  if (!rawBody.trim()) return {}
  return JSON.parse(rawBody)
}

export const handleSocialMetricsHttpRequest = async (req, res) => {
  const method = req.method?.toUpperCase() ?? 'GET'

  if (method === 'OPTIONS') {
    setCommonHeaders(res)
    res.statusCode = 204
    res.end()
    return
  }

  if (method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed. Use POST.' })
    return
  }

  let body

  try {
    body = await parseJsonBody(req)
  } catch {
    sendJson(res, 400, { error: 'Invalid JSON body.' })
    return
  }

  const items = Array.isArray(body?.items) ? body.items : []

  try {
    const payload = await fetchLiveSocialMetrics(items)
    sendJson(res, 200, payload)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected metrics error.'
    sendJson(res, 500, { error: message })
  }
}
