import { useEffect, useState } from "react"

import { SparklesCore } from "@/components/ui/sparkles"

// Brand colours (Wuhrmann Solutions visual language): cyan, teal and blue,
// with a touch of near-white so the field keeps its sparkle.
const sparkleColors = ["#59d9ff", "#42e2c3", "#51a8ff", "#8ee9da", "#eaf7ff"]

export function HomeSparkles() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobilePortrait, setIsMobilePortrait] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)")
    // A phone in portrait collapses to a narrow CSS width, which previously
    // starved the sparkle field (240 vs. 760 in landscape, where the wider
    // viewport no longer matches the mobile breakpoint). Detect portrait
    // explicitly so we can keep the per-area density close to the landscape
    // look without touching desktop or mobile landscape.
    const portraitQuery = window.matchMedia(
      "(max-width: 767px) and (orientation: portrait)",
    )

    const update = () => {
      setIsMobile(mobileQuery.matches)
      setIsMobilePortrait(portraitQuery.matches)
    }

    update()
    mobileQuery.addEventListener("change", update)
    portraitQuery.addEventListener("change", update)

    return () => {
      mobileQuery.removeEventListener("change", update)
      portraitQuery.removeEventListener("change", update)
    }
  }, [])

  return (
    <div className="sparkles-visual">
      <div className="sparkles-field">
        <SparklesCore
          id="home-sparkles"
          background="transparent"
          minSize={isMobile ? 0.2 : 0.24}
          maxSize={isMobile ? 0.9 : 1.4}
          particleDensity={isMobilePortrait ? 760 : isMobile ? 240 : 760}
          className="sparkles-canvas"
          particleColor={sparkleColors}
          speed={isMobile ? 0.28 : 0.36}
        />
      </div>
      <div className="sparkles-mask" />
    </div>
  )
}

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-shell">
        <div className="hero-name-stage">
          <div className="hero-title-haze" aria-hidden="true" />
          <h1 className="hero-title">Noah Wuhrmann</h1>
        </div>
      </div>
    </section>
  )
}
