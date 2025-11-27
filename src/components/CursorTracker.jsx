import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function CursorTracker() {
  const containerRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    // Only enable particle effect on desktop (non-touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const container = containerRef.current
    if (!container) return

    let mouseX = 0
    let mouseY = 0
    let particleIndex = 0
    const maxParticles = 20
    const colors = [
      'rgba(14, 165, 233, 0.8)', // sky-500
      'rgba(129, 140, 248, 0.8)', // indigo-400
      'rgba(59, 130, 246, 0.8)', // blue-500
      'rgba(139, 92, 246, 0.8)', // violet-500
    ]

    // Create particles
    for (let i = 0; i < maxParticles; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        will-change: transform, opacity;
      `
      container.appendChild(particle)
      particlesRef.current.push({
        element: particle,
        active: false,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        color: colors[i % colors.length],
      })
    }

    const createParticle = (x, y) => {
      const particle = particlesRef.current[particleIndex]
      if (!particle) return

      particleIndex = (particleIndex + 1) % maxParticles

      const angle = Math.random() * Math.PI * 2
      const velocity = 2 + Math.random() * 3
      const distance = 30 + Math.random() * 50

      particle.vx = Math.cos(angle) * velocity
      particle.vy = Math.sin(angle) * velocity
      particle.x = x
      particle.y = y

      particle.element.style.left = `${x}px`
      particle.element.style.top = `${y}px`
      particle.element.style.backgroundColor = particle.color
      particle.element.style.boxShadow = `0 0 ${8 + Math.random() * 8}px ${particle.color}`
      particle.active = true

      // Animate particle
      gsap.fromTo(
        particle.element,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        },
        {
          opacity: 0,
          scale: 0,
          x: particle.vx * distance,
          y: particle.vy * distance,
          duration: 0.8 + Math.random() * 0.4,
          ease: 'power2.out',
          onComplete: () => {
            particle.active = false
          },
        }
      )
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create particles on mouse move
      if (Math.random() > 0.3) {
        // Create 1-3 particles
        const count = 1 + Math.floor(Math.random() * 3)
        for (let i = 0; i < count; i++) {
          setTimeout(() => {
            createParticle(
              mouseX + (Math.random() - 0.5) * 20,
              mouseY + (Math.random() - 0.5) * 20
            )
          }, i * 50)
        }
      }
    }

    // Enhanced particle burst on interactive elements
    const handleInteractiveHover = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Create burst of particles
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createParticle(
            centerX + (Math.random() - 0.5) * rect.width,
            centerY + (Math.random() - 0.5) * rect.height
          )
        }, i * 30)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleInteractiveHover)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractiveHover)
      })
      // Cleanup particles
      particlesRef.current.forEach((particle) => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element)
        }
      })
      particlesRef.current = []
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default CursorTracker
