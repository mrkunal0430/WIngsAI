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
          start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const quickLinks = [
    { label: 'Payment Gateway', href: '#payments' },
    { label: 'Payouts', href: '#payouts' },
    { label: 'API Docs', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
  ]

  const resources = [
    { label: 'Integration Guides', href: '#guides' },
    { label: 'Status Page', href: '#status' },
    { label: 'Security', href: '#security' },
    { label: 'Support', href: '#support' },
  ]

  return (
    <footer
      ref={footerRef}
      className={`mt-12 sm:mt-16 md:mt-20 lg:mt-24 border-t ${
        theme === 'dark'
          ? 'border-slate-800/50 bg-slate-950/50 backdrop-blur-sm'
          : 'border-gray-200/50 bg-white/50 backdrop-blur-sm'
      }`}
      id="resources"
    >
      <div className="container-max py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="flex-1 max-w-md space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-bold text-white shadow-lg transition-transform duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-sky-500/50'
                    : 'bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-blue-500/50'
                }`}
              >
                W
              </div>
              <span
                className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight ${
                  theme === 'dark' ? 'text-slate-50' : 'text-gray-900'
                }`}
              >
                WingsPay
              </span>
            </div>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-300/80' : 'text-gray-600'
              }`}
            >
              Powering the next generation of digital-first payments. Built for
              modern businesses that demand enterprise-grade reliability and scale.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              {[
                { icon: '📧', label: 'Email', href: 'mailto:hello@wingspay.in' },
                { icon: '💬', label: 'Support', href: '#support' },
                { icon: '🐦', label: 'Twitter', href: '#twitter' },
                { icon: '💼', label: 'LinkedIn', href: '#linkedin' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl border transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'border-slate-800 bg-slate-900/50 hover:border-sky-500/50 hover:bg-slate-800/50'
                      : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-gray-50'
                  }`}
                  aria-label={social.label}
                >
                  <span className="text-base sm:text-lg group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4
                className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`group flex items-center gap-2 text-sm sm:text-base transition-colors duration-200 ${
                        theme === 'dark'
                          ? 'text-slate-300 hover:text-sky-300'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      <span
                        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                          theme === 'dark' ? 'text-sky-400' : 'text-blue-500'
                        }`}
                      >
                        →
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3 sm:space-y-4">
              <h4
                className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                Resources
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`group flex items-center gap-2 text-sm sm:text-base transition-colors duration-200 ${
                        theme === 'dark'
                          ? 'text-slate-300 hover:text-sky-300'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      <span
                        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                          theme === 'dark' ? 'text-sky-400' : 'text-blue-500'
                        }`}
                      >
                        →
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-10 sm:mt-12 md:mt-14 pt-8 sm:pt-10 border-t ${
            theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:sales@wingspay.in"
                className={`text-sm sm:text-base font-medium transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-sky-300'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                sales@wingspay.in
              </a>
              <span
                className={`hidden sm:inline-block h-1 w-1 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700' : 'bg-gray-400'
                }`}
              />
              <span
                className={`text-sm sm:text-base ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                Available 24/7
              </span>
            </div>
            <div
              className={`text-xs sm:text-sm ${
                theme === 'dark' ? 'text-slate-500' : 'text-gray-400'
              }`}
            >
              Made with{' '}
              <span className="text-red-500">♥</span>{' '}
              in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
