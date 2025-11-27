import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "../contexts/ThemeContext";

function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!navRef.current) return;

    // GSAP animation on load - ensure header stays visible
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Payments", href: "#payments" },
    { label: "Banking+", href: "#banking" },
    { label: "Payroll", href: "#payroll" },
    { label: "Engage", href: "#engage" },
    { label: "Partners", href: "#partners" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 
      ${isScrolled
        ? theme === "dark"
          ? "bg-slate-950 border-b border-slate-800/80 shadow-lg"
          : "bg-white border-b border-gray-200 shadow-md"
        : theme === "dark"
          ? "bg-slate-950/95 backdrop-blur-sm border-b border-slate-800/60"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200/60"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-18 items-center justify-between gap-2 sm:gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            <div
              className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg 
              ${theme === "dark"
                ? "bg-gradient-to-tr from-sky-400 to-indigo-500"
                : "bg-gradient-to-tr from-blue-500 to-indigo-600"
              } text-base sm:text-lg font-bold text-white shadow-md`}
            >
              W
            </div>
            <span
              className={`text-base sm:text-lg font-bold tracking-tight 
              ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              WingsPay
            </span>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors 
                ${theme === "dark"
                  ? "text-slate-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

            {/* Support Icon */}
            <button
              className={`hidden sm:flex h-9 w-9 items-center justify-center rounded-lg transition-colors 
              ${theme === "dark"
                ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors 
              ${theme === "dark"
                ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Login */}
            <button
              className={`hidden sm:inline-flex items-center rounded-lg border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors
              ${theme === "dark"
                ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Login
            </button>

            {/* Sign Up */}
            <button
              className={`flex items-center gap-1 sm:gap-1.5 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all
              ${theme === "dark"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg"
                : "bg-blue-600 hover:bg-blue-700 shadow-md"
              }`}
            >
              Sign Up
              <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
