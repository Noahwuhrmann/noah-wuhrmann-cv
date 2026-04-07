import { HomeHero } from "@/components/hero/home-hero"
import { useLanguage } from "@/lib/language-context"

export function HomePage() {
  const { copy } = useLanguage()
  const marqueeItems = [...copy.home.marqueeItems, ...copy.home.marqueeItems]

  return (
    <div className="home-page">
      <HomeHero />

      <section className="home-reveal" aria-labelledby="home-marquee-label">
        <div className="container">
          <div className="home-reveal-shell">
            <div className="home-reveal-label">
              <p id="home-marquee-label">{copy.home.marqueeLabel}</p>
            </div>

            <div className="home-marquee-window" aria-hidden="true">
              <div className="home-marquee-track">
                {marqueeItems.map((item, index) => (
                  <span className="home-marquee-pill" key={`${item}-${index}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
