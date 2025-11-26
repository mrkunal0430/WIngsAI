import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    title: 'Unified Payments Stack',
    description:
      'Accept cards, UPI, netbanking and more with a single, modern API that scales as you grow.',
  },
  {
    title: 'Smart Routing Engine',
    description:
      'Auto-route transactions via the best-performing gateways for higher success rates and uptime.',
  },
  {
    title: 'Real-time Risk Controls',
    description:
      'Detect anomalies, set granular limits and protect every transaction with machine-led intelligence.',
  },
  {
    title: 'Instant Settlements',
    description:
      'Accelerate cash flow with configurable settlement cycles and automated reconciliation.',
  },
  {
    title: 'Enterprise-grade Security',
    description:
      'PCI-DSS Level 1, tokenization, encryption at rest and in transit — secure by default.',
  },
  {
    title: 'Developer-first Experience',
    description:
      'Clear documentation, SDKs and observability tools so you can ship payment experiences faster.',
  },
]

function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const { theme } = useTheme()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Staggered reveal for feature cards when section enters viewport
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.09,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="container-max space-y-6 md:space-y-8 lg:space-y-10"
    >
      <div className="max-w-2xl space-y-2 md:space-y-3">
        <h2
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight ${
            theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
          }`}
        >
          Built for modern internet-first businesses.
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
          }`}
        >
          From high-volume marketplaces to fast-growing SaaS companies, WingsPay
          offers a complete suite of payment capabilities with enterprise-grade
          reliability.
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <article
            key={feature.title}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className={`group relative overflow-hidden rounded-xl md:rounded-2xl border p-4 sm:p-5 text-left shadow-lg transition hover:-translate-y-1 ${
              theme === 'dark'
                ? 'border-slate-800/70 bg-slate-900/70 hover:border-sky-500/50 hover:shadow-sky-500/30'
                : 'border-gray-200 bg-white hover:border-blue-400 hover:shadow-blue-200/50'
            }`}
          >
            <div className="pointer-events-none absolute -right-6 -top-10 h-24 w-24 rounded-full bg-sky-500/15 blur-2xl transition group-hover:bg-sky-400/25" />
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
              <span className="text-[10px] sm:text-xs font-semibold">0{index + 1}</span>
            </div>
            <h3
              className={`mt-3 sm:mt-4 text-sm sm:text-base font-semibold ${
                theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
              }`}
            >
              {feature.title}
            </h3>
            <p
              className={`mt-2 text-xs sm:text-[13px] leading-relaxed ${
                theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
              }`}
            >
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
