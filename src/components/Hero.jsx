import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const rootRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(() => {
      // Stagger in hero text content on load
      gsap.from(textRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.15,
      })

      // Image card slide in from right with soft scale
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: 80,
          opacity: 0,
          scale: 0.96,
          duration: 1,
          ease: 'power3.out',
          delay: 0.25,
        })
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="container-max flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 md:flex-row md:items-center"
    >
      <div
        ref={textRef}
        className="relative z-10 flex-1 space-y-5 md:space-y-6 text-center md:text-left"
      >
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] sm:text-[11px] font-medium shadow-sm ${
            theme === 'dark'
              ? 'border-sky-500/40 bg-slate-900/60 text-sky-100 shadow-sky-500/30'
              : 'border-blue-500/40 bg-blue-50 text-blue-700 shadow-blue-500/20'
          }`}
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>India&apos;s modern payments stack for high-growth businesses</span>
        </div>

        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight ${
            theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
          }`}
        >
          <span className="block">Powering the next generation</span>
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            of digital-first payments.
          </span>
        </h1>

        <p
          className={`max-w-xl text-xs sm:text-sm md:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300/90' : 'text-gray-600'
          }`}
        >
          WingsPay offers enterprise-grade payment APIs, smart routing, and
          intelligent risk controls to help you collect, disburse and manage
          money at scale — securely and in real time.
        </p>

        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-start">
          <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:brightness-110">
            Get started for free
          </button>
          <button
            className={`w-full sm:w-auto rounded-full border px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition ${
              theme === 'dark'
                ? 'border-slate-700/80 bg-slate-950/70 text-slate-100 shadow-slate-900/80 hover:border-slate-500 hover:bg-slate-900/90'
                : 'border-gray-300 bg-white text-gray-700 shadow-gray-200 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            Talk to sales
          </button>
        </div>

        <div
          className={`flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 pt-4 text-[10px] sm:text-[11px] ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
          }`}
        >
          <span>PCI-DSS Level 1 compliant</span>
          <span
            className={`h-1 w-1 rounded-full ${
              theme === 'dark' ? 'bg-slate-600' : 'bg-gray-400'
            }`}
          />
          <span>99.95% uptime SLA</span>
          <span
            className={`h-1 w-1 rounded-full ${
              theme === 'dark' ? 'bg-slate-600' : 'bg-gray-400'
            }`}
          />
          <span>Trusted by leading internet-first brands</span>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center md:justify-end w-full">
        <div
          ref={imageRef}
          className={`relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl md:rounded-3xl border p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg ${
            theme === 'dark'
              ? 'border-slate-800/70 bg-slate-900/80 shadow-[0_24px_80px_rgba(15,23,42,0.9)]'
              : 'border-gray-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.1)]'
          }`}
        >
          <div className="pointer-events-none absolute -left-16 -top-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-500/25 blur-3xl" />

          <div className="mb-3 sm:mb-4 flex items-center justify-between text-[10px] sm:text-xs">
            <span
              className={`rounded-full px-2 py-1 text-[10px] sm:text-[11px] ${
                theme === 'dark'
                  ? 'bg-slate-800/80 text-slate-200'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Live transaction overview
            </span>
            <span className="text-[10px] sm:text-[11px] text-emerald-400">
              +23.4% this week
            </span>
          </div>

          <div
            className={`space-y-2 sm:space-y-3 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 ring-1 ${
              theme === 'dark'
                ? 'bg-slate-900/80 ring-slate-800/70'
                : 'bg-gray-50 ring-gray-200'
            }`}
          >
            <div
              className={`flex items-center justify-between text-[10px] sm:text-[11px] ${
                theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
              }`}
            >
              <span>Today&apos;s volume</span>
              <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}>
                INR
              </span>
            </div>
            <p
              className={`text-xl sm:text-2xl font-semibold tracking-tight ${
                theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
              }`}
            >
              ₹ 12,84,92,310
            </p>
            <div className="relative w-full mt-3 sm:mt-4 overflow-hidden rounded-lg">
              <img 
                src="OIP.webp" 
                alt="transactions" 
                className="w-full h-auto max-h-40 sm:max-h-48 md:max-h-56 lg:max-h-64 object-contain object-center" 
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
            {[
              { label: 'Success rate', value: '99.32%', color: 'emerald-400' },
              { label: 'Average latency', value: '182 ms', color: 'sky-300' },
              { label: 'Smart retries', value: 'Enabled', color: 'indigo-300' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl sm:rounded-2xl p-2 sm:p-3 ring-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 ring-slate-800/70'
                    : 'bg-gray-50 ring-gray-200'
                }`}
              >
                <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}>
                  {stat.label}
                </p>
                <p
                  className={`mt-1 text-base sm:text-lg font-semibold text-${stat.color}`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
