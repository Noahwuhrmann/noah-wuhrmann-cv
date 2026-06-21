import { Reveal } from "@/components/ui/reveal"
import { useLanguage } from "@/lib/language-context"

export function ImpressumPage() {
  const { copy } = useLanguage()
  const legal = copy.impressum

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <Reveal className="subpage-hero__inner" showOnMount>
            <span className="eyebrow">{legal.eyebrow}</span>
            <h1 className="page-title">{legal.title}</h1>
            <p className="page-lead">{legal.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <Reveal className="legal-content" showOnMount>
            <div className="legal-block">
              <h2 className="legal-block__label">{legal.detailsLabel}</h2>
              <address className="legal-address">
                {legal.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>

            <div className="legal-block">
              <h2 className="legal-block__label">{legal.contactLabel}</h2>
              <p className="legal-line">
                <span className="legal-line__label">{legal.emailLabel}</span>
                <a className="legal-link" href={`mailto:${legal.email}`}>
                  {legal.email}
                </a>
              </p>
              <p className="legal-line">
                <span className="legal-line__label">{legal.websiteLabel}</span>
                <a
                  className="legal-link"
                  href={legal.websiteHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {legal.website}
                </a>
              </p>
            </div>

            <div className="legal-block">
              <h2 className="legal-block__label">{legal.responsibleLabel}</h2>
              <p className="legal-name">{legal.responsibleName}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
