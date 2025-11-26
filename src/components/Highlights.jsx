import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const HIGHLIGHTS = [
  {
    label: 'Enterprise Payments',
    title: 'Designed for scale from day zero.',
    body: 'Orchestrate complex payment flows across multiple entities, currencies and methods while maintaining complete control and observability.',
    stats: ['10M+ monthly transactions', 'Active-active architecture', '99.95% uptime SLA'],
  },
  {
    label: 'Payouts & Disbursals',
    title: 'Instant payouts for your ecosystem.',
    body: 'Disburse funds to vendors, partners and customers in real time with powerful approval workflows and audit-ready logs.',
    stats: ['1.3s median payout time', 'Real-time reconciliation', 'Configurable approval rules'],
  },
  {
    label: 'Compliance & Security',
    title: 'Compliance handled, by design.',
    body: 'Built with India-first regulatory requirements at the core so your teams can move fast while staying compliant and secure.',
    stats: ['PCI-DSS Level 1', 'Tokenization & vaulting', 'Granular access controls'],
  },
]

function Highlights() {
  const sectionRef = useRef(null)
  const blocksRef = useRef([])
  const { theme } = useTheme()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, index) => {
        if (!block) return
        const fromDirection = index % 2 === 0 ? -80 : 80

        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 75%',
          },
          x: fromDirection,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="container-max space-y-8 md:space-y-10 lg:space-y-12"
    >
      <div className="flex flex-col gap-2 md:gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2 md:space-y-3">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight ${
              theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
            }`}
          >
            Everything you need to run payments at internet scale.
          </h2>
          <p
            className={`max-w-xl text-xs sm:text-sm md:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
            }`}
          >
            Combine powerful payment acceptance, intelligent payouts and
            compliance-ready infrastructure in one modern platform.
          </p>
        </div>
      </div>

      <div className="space-y-5 md:space-y-6">
        {HIGHLIGHTS.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => {
              blocksRef.current[index] = el
            }}
            className={`grid gap-4 md:gap-6 rounded-2xl md:rounded-3xl border p-4 md:p-5 shadow-lg md:grid-cols-2 md:items-center ${
              theme === 'dark'
                ? 'border-slate-800/70 bg-slate-900/70 shadow-[0_22px_60px_rgba(15,23,42,0.9)]'
                : 'border-gray-200 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)]'
            } ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div className="space-y-2 md:space-y-3">
              <span
                className={`inline-flex rounded-full border px-2.5 md:px-3 py-1 text-[10px] sm:text-[11px] font-medium ${
                  theme === 'dark'
                    ? 'border-sky-500/30 bg-sky-500/10 text-sky-200'
                    : 'border-blue-500/30 bg-blue-50 text-blue-700'
                }`}
              >
                {item.label}
              </span>
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-semibold tracking-tight ${
                  theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
                }`}
              >
                {item.body}
              </p>
              <div className="mt-3 grid gap-2 md:gap-3 text-[10px] sm:text-xs md:grid-cols-3">
                {item.stats.map((stat) => (
                  <div
                    key={stat}
                    className={`rounded-xl md:rounded-2xl p-2.5 md:p-3 ring-1 ${
                      theme === 'dark'
                        ? 'bg-slate-900/80 ring-slate-800/80 text-slate-200'
                        : 'bg-gray-50 ring-gray-200 text-gray-700'
                    }`}
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-40 sm:h-44 overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-sky-400/10 ring-1 ring-sky-500/30">
              {/* Placeholder chart / illustration */}
              <div className="absolute inset-0 opacity-80">
                <div
                  className={`absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 h-20 sm:h-24 rounded-lg sm:rounded-xl backdrop-blur-md ring-1 ${
                    theme === 'dark'
                      ? 'bg-slate-950/60 ring-slate-800/80'
                      : 'bg-white/60 ring-gray-200/80'
                  }`}
                />
                <div className="absolute inset-x-6 sm:inset-x-10 bottom-6 sm:bottom-8 flex h-12 sm:h-16 items-end gap-1.5 sm:gap-2">
                  <div className="flex-1 rounded-t-full bg-gradient-to-t from-sky-500/40 to-sky-400/0" />
                  <div className="flex-1 rounded-t-full bg-gradient-to-t from-indigo-500/40 to-indigo-400/0" />
                  <div className="flex-1 rounded-t-full bg-gradient-to-t from-emerald-500/40 to-emerald-400/0" />
                  <div className="flex-1 rounded-t-full bg-gradient-to-t from-sky-500/40 to-sky-400/0" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights
