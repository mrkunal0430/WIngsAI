import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: '💳',
    title: 'Unified Payments Stack',
    description:
      'Accept cards, UPI, netbanking and more with a single, modern API that scales as you grow.',
    gradient: 'from-sky-500/20 via-blue-500/20 to-indigo-500/20',
    borderGradient: 'from-sky-500/50 via-blue-500/50 to-indigo-500/50',
  },
  {
    icon: '⚡',
    title: 'Smart Routing Engine',
    description:
      'Auto-route transactions via the best-performing gateways for higher success rates and uptime.',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    borderGradient: 'from-emerald-500/50 via-teal-500/50 to-cyan-500/50',
  },
  {
    icon: '🛡️',
    title: 'Real-time Risk Controls',
    description:
      'Detect anomalies, set granular limits and protect every transaction with machine-led intelligence.',
    gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
    borderGradient: 'from-violet-500/50 via-purple-500/50 to-fuchsia-500/50',
  },
  {
    icon: '💸',
    title: 'Instant Settlements',
    description:
      'Accelerate cash flow with configurable settlement cycles and automated reconciliation.',
    gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    borderGradient: 'from-amber-500/50 via-orange-500/50 to-red-500/50',
  },
  {
    icon: '🔒',
    title: 'Enterprise-grade Security',
    description:
      'PCI-DSS Level 1, tokenization, encryption at rest and in transit — secure by default.',
    gradient: 'from-rose-500/20 via-pink-500/20 to-red-500/20',
    borderGradient: 'from-rose-500/50 via-pink-500/50 to-red-500/50',
  },
  {
    icon: '⚙️',
    title: 'Developer-first Experience',
    description:
      'Clear documentation, SDKs and observability tools so you can ship payment experiences faster.',
    gradient: 'from-indigo-500/20 via-blue-500/20 to-cyan-500/20',
    borderGradient: 'from-indigo-500/50 via-blue-500/50 to-cyan-500/50',
  },
]

function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const headerRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate header - mobile optimized
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
        })
      }

      // Staggered reveal for feature cards - mobile optimized
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const isMobile = window.innerWidth < 640

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
          scale: isMobile ? 0.98 : 0.95,
          y: isMobile ? 20 : 50,
          opacity: 0,
          rotation: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          delay: index * 0.06,
        })

        // Hover animation - only on non-touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        if (!isTouchDevice) {
          const handleMouseEnter = () => {
            gsap.to(card, {
              scale: 1.02,
              y: -6,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out',
            })
          }

          const handleMouseLeave = () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out',
            })
          }

          card.addEventListener('mouseenter', handleMouseEnter)
          card.addEventListener('mouseleave', handleMouseLeave)

          return () => {
            card.removeEventListener('mouseenter', handleMouseEnter)
            card.removeEventListener('mouseleave', handleMouseLeave)
          }
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="w-full px-3 sm:px-4 md:px-6 lg:px-8 space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12"
    >
      {/* Header - Mobile Optimized */}
      <div ref={headerRef} className="max-w-3xl mx-auto space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
        <div className="inline-flex items-center gap-1.5 sm:gap-2">
          <span
            className={`text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border ${
              theme === 'dark'
                ? 'border-sky-500/30 bg-sky-500/10 text-sky-300'
                : 'border-blue-500/30 bg-blue-50 text-blue-600'
            }`}
          >
            Features
          </span>
        </div>
        <h2
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight leading-[1.2] sm:leading-tight ${
            theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
          }`}
        >
          Built for modern{' '}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            internet-first
          </span>{' '}
          businesses.
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
          }`}
        >
          From high-volume marketplaces to fast-growing SaaS companies, WingsPay
          offers a complete suite of payment capabilities with enterprise-grade
          reliability.
        </p>
      </div>

      {/* Features Grid - Mobile Optimized */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 max-w-7xl mx-auto">
        {FEATURES.map((feature, index) => (
          <article
            key={feature.title}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className={`group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 text-left transition-all duration-300 ${
              theme === 'dark'
                ? 'border-slate-800/70 bg-slate-900/60 backdrop-blur-sm hover:border-slate-700/90 hover:bg-slate-900/80 active:scale-[0.98]'
                : 'border-gray-200/80 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:bg-white active:scale-[0.98]'
            }`}
            style={{
              boxShadow:
                theme === 'dark'
                  ? '0 2px 8px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.05)'
                  : '0 2px 8px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)',
            }}
          >
            {/* Gradient Background Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Animated Border Gradient */}
            <div
              className={`absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Container - Mobile Optimized */}
              <div
                className={`mb-2.5 sm:mb-3 md:mb-4 lg:mb-5 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-lg sm:rounded-xl md:rounded-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  theme === 'dark'
                    ? 'bg-slate-800/80 backdrop-blur-sm'
                    : 'bg-gray-100/80 backdrop-blur-sm'
                }`}
              >
                {feature.icon}
              </div>

              {/* Title - Mobile Optimized */}
              <h3
                className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight mb-1.5 sm:mb-2 md:mb-2.5 transition-colors duration-300 leading-[1.3] sm:leading-tight ${
                  theme === 'dark'
                    ? 'text-slate-50 group-hover:text-sky-300'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}
              >
                {feature.title}
              </h3>

              {/* Description - Mobile Optimized */}
              <p
                className={`text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-slate-300/80 group-hover:text-slate-200'
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}
              >
                {feature.description}
              </p>

              {/* Decorative Element - Hidden on Mobile */}
              <div className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-5 flex items-center gap-1.5 sm:gap-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`h-0.5 w-6 sm:w-8 md:w-10 rounded-full bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'from-sky-500 to-indigo-500'
                      : 'from-blue-500 to-indigo-500'
                  }`}
                />
                <span
                  className={`text-[10px] sm:text-xs font-medium ${
                    theme === 'dark' ? 'text-sky-400' : 'text-blue-600'
                  }`}
                >
                  Learn more →
                </span>
              </div>
            </div>

            {/* Corner Accent - Mobile Optimized */}
            <div
              className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.borderGradient} opacity-0 sm:group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
