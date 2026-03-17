import { useEffect, useMemo, useRef, useState } from 'react'

import logoSaltCinema from '../logos/3.webp'
import logoInfiniteViews from '../logos/6568d7309470e1a797a97baf_infinite-views-logo_black.png'
import logoCluely from '../logos/cluely_logo.png'
import logoInterviewCoder from '../logos/interviewcoder_logo.png'
import logoKaedim from '../logos/kaedim_logo.png'
import logoStarbucks from '../logos/Starbucks_Corporation_Logo_2011.svg.webp'
import logoUniversityOfUtah from '../logos/Utah_Utes_primary_logo.png'
import heroVideoSrc from '../video/000-hero-45s.mp4'

const emailAddress = 'alexgarrett2468@gmail.com'
const phoneHref = 'tel:+18016804694'
const instagramHref = 'https://www.instagram.com/alexg.mov/'
const linkedinHref = 'https://www.linkedin.com/in/alex-garrett-a21564243/'
const appleGaramondStack = "'Apple Garamond', Garamond, 'Times New Roman', serif"
const buildEngagementMetrics = (views = '--', likes = '--', comments = '--') => [
  { label: 'Views', value: views },
  { label: 'Likes', value: likes },
  { label: 'Comments', value: comments },
]

const projectBriefBody = [
  'Hi Alex,',
  '',
  'I found your portfolio and would like to discuss a project.',
  '',
  'Company:',
  'Website:',
  'Project type:',
  'Timeline:',
  'Budget range:',
  'Goals:',
  '',
  'Best,',
].join('\n')

const projectBriefSubject = 'Project Brief for Alex Garrett'
const encodedProjectBriefSubject = encodeURIComponent(projectBriefSubject)
const encodedProjectBriefBody = encodeURIComponent(projectBriefBody)

