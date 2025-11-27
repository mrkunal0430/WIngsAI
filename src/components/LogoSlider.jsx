import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTheme } from '../contexts/ThemeContext'

// Placeholder company logos - you can replace these with actual logo images
const companies = [
  { img: '1.png' },
  { img: '2.png' },
  { img: '3.png' },
  { img: '4.png' },
  { img: '5.png' },
  { img: '6.png' },
  { img: '7.png' },
  { img: '8.webp' },
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
            className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12"
            style={{ width: '300%' }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 items-center justify-center h-12 sm:h-16 md:h-20 lg:h-24 w-24 sm:w-32 md:w-40 lg:w-48 p-2 sm:p-3 md:p-4"
              >
                <img 
                  src={company.img} 
                  alt="company logo" 
                  className="w-full h-full object-contain object-center transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
                />
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

