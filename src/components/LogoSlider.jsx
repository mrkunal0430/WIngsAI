import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTheme } from '../contexts/ThemeContext'

// Placeholder company logos - you can replace these with actual logo images
const companies = [
  { name: 'Company 1', logo: '🏢' },
  { name: 'Company 2', logo: '💼' },
  { name: 'Company 3', logo: '🚀' },
  { name: 'Company 4', logo: '⭐' },
  { name: 'Company 5', logo: '🎯' },
  { name: 'Company 6', logo: '💡' },
  { name: 'Company 7', logo: '🌟' },
  { name: 'Company 8', logo: '⚡' },
]

// Duplicate for seamless loop
const duplicatedCompanies = [...companies, ...companies, ...companies]

function LogoSlider() {
  const sliderRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!sliderRef.current) return

    const ctx = gsap.context(() => {
      // Continuous horizontal scroll animation
      gsap.to(sliderRef.current, {
        x: '-33.333%', // Move by one-third (one set of companies)
        duration: 20,
        ease: 'none',
        repeat: -1,
      })
    }, sliderRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className={`py-8 md:py-12 overflow-hidden ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-gray-50'
      }`}
    >
      <div className="container-max mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p
            className={`text-xs md:text-sm font-medium uppercase tracking-wider ${
              theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
            }`}
          >
            Trusted by leading companies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex items-center gap-8 md:gap-12 lg:gap-16"
            style={{ width: '300%' }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className={`flex flex-shrink-0 items-center justify-center h-16 md:h-20 w-32 md:w-40 rounded-xl transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border border-slate-800/50 hover:border-slate-700 hover:bg-slate-900'
                    : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <span className="text-3xl md:text-4xl">{company.logo}</span>
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-20 z-10 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-slate-950 to-transparent'
                : 'bg-gradient-to-r from-gray-50 to-transparent'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-20 z-10 ${
              theme === 'dark'
                ? 'bg-gradient-to-l from-slate-950 to-transparent'
                : 'bg-gradient-to-l from-gray-50 to-transparent'
            }`}
          />
        </div>
      </div>
    </section>
  )
}

export default LogoSlider

