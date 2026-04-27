import { useLanguage } from "@/lib/language-context"

const portraitImage = `${import.meta.env.BASE_URL}noah_wuhrmann.png`

export function AboutPage() {
  const { copy } = useLanguage()

  return (
    <section className="page-view">
      <div className="container">
        <div className="page-header glass-panel about-hero">
          <div className="about-copy">
            <span className="eyebrow">{copy.about.eyebrow}</span>
            <h1 className="page-title">{copy.about.title}</h1>
            <p className="page-lead">{copy.about.lead}</p>
          </div>

          <aside className="about-portrait-shell" aria-label="Portraet von Noah Wuhrmann">
            <div className="about-portrait-panel">
              <div className="about-portrait-glow" aria-hidden="true" />
              <img alt="Portraet von Noah Wuhrmann" className="about-portrait-image" src={portraitImage} />
            </div>
          </aside>
        </div>

        <div className="compact-grid">
          {copy.about.cards.map((card, index) => (
            <article className={index === 3 ? "content-card about-private-card" : "content-card"} key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
