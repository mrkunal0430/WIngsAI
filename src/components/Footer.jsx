import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const footerRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`mt-16 md:mt-20 border-t ${
        theme === 'dark'
          ? 'border-slate-800/80 bg-slate-950/95'
          : 'border-gray-200 bg-gray-50'
      }`}
      id="resources"
    >
      <div className="container-max py-8 md:py-10">
        <div className="grid gap-6 md:gap-8 md:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))]">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl text-lg md:text-xl font-semibold text-white shadow-md ${
                  theme === 'dark'
                    ? 'bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-sky-500/40'
                    : 'bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-blue-500/40'
                }`}
              >
                W
              </div>
              <span
                className={`text-sm md:text-base font-semibold tracking-tight ${
                  theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
                }`}
              >
                WingsPay
              </span>
            </div>
            <p
              className={`max-w-xs text-[14px] sm:text-[15px] leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
              }`}
            >
              WingsPay is a modern payments and payouts platform helping
              internet-first businesses orchestrate money movement securely and
              at scale.
            </p>
            <div
              className={`flex items-center gap-2 md:gap-3 text-[10px] sm:text-[11px] ${
                theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
              }`}
            >
              <span>© {new Date().getFullYear()} WingsPay Technologies.</span>
              <span
                className={`h-1 w-1 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700' : 'bg-gray-400'
                }`}
              />
              <span>All rights reserved.</span>
            </div>
            <div
              className={`flex gap-2 text-[10px] sm:text-[11px] ${
                theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
              }`}
            >
              <a
                href="#support"
                className={`hover:transition-colors ${
                  theme === 'dark' ? 'hover:text-slate-300' : 'hover:text-gray-700'
                }`}
              >
                Terms
              </a>
              <span
                className={`h-1 w-1 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700' : 'bg-gray-400'
                }`}
              />
              <a
                href="#support"
                className={`hover:transition-colors ${
                  theme === 'dark' ? 'hover:text-slate-300' : 'hover:text-gray-700'
                }`}
              >
                Privacy
              </a>
            </div>
          </div>

          {[
            {
              title: 'Products',
              items: ['Payment Gateway', 'Payouts', 'UPI Stack', 'Subscriptions'],
            },
            {
              title: 'Solutions',
              items: ['Marketplaces', 'SaaS & B2B', 'Fintech & Lending', 'D2C & Ecommerce'],
            },
            {
              title: 'Resources',
              items: ['API Docs', 'Integration Guides', 'Status & Uptime', 'Security'],
            },
            {
              title: 'Connect',
              items: [],
            },
          ].map((section, idx) => (
            <div key={section.title} className="space-y-2 md:space-y-3">
              <h4
                className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wide ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                {section.title}
              </h4>
              {section.items.length > 0 ? (
                <ul
                  className={`space-y-1 sm:space-y-1.5 text-[10px] sm:text-[11px] ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}
                >
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2">
                  <div className="flex gap-1.5 sm:gap-2">
                    {['in', 'X', '↗'].map((icon) => (
                      <button
                        key={icon}
                        className={`inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-[10px] sm:text-[11px] ring-1 transition-colors ${
                          theme === 'dark'
                            ? 'bg-slate-900 text-slate-300 ring-slate-800 hover:bg-slate-800 hover:text-white'
                            : 'bg-white text-gray-600 ring-gray-200 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                  <p
                    className={`text-[10px] sm:text-[11px] ${
                      theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
                    }`}
                  >
                    For enterprise pricing, reach out to{' '}
                    <span
                      className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}
                    >
                      sales@wingspay.in
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
