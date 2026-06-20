import { Reveal } from "@/components/ui/reveal"
import { SubpageScrollCue } from "@/components/ui/subpage-scroll-cue"
import { useLanguage } from "@/lib/language-context"

function ContactIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase()

  if (normalized.includes("mail")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4.75 6.75h14.5v10.5H4.75z" />
        <path d="m5.25 7.25 6.75 5 6.75-5" />
      </svg>
    )
  }

  if (normalized.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.5 10v7.25" />
        <path d="M6.5 6.75v.1" />
        <path d="M10.5 17.25v-7.1" />
        <path d="M10.5 13.4c0-2.05 1.25-3.4 3.1-3.4 2.05 0 3.15 1.35 3.15 3.85v3.4" />
      </svg>
    )
  }

  if (normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 4.75a7.35 7.35 0 0 0-2.3 14.33c.37.07.5-.16.5-.36v-1.3c-2.05.45-2.48-.88-2.48-.88-.34-.86-.82-1.08-.82-1.08-.67-.46.05-.45.05-.45.74.05 1.13.76 1.13.76.66 1.12 1.72.8 2.14.61.07-.48.26-.8.47-.99-1.64-.18-3.36-.82-3.36-3.65 0-.8.29-1.46.76-1.98-.08-.18-.33-.94.07-1.95 0 0 .62-.2 2.03.76A7 7 0 0 1 12 8.33c.62 0 1.23.08 1.8.25 1.42-.96 2.04-.76 2.04-.76.4 1.01.15 1.77.07 1.95.47.52.75 1.18.75 1.98 0 2.84-1.72 3.46-3.36 3.64.26.23.5.68.5 1.38v1.95c0 .2.13.43.5.36A7.35 7.35 0 0 0 12 4.75Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 20.25s6-5.25 6-10a6 6 0 0 0-12 0c0 4.75 6 10 6 10Z" />
      <path d="M12 12.25a2.15 2.15 0 1 0 0-4.3 2.15 2.15 0 0 0 0 4.3Z" />
    </svg>
  )
}

export function ContactPage() {
  const { copy } = useLanguage()
  const email = copy.contact.methods[0]

  return (
    <>
      <div className="subpage-intro">
        <section className="subpage-hero">
          <div className="container">
            <Reveal className="subpage-hero__inner" showOnMount>
              <span className="eyebrow">{copy.contact.eyebrow}</span>
              <h1 className="page-title">{copy.contact.title}</h1>
              <p className="page-lead">{copy.contact.lead}</p>
            </Reveal>
          </div>
        </section>

        <SubpageScrollCue />
      </div>

      <section className="page-section">
        <div className="container">
          <Reveal as="span" className="section-kicker contact-direct-label">
            {copy.contact.directLabel}
          </Reveal>
          <div className="split-layout contact-split">
            <Reveal className="contact-methods-col">
              <div className="contact-column">
                {copy.contact.methods.map((method) =>
                  method.href ? (
                    <a
                      className="contact-link card-link"
                      href={method.href}
                      key={method.label}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="contact-badge">
                        <ContactIcon label={method.label} />
                      </span>
                      <span className="contact-text">
                        <strong>{method.label}</strong>
                        <span>{method.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="contact-link" key={method.label}>
                      <span className="contact-badge">
                        <ContactIcon label={method.label} />
                      </span>
                      <span className="contact-text">
                        <strong>{method.label}</strong>
                        <span>{method.value}</span>
                      </span>
                    </div>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal delay={120} className="contact-brand-col">
              <div className="brand-panel contact-brand-panel">
                <span className="brand-panel__label">{email.label}</span>
                <h2 className="section-title">{copy.contact.panelTitle}</h2>
                {email.href ? (
                  <a className="contact-panel-email" href={email.href}>
                    {email.value}
                  </a>
                ) : (
                  <span className="contact-panel-email">{email.value}</span>
                )}
                {email.href ? (
                  <a className="liquid-button primary" href={email.href}>
                    <span>{copy.contact.panelCta}</span>
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  )
}
