import { Icon, type IconName } from "@/components/ui/icons"
import { Reveal } from "@/components/ui/reveal"
import { SubpageScrollCue } from "@/components/ui/subpage-scroll-cue"
import { useLanguage } from "@/lib/language-context"

const portraitImage = `${import.meta.env.BASE_URL}noah_wuhrmann.png?v=20260620`

const cardIcons: IconName[] = ["user", "gears", "spark", "heart"]

export function AboutPage() {
  const { copy } = useLanguage()

  return (
    <>
      <div className="subpage-intro">
        <section className="subpage-hero">
          <div className="container">
            <Reveal className="subpage-hero__inner" showOnMount>
              <span className="eyebrow">{copy.about.eyebrow}</span>
              <h1 className="page-title">{copy.about.title}</h1>
              <p className="page-lead">{copy.about.lead}</p>
            </Reveal>
          </div>
        </section>

        <SubpageScrollCue />
      </div>

      <section className="page-section">
        <div className="container split-layout split-layout--narrow-first about-profile">
          <Reveal className="about-portrait-shell" aria-label="Portraet von Noah Wuhrmann">
            <div className="about-portrait-panel">
              <div className="about-portrait-glow" aria-hidden="true" />
              <img
                alt="Portraet von Noah Wuhrmann"
                className="about-portrait-image"
                src={portraitImage}
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="about-profile-copy">
            <span className="section-kicker">{copy.about.profileLabel}</span>
            <div className="benefit-grid">
              {copy.about.traits.map((trait) => (
                <div className="benefit-item" key={trait}>
                  <span aria-hidden="true" />
                  {trait}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="container">
          <Reveal className="section-heading">
            <span className="section-kicker">{copy.about.detailLabel}</span>
            <h2 className="section-title">{copy.about.detailTitle}</h2>
          </Reveal>

          <div className="compact-grid">
            {copy.about.cards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 80}
                className={index === 3 ? "about-private-card" : undefined}
              >
                <article className="content-card info-card">
                  <Icon name={cardIcons[index] ?? "user"} />
                  <h2>{card.title}</h2>
                  <p>{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