const projectBriefHref = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodedProjectBriefSubject}&body=${encodedProjectBriefBody}`

const portfolioSections = [
  {
    id: 'social-media',
    title: 'Social Media',
    items: [
      {
        id: 'social-1',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('2.1M', '206K', 553),
        href: 'https://www.instagram.com/reel/DOyrMpyCXV0/',
        videoSrc: '/media/portfolio/DOyrMpyCXV0.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-2',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('--', 178, 6),
        href: 'https://www.instagram.com/reel/DJHzWMmoXz2/',
        videoSrc: '/media/portfolio/DJHzWMmoXz2.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-3',
        title: 'TikTok Video',
        source: 'TikTok',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('4.8M', '962K', '3,864'),
        href: 'https://www.tiktok.com/@alexg.mov/video/7525330367616699662',
        videoSrc: '/media/portfolio/7525330367616699662.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-4',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('--', 119, 15),
        href: 'https://www.instagram.com/reel/DVipr1igHR3/',
        videoSrc: '/media/portfolio/DVipr1igHR3.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-5',
        title: 'TikTok Video',
        source: 'TikTok',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('21.1K', '2,549', 49),
        href: 'https://www.tiktok.com/@alexg.mov/video/7556166361496440077',
        videoSrc: '/media/portfolio/7556166361496440077.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-6',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('135.7K', '11K', 39),
        href: 'https://www.instagram.com/reel/DVrfbfvjkko/',
        videoSrc: '/media/portfolio/DVrfbfvjkko.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-7',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics(),
        href: 'https://www.instagram.com/reel/DHqw-C_pAtq/',
        videoSrc: '/media/portfolio/DHqw-C_pAtq.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-8',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('--', 176, 12),
        href: 'https://www.instagram.com/reel/DN3XI1IYksn/',
        videoSrc: '/media/portfolio/DN3XI1IYksn.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-9',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('--', 53, 7),
        href: 'https://www.instagram.com/reel/DJ5J48LgmjQ/',
        videoSrc: '/media/portfolio/DJ5J48LgmjQ.mp4',
        aspect: 'portrait',
      },
      {
        id: 'social-10',
        title: 'Instagram Reel',
        source: 'Instagram',
        replaceMetaWithMetrics: true,
        metrics: buildEngagementMetrics('--', 61, 26),
        href: 'https://www.instagram.com/reel/C4gJ_6qut97/',
        videoSrc: '/media/portfolio/C4gJ_6qut97.mp4',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'widescreen',
    title: 'Widescreen',
    items: [
      {
        id: 'wide-1',
        title: 'LinkedIn Product Story',
        source: 'LinkedIn',
        href: 'https://www.linkedin.com/posts/abdulla007_i-spent-the-last-few-months-building-interview-activity-7389017263137366017-mnw5',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7389017099156787200?compact=1',
        aspect: 'landscape',
        videoOnly: true,
        client: 'Interview Coder',
        objective: 'Communicate product value to technical audiences through narrative pacing.',
        role: 'Interview edit, rhythm shaping, and final social cut.',
        deliverables: ['16:9 master', 'LinkedIn-ready version', 'Narrative structure pass'],
      },
      {
        id: 'wide-2',
        title: 'YouTube Feature',
        source: 'YouTube',
        href: 'https://www.youtube.com/watch?v=RE6ahIf3kwA&t=61s',
        embedSrc: 'https://www.youtube.com/embed/RE6ahIf3kwA?si=UruYK2nYYktv_gV9',
        aspect: 'landscape',
        videoOnly: true,
        client: 'YouTube Collaboration',
        objective: 'Deliver a long-form cut with strong scene transitions and clean momentum.',
        role: 'Editorial structure and finishing.',
        deliverables: ['Long-form YouTube edit', 'Narrative pacing', 'Final platform export'],
      },
      {
        id: 'wide-3',
        title: 'YouTube Feature',
        source: 'YouTube',
        href: 'https://www.youtube.com/watch?v=xTR8c4j_DKk&t=13s',
        embedSrc: 'https://www.youtube.com/embed/xTR8c4j_DKk?si=ehxl5zHvMEZbWEkJ',
        aspect: 'landscape',
        videoOnly: true,
        client: 'Experimental Film Project',
        objective: 'Maintain cinematic tone while protecting story clarity across scenes.',
        role: 'Story edit and visual polish.',
        deliverables: ['Cinematic timeline edit', 'Platform master', 'Refined pacing'],
      },
      {
        id: 'wide-4',
        title: 'LinkedIn Campaign',
        source: 'LinkedIn',
        href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7432919049581314048',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7432919049581314048?compact=1',
        aspect: 'landscape',
        videoOnly: true,
        client: 'B2B Brand Campaign',
        objective: 'Support demand generation content with stronger visual storytelling.',
        role: 'Campaign edit and delivery optimization.',
        deliverables: ['LinkedIn widescreen cut', 'Message-forward structure', 'Brand-safe export'],
      },
    ],
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    items: [
      {
        id: 'motion-1',
        title: 'Drive Showcase',
        source: 'Google Drive',
        href: 'https://drive.google.com/file/d/17DS1xWMJFBe0rNCXQHvWcRSJ1y_vxUPv/view',
        embedSrc: 'https://drive.google.com/file/d/17DS1xWMJFBe0rNCXQHvWcRSJ1y_vxUPv/preview',
        aspect: 'landscape',
        videoOnly: true,
        client: 'Brand Motion Package',
        objective: 'Create reusable motion assets that keep campaign visuals consistent.',
        role: 'Animation, compositing, and final export.',
        deliverables: ['Motion toolkit assets', 'Campaign-ready outputs', 'Brand-consistent animation'],
      },
      {
        id: 'motion-2',
        title: 'LinkedIn Product Launch',
        source: 'LinkedIn',
        href: 'https://www.linkedin.com/posts/kaedim_today-is-a-big-milestone-for-kaedim-for-activity-7434690563268018176--REi',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7434690372456558593?compact=1',
        aspect: 'linkedinCompact',
        videoOnly: true,
        client: 'Kaedim',
        objective: 'Support a milestone launch with branded motion graphics and polished pacing.',
        role: 'Motion design, edit pass, and social delivery.',
        deliverables: ['Launch post visual', 'Motion graphics layer', 'LinkedIn-first render'],
      },
    ],
  },
]

const portfolioSectionsData = portfolioSections

const liveMetricsRefreshIntervalMs = 5 * 60 * 1000

const liveMetricRequestItems = portfolioSectionsData
  .flatMap((section) => section.items)
  .filter((item) => item.replaceMetaWithMetrics && item.href)
  .map((item) => ({
    id: item.id,
    source: item.source,
    url: item.href,
    metricMinimums: item.metricMinimums,
  }))

const showcaseLogos = [
  {
    id: 'salt-cinema',
    fileName: '3.webp',
    name: 'Salt Cinema',
    href: 'https://www.saltcinema.com',
    src: logoSaltCinema,
  },
  {
    id: 'cluely',
    fileName: 'cluely_logo.png',
    name: 'Cluely',
    href: 'https://cluely.com',
    src: logoCluely,
  },
  {
    id: 'infinite-views',
    fileName: '6568d7309470e1a797a97baf_infinite-views-logo_black.png',
    name: 'Infinite Views',
    href: 'https://www.infiniteviewsllc.com',
    src: logoInfiniteViews,
  },
  {
    id: 'interview-coder',
    fileName: 'interviewcoder_logo.png',
    name: 'Interview Coder',
    href: 'https://interviewcoder.co',
    src: logoInterviewCoder,
  },
  {
    id: 'kaedim',
    fileName: 'kaedim_logo.png',
    name: 'Kaedim',
    href: 'https://www.kaedim3d.com',
    src: logoKaedim,
  },
  {
    id: 'starbucks',
    fileName: 'Starbucks_Corporation_Logo_2011.svg.webp',
    name: 'Starbucks',
    href: 'https://www.starbucks.com',
    src: logoStarbucks,
  },
  {
    id: 'utah',
    fileName: 'Utah_Utes_primary_logo.png',
    name: 'University of Utah',
    href: 'https://www.utah.edu',
    src: logoUniversityOfUtah,
  },
].sort((a, b) => a.name.localeCompare(b.name))

const marqueeLogos = [...showcaseLogos, ...showcaseLogos]

const proofPoints = [
  { value: '2M+', labelMain: 'Likes', labelSub: 'on personal accounts' },
  { value: '16M+', labelMain: 'Views', labelSub: 'on personal accounts' },
]

const serviceOfferings = [
  {
    title: 'Full-Service Video Production',
    description: 'End-to-end project ownership from concept to delivery.',
    details: ['Writing', 'Producing', 'Directing', 'Editing'],
  },
  {
    title: 'Videography',
    description: 'Professional capture for brand, lifestyle, and campaign content.',
    details: ['Pre-Production Planning', 'On-Site + Studio Filming', 'Lighting + Audio Setup', 'Multi-Camera Coverage'],
  },
  {
    title: 'Video Editing',
    description: 'Story-first post-production tailored for every platform.',
    details: ['Narrative + Pacing', 'Color Correction + Grading', 'Sound Design + Mixing', 'Captions + Platform Exports'],
  },
  {
    title: 'Motion Graphics',
    description: 'Branded motion design, titles, and explainer visuals.',
  },
  {
    title: 'Web Design',
    description: 'Clean portfolio, campaign, and marketing pages.',
  },
  {
    title: 'Automation',
    description: 'Workflow systems for content pipelines and operations.',
  },
  {
    title: 'Training',
    description: 'Practical training for teams and individual creators.',
  },
]

const aspectClasses = {
  portrait: 'aspect-[9/16]',
  landscape: 'aspect-video',
  linkedin: 'aspect-[504/550]',
  linkedinCompact: 'aspect-[504/399]',
}

const iframeAllow =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

const unavailableMetricTokens = new Set(['', '--', '-', '—', 'n/a', 'na', 'not available'])
const compactMetricFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

const hasLiveMetricValue = (value) => typeof value === 'number' && Number.isFinite(value) && value >= 0

const parseNumericMetricValue = (value) => {
  if (typeof value === 'number') {
    return Number.isFinite(value) && value >= 0 ? value : null
  }

  if (typeof value !== 'string') return null

  const numericValue = Number(value.trim().replaceAll(',', ''))
  return Number.isFinite(numericValue) && numericValue >= 0 ? numericValue : null
}

const formatMetricValue = (label, value) => {
  if (typeof value === 'string') {
    const normalizedValue = value.trim()
    if (!normalizedValue || unavailableMetricTokens.has(normalizedValue.toLowerCase())) {
      return label.toLowerCase() === 'views' ? 'Hidden' : 'N/A'
    }

    const numericValue = parseNumericMetricValue(normalizedValue)
    return numericValue === null ? normalizedValue : compactMetricFormatter.format(Math.round(numericValue))
  }

  const numericValue = parseNumericMetricValue(value)
  if (numericValue === null) {
    return label.toLowerCase() === 'views' ? 'Hidden' : 'N/A'
  }
  return compactMetricFormatter.format(Math.round(numericValue))
}

const getEmbedSrc = (item) => {
  if (!item?.embedSrc) return ''

  if (item.source !== 'YouTube') return item.embedSrc

  try {
    const embedUrl = new URL(item.embedSrc)
    embedUrl.searchParams.set('playsinline', '1')
    embedUrl.searchParams.set('rel', '0')
    embedUrl.searchParams.set('modestbranding', '1')
    return embedUrl.toString()
  } catch {
    return item.embedSrc
  }
}

function OptimizedLoopVideo({ src, className, poster, eager = false }) {
  const supportsIntersectionObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window
  const shouldObserveVisibility = !eager && supportsIntersectionObserver
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(eager || !supportsIntersectionObserver)
  const [canPreload, setCanPreload] = useState(eager || !supportsIntersectionObserver)

  useEffect(() => {
    if (!shouldObserveVisibility) return undefined

    const videoElement = videoRef.current
    if (!videoElement) return undefined

    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const shouldPlay = entry.isIntersecting && entry.intersectionRatio >= 0.35

        setIsVisible(shouldPlay)
        if (entry.isIntersecting) {
          setCanPreload(true)
        }
      },
      {
        root: null,
        rootMargin: '220px 0px',
        threshold: [0, 0.35],
      },
    )

    observer.observe(videoElement)

    return () => observer.disconnect()
  }, [shouldObserveVisibility])

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return undefined

    if (isVisible) {
      const playPromise = videoElement.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {})
      }
      return undefined
    }

    videoElement.pause()
    return undefined
  }, [isVisible])

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload={eager ? 'auto' : canPreload ? 'metadata' : 'none'}
      controls={false}
      poster={poster}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback"
    />
  )
}

const applyLiveMetrics = (sections, liveMetricsByItemId) => {
  if (!liveMetricsByItemId || Object.keys(liveMetricsByItemId).length === 0) return sections

  return sections.map((section) => ({
    ...section,
    items: section.items.map((item) => {
      if (!item.metrics?.length) return item

      const liveMetrics = liveMetricsByItemId[item.id]
      if (!liveMetrics) return item

      const nextMetrics = item.metrics.map((metric) => {
        const metricKey = metric.label.toLowerCase()
        const liveMetricValue = liveMetrics[metricKey]
        if (!hasLiveMetricValue(liveMetricValue)) return metric
        return { ...metric, value: liveMetricValue }
      })

      return {
        ...item,
        metrics: nextMetrics,
      }
    }),
  }))
}

function PortfolioCard({ item, index }) {
  const showPrimaryMeta = !item.replaceMetaWithMetrics && !item.videoOnly
  const showCardDetails = showPrimaryMeta || item.metrics?.length
  const mediaTitle = `${item.title} on ${item.source}`

  return (
    <article
      className="animate-fade-up overflow-hidden rounded-2xl border border-white/15 bg-black/45 transition duration-500 hover:-translate-y-1 hover:border-white/35 hover:bg-black/30"
      style={{ animationDelay: `${80 + index * 70}ms` }}
    >
      <div className={`${aspectClasses[item.aspect]} w-full overflow-hidden bg-black`}>
        {item.videoSrc ? (
          item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={mediaTitle}
              title={mediaTitle}
              className="block h-full w-full"
            >
              <OptimizedLoopVideo
                src={item.videoSrc}
                className="h-full w-full object-cover"
              />
            </a>
          ) : (
            <OptimizedLoopVideo
              src={item.videoSrc}
              className="h-full w-full object-cover"
            />
          )
        ) : (
          <iframe
            src={getEmbedSrc(item)}
            title={item.title}
            className="block h-full w-full border-0"
            loading="lazy"
            allow={iframeAllow}
            scrolling="no"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>

      {showCardDetails ? (
        <div className="space-y-3 p-4 md:p-5">
          {showPrimaryMeta ? (
            <>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-mist/55">
                <span>{item.source}</span>
              </div>

              <h3 className="font-display text-xl leading-tight text-mist">{item.title}</h3>
            </>
          ) : null}

          {item.metrics?.length ? (
            <dl className="grid grid-cols-3 gap-2">
              {item.metrics.map((metric) => {
                const formattedMetricValue = formatMetricValue(metric.label, metric.value)
                const isUnavailableMetric = formattedMetricValue === 'Hidden' || formattedMetricValue === 'N/A'

                return (
                  <div key={`${item.id}-${metric.label}`} className="rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2">
                    <dt className="text-[9px] uppercase tracking-[0.12em] text-mist/50 md:text-[10px]">{metric.label}</dt>
                    <dd className={`mt-1 text-xs font-semibold leading-tight md:text-sm ${isUnavailableMetric ? 'text-mist/70' : 'text-mist'}`}>
                      {formattedMetricValue}
                    </dd>
                  </div>
                )
              })}
            </dl>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState(portfolioSectionsData[0].id)
  const [liveMetricsByItemId, setLiveMetricsByItemId] = useState({})
  const tabRefs = useRef([])

  const sectionsWithLiveMetrics = useMemo(
    () => applyLiveMetrics(portfolioSectionsData, liveMetricsByItemId),
    [liveMetricsByItemId],
  )

  useEffect(() => {
    if (liveMetricRequestItems.length === 0) return undefined

    let intervalId
    let isDisposed = false

    const fetchLiveMetrics = async () => {
      try {
        const response = await fetch('/api/social-metrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: liveMetricRequestItems }),
        })

        if (!response.ok) return

        const payload = await response.json()
        if (!payload || typeof payload !== 'object' || !payload.metrics || typeof payload.metrics !== 'object') {
          return
        }

        if (!isDisposed) {
          setLiveMetricsByItemId(payload.metrics)
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Live metrics fetch failed:', error)
        }
      }
    }

    fetchLiveMetrics()
    intervalId = window.setInterval(fetchLiveMetrics, liveMetricsRefreshIntervalMs)

    return () => {
      isDisposed = true
      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [])

  const handleTabKeyDown = (event, currentIndex) => {
    let nextIndex = currentIndex

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % sectionsWithLiveMetrics.length
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + sectionsWithLiveMetrics.length) % sectionsWithLiveMetrics.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = sectionsWithLiveMetrics.length - 1
    } else {
      return
    }

    event.preventDefault()

    const nextSection = sectionsWithLiveMetrics[nextIndex]
    setActiveTab(nextSection.id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="relative isolate overflow-hidden">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-48 h-[28rem] w-[28rem] rounded-full bg-sky-400/15 blur-3xl animate-float" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl animate-pulse-slow" />
      </div>

      <div className="fixed right-4 top-4 z-50 flex items-center gap-2 text-mist/85 md:right-6 md:top-6">
        <a
          href={instagramHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-xl transition hover:border-white/70 hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-xl transition hover:border-white/70 hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M6.2 8.4a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM4.8 9.8h2.8V19H4.8V9.8Zm4.6 0h2.7v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V19h-2.8v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3V19H9.4V9.8Z" />
          </svg>
        </a>
        <a
          href={phoneHref}
          aria-label="Call Alex Garrett"
          title="Call"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-xl transition hover:border-white/70 hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 4.2 2 2 0 0 1 5 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2L8 9.4a16 16 0 0 0 6.6 6.6l1.2-1.2a2 2 0 0 1 2-.4 11.2 11.2 0 0 0 2.5.6A2 2 0 0 1 22 16.9z" />
          </svg>
        </a>
        <a
          href={projectBriefHref}
          aria-label="Email Alex Garrett"
          title="Email"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-xl transition hover:border-white/70 hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 6h16v12H4z" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
      </div>

      <main id="main-content">
        <section id="top" className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-14 pt-20 md:grid-cols-2 md:items-end md:px-10 md:pt-24">
          <div className="animate-fade-up">
            <h1
              className="animate-title-reveal text-balance font-display text-6xl leading-[0.9] text-mist md:text-8xl"
              style={{ fontFamily: appleGaramondStack }}
            >
              Alex Garrett
            </h1>
            <p
              className="mt-1 text-xl font-bold leading-tight text-mist/90 md:text-3xl"
              style={{ fontFamily: "'SF Pro Display', 'SF Pro Text', 'Avenir Next', 'Segoe UI', sans-serif" }}
            >
              <span className="block">Videographer</span>
              <span className="block">Video Editor</span>
              <span className="block">VFX Artist</span>
              <span className="block">Software Engineer</span>
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point.labelMain} className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-4xl font-semibold leading-none text-mist md:text-5xl">{point.value}</p>
                  <p className="mt-3 uppercase tracking-[0.14em] leading-tight">
                    <span className="block text-base font-semibold text-mist/85">{point.labelMain}</span>
                    <span className="mt-1 block text-[10px] text-mist/50">{point.labelSub}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-glow">
              <OptimizedLoopVideo
                className="h-full w-full object-cover"
                eager
                poster="/media/hero-poster.jpg"
                src={heroVideoSrc}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
          </div>
        </section>

        {marqueeLogos.length > 0 ? (
          <section className="logo-marquee-shell pb-14" aria-label="Client logo showcase">
            <div className="logo-marquee">
              <div className="logo-marquee__track">
                {marqueeLogos.map((logo, index) => {
                  const isDuplicate = index >= showcaseLogos.length
                  const normalizedFileName = logo.fileName.toLowerCase()
                  const logoClassName = [
                    'logo-marquee__glyph',
                    normalizedFileName.includes('interviewcoder') ? 'logo-marquee__glyph--invert' : '',
                    normalizedFileName.includes('utah_utes_primary_logo') ? 'logo-marquee__glyph--utah' : '',
                    normalizedFileName === '6568d7309470e1a797a97baf_infinite-views-logo_black.png'
                      ? 'logo-marquee__glyph--omi'
                      : '',
                    normalizedFileName === '3.webp' || normalizedFileName === 'cluely_logo.png'
                      ? 'logo-marquee__glyph--boost'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')

                  return (
                    <div
                      key={`${logo.id}-${index}`}
                      className="logo-marquee__item"
                      aria-hidden={isDuplicate}
                      role={isDuplicate ? undefined : 'img'}
                      aria-label={isDuplicate ? undefined : logo.name}
                    >
                      <a
                        className="logo-marquee__link"
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={isDuplicate ? undefined : `${logo.name} website`}
                        tabIndex={isDuplicate ? -1 : undefined}
                      >
                        <img
                          className={logoClassName}
                          src={logo.src}
                          alt={isDuplicate ? '' : logo.name}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto w-full max-w-7xl px-6 pb-18 md:px-10" id="work">
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-4 shadow-2xl shadow-black/30 md:p-6">
            <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Portfolio sections">
              {sectionsWithLiveMetrics.map((section, index) => {
                const isActive = activeTab === section.id

                return (
                  <button
                    key={section.id}
                    ref={(element) => {
                      tabRefs.current[index] = element
                    }}
                    id={`tab-${section.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${section.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    onClick={() => setActiveTab(section.id)}
                    className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.14em] transition md:px-5 ${
                      isActive
                        ? 'border-white bg-white text-black'
                        : 'border-white/25 bg-transparent text-mist/70 hover:border-white/60 hover:text-mist'
                    }`}
                  >
                    {section.title}
                  </button>
                )
              })}
            </div>

            {sectionsWithLiveMetrics.map((section) => {
              const isActivePanel = section.id === activeTab
              const panelGridClassName =
                section.id === 'social-media' ? 'grid gap-6 grid-cols-1 lg:grid-cols-4' : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3'

              return (
                <div
                  key={section.id}
                  id={`panel-${section.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${section.id}`}
                  tabIndex={0}
                  hidden={!isActivePanel}
                >
                  {isActivePanel ? (
                    <>
                      <div className={panelGridClassName}>
                        {section.items.map((item, index) => (
                          <PortfolioCard key={item.id} item={item} index={index} />
                        ))}
                      </div>
                      {section.id === 'social-media' ? (
                        <p className="mt-4 text-center text-[11px] text-mist/55 md:text-xs">
                          Engagement statistics may be outdated or incorrect
                        </p>
                      ) : null}
                    </>
                  ) : null}
                </div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10" id="services">
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.16em] text-mist/50">Services</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-mist md:text-5xl">
                Services I Offer
              </h2>
              <p className="mt-3 text-sm text-mist/75 md:text-base">
                Available as full projects or individual services.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceOfferings.map((service) => (
                <article key={service.title} className="rounded-2xl border border-white/15 bg-black/30 p-5">
                  <h3 className="font-display text-2xl leading-tight text-mist">{service.title}</h3>
                  <p className="mt-2 text-sm text-mist/75">{service.description}</p>
                  {service.details?.length ? (
                    <ul className="mt-4 grid gap-2 text-sm text-mist/80">
                      {service.details.map((detail) => (
                        <li key={`${service.title}-${detail}`} className="rounded-lg border border-white/10 bg-black/25 px-3 py-2">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10" id="contact">
          <div className="rounded-3xl border border-white/20 bg-[linear-gradient(130deg,rgba(251,146,60,0.22),rgba(9,11,15,0.95))] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-mist/60">Contact</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-mist md:text-5xl">
              Tell me what you need. I will send scope, timeline, and pricing.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-mist/75">
              Send a project brief, call directly, or connect on LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={projectBriefHref}
                className="inline-flex rounded-full border border-amber-200/70 bg-amber-200/95 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-amber-100"
              >
                Send Project Brief
              </a>
              <a
                href={phoneHref}
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-mist transition hover:border-white/70 hover:bg-white/10"
              >
                Call Directly
              </a>
              <a
                href={linkedinHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-mist transition hover:border-white/70 hover:bg-white/10"
              >
                Connect On LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-end md:px-10">
          <div>
            <p className="text-sm text-mist/60">
              Built by <span style={{ fontFamily: appleGaramondStack }}>Alex Garrett</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-mist/55">
            <a href="#work" className="transition hover:text-mist">
              Work
            </a>
            <a href="#services" className="transition hover:text-mist">
              Services
            </a>
            <a href="#contact" className="transition hover:text-mist">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
