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
      // Animate header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
        })
      }

      // Staggered reveal for feature cards with scale and rotation
      cardsRef.current.forEach((card, index) => {
        if (!card) return
        
        // Check if device is mobile (smaller screens)
        const isMobile = window.innerWidth < 640
        
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          scale: 0.95,
          y: isMobile ? 30 : 50,
          opacity: 0,
          rotation: isMobile ? 0 : (index % 2 === 0 ? -2 : 2),
          duration: 0.8,
          ease: isMobile ? 'power3.out' : 'back.out(1.2)',
          delay: index * 0.08,
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
              rotation: isMobile ? 0 : (index % 2 === 0 ? -0.5 : 0.5),
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
      className="container-max space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-3xl space-y-2 sm:space-y-3 md:space-y-4">
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
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight ${
            theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
          }`}
        >
          Built for modern
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            {' '}
            internet-first{' '}
          </span>
          businesses.
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl ${
            theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
          }`}
        >
          From high-volume marketplaces to fast-growing SaaS companies, WingsPay
          offers a complete suite of payment capabilities with enterprise-grade
          reliability.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        {FEATURES.map((feature, index) => (
          <article
            key={feature.title}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className={`group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-left transition-all duration-500 ${
              theme === 'dark'
                ? 'border-slate-800/70 bg-slate-900/60 backdrop-blur-sm hover:border-slate-700/90 hover:bg-slate-900/80 active:scale-[0.98]'
                : 'border-gray-200/80 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:bg-white active:scale-[0.98]'
            }`}
            style={{
              boxShadow:
                theme === 'dark'
                  ? '0 2px 12px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.05)'
                  : '0 2px 12px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02)',
            }}
          >
            {/* Gradient Background Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Animated Border Gradient */}
            <div
              className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Container */}
              <div
                className={`mb-3 sm:mb-4 md:mb-5 lg:mb-6 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                  theme === 'dark'
                    ? 'bg-slate-800/80 backdrop-blur-sm'
                    : 'bg-gray-100/80 backdrop-blur-sm'
                }`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight mb-2 sm:mb-2.5 md:mb-3 transition-colors duration-300 leading-tight ${
                  theme === 'dark'
                    ? 'text-slate-50 group-hover:text-sky-300'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className={`text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-slate-300/80 group-hover:text-slate-200'
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}
              >
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center gap-1.5 sm:gap-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
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

            {/* Corner Accent */}
            <div
              className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${feature.borderGradient} opacity-0 sm:group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
