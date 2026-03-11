import { useEffect, useMemo, useState } from 'react'

const portfolioSections = [
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Fast cuts, vertical storytelling, and branded motion built for feed performance.',
    items: [
      {
        id: 'ig-1',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DMZNWMJRyu5/',
        embedSrc: 'https://www.instagram.com/reel/DMZNWMJRyu5/embed',
        aspect: 'portrait',
      },
      {
        id: 'ig-2',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DOyrMpyCXV0/',
        embedSrc: 'https://www.instagram.com/reel/DOyrMpyCXV0/embed',
        aspect: 'portrait',
      },
      {
        id: 'tt-1',
        title: 'TikTok Video',
        source: 'TikTok',
        href: 'https://www.tiktok.com/@alexg.mov/video/7525330367616699662',
        embedType: 'tiktok',
        tiktokVideoId: '7525330367616699662',
        tiktokCreatorHref: 'https://www.tiktok.com/@alexg.mov?refer=embed',
        tiktokCreatorLabel: '@alexg.mov',
        tiktokCaption: 'No horses were harmed in the making of this edit',
        tiktokAudioHref: 'https://www.tiktok.com/music/original-sound-7525330434989837111?refer=embed',
        tiktokAudioLabel: '♬ original sound - alexg.mov',
        aspect: 'portrait',
      },
      {
        id: 'ig-3',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DJHzWMmoXz2/',
        embedSrc: 'https://www.instagram.com/reel/DJHzWMmoXz2/embed',
        aspect: 'portrait',
      },
      {
        id: 'tt-2',
        title: 'TikTok Video',
        source: 'TikTok',
        href: 'https://www.tiktok.com/@alexg.mov/video/7556166361496440077',
        embedType: 'tiktok',
        tiktokVideoId: '7556166361496440077',
        tiktokCreatorHref: 'https://www.tiktok.com/@alexg.mov?refer=embed',
        tiktokCreatorLabel: '@alexg.mov',
        tiktokAudioHref: 'https://www.tiktok.com/music/original-sound-7556166833800989453?refer=embed',
        tiktokAudioLabel: '♬ original sound - alexg.mov',
        aspect: 'portrait',
      },
      {
        id: 'ig-4',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DVipr1igHR3/',
        embedSrc: 'https://www.instagram.com/reel/DVipr1igHR3/embed',
        aspect: 'portrait',
      },
      {
        id: 'ig-5',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DVrfbfvjkko/',
        embedSrc: 'https://www.instagram.com/reel/DVrfbfvjkko/embed',
        aspect: 'portrait',
      },
      {
        id: 'ig-6',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DHqw-C_pAtq/',
        embedSrc: 'https://www.instagram.com/reel/DHqw-C_pAtq/embed',
        aspect: 'portrait',
      },
      {
        id: 'ig-7',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DN3XI1IYksn/',
        embedSrc: 'https://www.instagram.com/reel/DN3XI1IYksn/embed',
        aspect: 'portrait',
      },
      {
        id: 'ig-8',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/DJ5J48LgmjQ/',
        embedSrc: 'https://www.instagram.com/reel/DJ5J48LgmjQ/embed',
        aspect: 'portrait',
      },
      {
        id: 'ig-9',
        title: 'Instagram Reel',
        source: 'Instagram',
        href: 'https://www.instagram.com/reel/C4gJ_6qut97/',
        embedSrc: 'https://www.instagram.com/reel/C4gJ_6qut97/embed',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'widescreen',
    title: 'Widescreen',
    description: 'Interview and documentary-style edits designed for cinematic impact.',
    items: [
      {
        id: 'wide-1',
        title: 'LinkedIn Post',
        source: 'LinkedIn',
        href: 'https://www.linkedin.com/posts/abdulla007_i-spent-the-last-few-months-building-interview-activity-7389017263137366017-mnw5',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7389017099156787200?compact=1',
        aspect: 'landscape',
      },
      {
        id: 'wide-2',
        title: 'YouTube Feature',
        source: 'YouTube',
        href: 'https://www.youtube.com/watch?v=RE6ahIf3kwA&t=61s',
        embedSrc: 'https://www.youtube.com/embed/RE6ahIf3kwA?si=UruYK2nYYktv_gV9',
        aspect: 'landscape',
      },
      {
        id: 'wide-3',
        title: 'YouTube Feature',
        source: 'YouTube',
        href: 'https://www.youtube.com/watch?v=xTR8c4j_DKk&t=13s',
        embedSrc: 'https://www.youtube.com/embed/xTR8c4j_DKk?si=ehxl5zHvMEZbWEkJ',
        aspect: 'landscape',
      },
      {
        id: 'wide-4',
        title: 'LinkedIn Post',
        source: 'LinkedIn',
        href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7432919049581314048',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7432919049581314048?compact=1',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Motion-led campaigns and visual systems with polished, brand-first execution.',
    items: [
      {
        id: 'motion-1',
        title: 'Drive Showcase',
        source: 'Google Drive',
        href: 'https://drive.google.com/file/d/17DS1xWMJFBe0rNCXQHvWcRSJ1y_vxUPv/view',
        embedSrc: 'https://drive.google.com/file/d/17DS1xWMJFBe0rNCXQHvWcRSJ1y_vxUPv/preview',
        aspect: 'landscape',
      },
      {
        id: 'motion-2',
        title: 'LinkedIn Campaign',
        source: 'LinkedIn',
        href: 'https://www.linkedin.com/posts/kaedim_today-is-a-big-milestone-for-kaedim-for-activity-7434690563268018176--REi',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7434690372456558593?compact=1',
        aspect: 'linkedinCompact',
      },
    ],
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

const getLoopingEmbedSrc = (item) => {
  if (!item?.embedSrc || item.source !== 'YouTube') {
    return item?.embedSrc ?? ''
  }

  try {
    const embedUrl = new URL(item.embedSrc)
    const videoId = embedUrl.pathname.split('/').filter(Boolean).pop()

    if (videoId) {
      embedUrl.searchParams.set('autoplay', '1')
      embedUrl.searchParams.set('mute', '1')
      embedUrl.searchParams.set('loop', '1')
      embedUrl.searchParams.set('playlist', videoId)
      embedUrl.searchParams.set('playsinline', '1')
      embedUrl.searchParams.set('rel', '0')
    }

    return embedUrl.toString()
  } catch {
    return item.embedSrc
  }
}

const hasTikTokEmbeds = portfolioSections.some((section) =>
  section.items.some((item) => item.embedType === 'tiktok'),
)

const tiktokEmbedScriptId = 'tiktok-embed-script'

const formatLogoName = (filePath) =>
  filePath
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() ?? 'Client logo'

const logoNameOverrides = {
  '3.webp': 'Salt Cinema',
  '6568d7309470e1a797a97baf_infinite-views-logo_black.png': 'Infinite Views',
  'cluely_logo.png': 'Cluely',
  'interviewcoder_logo.png': 'Interview Coder',
  'kaedim_logo.png': 'Kaedim',
  'Starbucks_Corporation_Logo_2011.svg.webp': 'Starbucks',
  'Utah_Utes_primary_logo.png': 'University of Utah',
}

const logoWebsiteByFileName = {
  '3.webp': 'https://www.saltcinema.com',
  '6568d7309470e1a797a97baf_infinite-views-logo_black.png': 'https://www.infiniteviewsllc.com',
  'cluely_logo.png': 'https://cluely.com',
  'interviewcoder_logo.png': 'https://interviewcoder.co',
  'kaedim_logo.png': 'https://www.kaedim3d.com',
  'Starbucks_Corporation_Logo_2011.svg.webp': 'https://www.starbucks.com',
  'Utah_Utes_primary_logo.png': 'https://www.utah.edu',
}

const showcaseLogos = Object.entries(
  import.meta.glob('../logos/*.{png,jpg,jpeg,webp,svg,avif,gif}', { eager: true, import: 'default' }),
)
  .filter(([filePath]) => {
    const normalizedPath = filePath.toLowerCase()
    const fileName = filePath.split('/').pop()?.toLowerCase() ?? ''
    return (
      !normalizedPath.includes('screenshot') &&
      !normalizedPath.includes('favicon') &&
      fileName !== 'utah_utes_primary_logo.svg'
    )
  })
  .map(([filePath, src]) => {
    const fileName = filePath.split('/').pop() ?? ''

    return {
      id: filePath,
      fileName,
      name: logoNameOverrides[fileName] ?? formatLogoName(filePath),
      href: logoWebsiteByFileName[fileName] ?? null,
      src,
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

const marqueeLogos = [...showcaseLogos, ...showcaseLogos]

function App() {
  const [activeTab, setActiveTab] = useState(portfolioSections[0].id)
  const activeSection = useMemo(
    () => portfolioSections.find((section) => section.id === activeTab) ?? portfolioSections[0],
    [activeTab],
  )

  useEffect(() => {
    if (!hasTikTokEmbeds) {
      return
    }

    const triggerTikTokEmbedLoad = () => {
      if (typeof window.tiktokEmbedLoad === 'function') {
        window.tiktokEmbedLoad()
      }
    }

    const existingScript = document.getElementById(tiktokEmbedScriptId)
    if (existingScript) {
      triggerTikTokEmbedLoad()
      return
    }

    const script = document.createElement('script')
    script.id = tiktokEmbedScriptId
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    script.addEventListener('load', triggerTikTokEmbedLoad)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', triggerTikTokEmbedLoad)
    }
  }, [activeTab])

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-48 h-[28rem] w-[28rem] rounded-full bg-sky-400/15 blur-3xl animate-float" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl animate-pulse-slow" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-2xl tracking-wide">Alex Garrett</p>
          </div>
          <div className="flex items-center gap-2 text-mist/85">
            <a
              href="https://www.instagram.com/alexg.mov/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/70 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-garrett-a21564243/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/70 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.2 8.4a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM4.8 9.8h2.8V19H4.8V9.8Zm4.6 0h2.7v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V19h-2.8v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3V19H9.4V9.8Z" />
              </svg>
            </a>
            <a
              href="tel:+18016804694"
              aria-label="Call Alex Garrett"
              title="Call"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/70 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 4.2 2 2 0 0 1 5 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2L8 9.4a16 16 0 0 0 6.6 6.6l1.2-1.2a2 2 0 0 1 2-.4 11.2 11.2 0 0 0 2.5.6A2 2 0 0 1 22 16.9z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alexgarrett2468@gmail.com&su=Project%20Inquiry%20for%20Alex%20Garrett&body=Hi%20Alex%20Garrett%2C%0A%0A"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Alex Garrett"
              title="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/70 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-12 pt-20 md:grid-cols-2 md:items-end md:px-10 md:pt-24">
          <div className="space-y-8 animate-fade-up">
            <p className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-mist/75">
              Portfolio 2026
            </p>
            <h1 className="text-balance font-display text-5xl leading-[0.95] text-mist md:text-7xl">
              Videographer, Video Editor, VFX Artist, Software Engineer
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-glow animate-fade-up [animation-delay:120ms]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/673c98116312141d14ca1c64/67478ccd7306e5742c8124cd_sam-showreel-poster-00001.jpg"
            >
              <source src="https://cdn.prod.website-files.com/673c98116312141d14ca1c64/67478ccd7306e5742c8124cd_sam-showreel-transcode.mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </section>

        {marqueeLogos.length > 0 ? (
          <section className="logo-marquee-shell pb-12" aria-label="Logo showcase">
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
                    normalizedFileName === '3.webp' ||
                    normalizedFileName === 'cluely_logo.png'
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
                      {logo.href ? (
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
                      ) : (
                        <img
                          className={logoClassName}
                          src={logo.src}
                          alt={isDuplicate ? '' : logo.name}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10" id="work">
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-4 shadow-2xl shadow-black/30 md:p-6">
            <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Portfolio sections">
              {portfolioSections.map((section) => (
                <button
                  key={section.id}
                  role="tab"
                  aria-selected={activeTab === section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.14em] transition md:px-5 ${
                    activeTab === section.id
                      ? 'border-white bg-white text-black'
                      : 'border-white/25 bg-transparent text-mist/70 hover:border-white/60 hover:text-mist'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {activeSection.items.map((item, index) => (
                <article
                  key={item.id}
                  className="animate-fade-up overflow-hidden rounded-2xl border border-white/15 bg-black/50 transition duration-500 hover:-translate-y-1 hover:border-white/35 hover:bg-black/35"
                  style={{ animationDelay: `${90 + index * 80}ms` }}
                >
                  <div className={`${aspectClasses[item.aspect]} w-full overflow-hidden bg-black`}>
                    {item.embedType === 'tiktok' ? (
                      <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
                        <blockquote
                          className="tiktok-embed"
                          cite={item.href}
                          data-video-id={item.tiktokVideoId}
                          style={{ maxWidth: '605px', minWidth: '325px', margin: 0 }}
                        >
                          <section>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              title={item.tiktokCreatorLabel}
                              href={item.tiktokCreatorHref}
                            >
                              {item.tiktokCreatorLabel}
                            </a>
                            {item.tiktokCaption ? <p>{item.tiktokCaption}</p> : null}
                            <a target="_blank" rel="noreferrer" title={item.tiktokAudioLabel} href={item.tiktokAudioHref}>
                              {item.tiktokAudioLabel}
                            </a>
                          </section>
                        </blockquote>
                      </div>
                    ) : (
                      <iframe
                        src={getLoopingEmbedSrc(item)}
                        title={item.title}
                        className="block h-full w-full border-0"
                        loading="lazy"
                        allow={iframeAllow}
                        scrolling="no"
                        allowFullScreen
                      />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30" id="contact">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-end md:px-10">
          <div>
            <p className="text-sm text-mist/60">website made by Alex Garrett</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
