import { useEffect, useState } from "react"

import { SparklesCore } from "@/components/ui/sparkles"

export function HomeHero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const update = (event?: MediaQueryListEvent) => {
      setIsMobile(event ? event.matches : mediaQuery.matches)
    }

    update()
    mediaQuery.addEventListener("change", update)

    return () => {
      mediaQuery.removeEventListener("change", update)
    }
  }, [])

  return (
    <section className="home-hero">
      <div className="home-hero-ambient" aria-hidden="true">
        <div className="sparkles-visual">
          <div className="sparkles-field">
            <SparklesCore
              id="hero-sparkles"
              background="transparent"
              minSize={isMobile ? 0.2 : 0.24}
              maxSize={isMobile ? 0.9 : 1.4}
              particleDensity={isMobile ? 260 : 980}
              className="sparkles-canvas"
              particleColor="#FFFFFF"
              speed={isMobile ? 0.28 : 0.36}
            />
          </div>
          <div className="sparkles-mask" />
        </div>
      </div>

      <div className="home-hero-shell">
        <div className="hero-name-stage">
          <div className="hero-title-haze" aria-hidden="true" />
          <h1 className="hero-title">Noah Wuhrmann</h1>
        </div>
      </div>
    </section>
  )
}
