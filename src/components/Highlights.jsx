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
    img: 'payments.jpg',
  },
  {
    label: 'Payouts & Disbursals',
    title: 'Instant payouts for your ecosystem.',
    body: 'Disburse funds to vendors, partners and customers in real time with powerful approval workflows and audit-ready logs.',
    stats: ['1.3s median payout time', 'Real-time reconciliation', 'Configurable approval rules'],
    img: 'payouts.webp',
  },
  {
    label: 'Compliance & Security',
    title: 'Compliance handled, by design.',
    body: 'Built with India-first regulatory requirements at the core so your teams can move fast while staying compliant and secure.',
    stats: ['PCI-DSS Level 1', 'Tokenization & vaulting', 'Granular access controls'],
    img: 'compliance.jpg',
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
      className="container-max space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
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

      <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
        {HIGHLIGHTS.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => {
              blocksRef.current[index] = el
            }}
            className={`grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 rounded-2xl md:rounded-3xl border p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg md:grid-cols-2 md:items-center ${
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

           <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl md:rounded-2xl bg-transparent">
              <img 
                src={item.img} 
                alt="highlight image" 
                className="w-full h-full object-cover object-center rounded-xl md:rounded-2xl" 
                loading="lazy"
              />
            </div>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default Highlights
