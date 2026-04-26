import { Fragment, useState } from "react"

import bduzLogo from "@/assets/logos/bduz.png"
import bfsuLogo from "@/assets/logos/bfsu.png"
import milLogo from "@/assets/logos/mil.png"
import tauLogo from "@/assets/logos/tau.png"
import zhawLogo from "@/assets/logos/zhaw.png"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const resumeLogoAssets = {
  "taurus-sports": {
    alt: "Taurus Sports AG",
    className: "is-wide",
    src: tauLogo,
  },
  zhaw: {
    alt: "ZHAW School of Engineering",
    className: "is-standard",
    src: zhawLogo,
  },
  "bildungszentrum-uster": {
    alt: "BFSU Bildungszentrum Uster",
    className: "is-ultra-wide",
    src: bfsuLogo,
  },
  "schweizer-armee": {
    alt: "Schweizer Armee",
    className: "is-wide",
    src: milLogo,
  },
  "swiss-armed-forces": {
    alt: "Swiss Armed Forces",
    className: "is-wide",
    src: milLogo,
  },
  "berufsschule-zuerich": {
    alt: "Berufsschule fuer Detailhandel und Pharmazie Zuerich",
    className: "is-ultra-wide",
    src: bduzLogo,
  },
  "vocational-school-zurich": {
    alt: "Vocational School of Retail and Pharmacy Zurich",
    className: "is-ultra-wide",
    src: bduzLogo,
  },
} as const

const resumeLogoSlotClasses = {
  "taurus-sports": "is-wide",
  zhaw: "is-standard",
  "bildungszentrum-uster": "is-ultra-wide",
  "schweizer-armee": "is-standard",
  "swiss-armed-forces": "is-standard",
  "berufsschule-zuerich": "is-ultra-wide",
  "vocational-school-zurich": "is-ultra-wide",
} as const

export function ResumePage() {
  const { copy } = useLanguage()
  const [isCareerOpen, setIsCareerOpen] = useState(true)
  const [isEducationOpen, setIsEducationOpen] = useState(false)

  const careerRows = copy.resume.rows.filter((row) => row.career)
  const educationRows = copy.resume.rows.filter((row) => row.education)
  const logoItems = [...copy.resume.logoBand.items, ...copy.resume.logoBand.items]

  return (
    <section className="page-view">
      <div className="container">
        <div className="page-header glass-panel">
          <span className="eyebrow">{copy.resume.eyebrow}</span>
          <h1 className="page-title">{copy.resume.title}</h1>
          <p className="page-lead">{copy.resume.lead}</p>
        </div>

        <div className="resume-desktop-layout">
          <div
            className={cn("resume-parallel-grid", isEducationOpen && "education-open")}
            id="resume-education-panel"
          >
            <div className="resume-period-header">
              <span>{copy.resume.labels.period}</span>
            </div>

            <div className="resume-track-header">
              <span>{copy.resume.labels.career}</span>
            </div>

            <button
              aria-controls="resume-education-panel"
              aria-expanded={isEducationOpen}
              className={cn("resume-education-toggle", isEducationOpen && "open")}
              onClick={() => setIsEducationOpen((open) => !open)}
              type="button"
            >
              <span className="resume-education-toggle-title">
                {copy.resume.labels.education}
              </span>
              <span className="resume-education-toggle-hint">
                {isEducationOpen
                  ? copy.resume.labels.collapse
                  : copy.resume.labels.expand}
              </span>
              <span className="resume-education-toggle-chevron" aria-hidden="true" />
            </button>

            {copy.resume.rows.map((row) => (
              <Fragment key={row.id}>
                <div className="resume-period-cell">
                  <span className="timeline-badge">{row.period}</span>
                </div>

                <article
                  className={cn(
                    "resume-track-card resume-track-card-career",
                    !row.career && "is-empty",
                  )}
                >
                  {row.career ? (
                    <div className="resume-track-card-content">
                      <h2>{row.career.title}</h2>
                      <p>{row.career.body}</p>
                      <ul>
                        {row.career.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="resume-track-placeholder" aria-hidden="true" />
                  )}
                </article>

                <article
                  className={cn(
                    "resume-track-card resume-track-card-education",
                    !row.education && "is-empty",
                  )}
                >
                  {row.education ? (
                    <div className="resume-track-card-content">
                      <h2>{row.education.title}</h2>
                      <p>{row.education.body}</p>
                      <ul>
                        {row.education.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="resume-track-placeholder" aria-hidden="true" />
                  )}
                </article>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="resume-mobile-layout">
          <section className="resume-mobile-section">
            <button
              aria-controls="resume-career-mobile"
              aria-expanded={isCareerOpen}
              className={cn(
                "resume-mobile-toggle resume-mobile-toggle-career",
                isCareerOpen && "open",
              )}
              onClick={() => setIsCareerOpen((open) => !open)}
              type="button"
            >
              <span>{copy.resume.labels.career}</span>
              <span className="resume-mobile-toggle-meta">
                {isCareerOpen
                  ? copy.resume.labels.collapse
                  : copy.resume.labels.expand}
              </span>
              <span className="resume-education-toggle-chevron" aria-hidden="true" />
            </button>

            <div
              className="timeline-grid resume-mobile-career-panel"
              hidden={!isCareerOpen}
              id="resume-career-mobile"
            >
              {careerRows.map((row) => (
                <article
                  className="timeline-row"
                  key={`${row.id}-career-mobile`}
                >
                  <div>
                    <span className="timeline-badge">{row.period}</span>
                  </div>
                  <div>
                    <h2>{row.career?.title}</h2>
                    <p>{row.career?.body}</p>
                    <ul>
                      {row.career?.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-mobile-section">
            <button
              aria-controls="resume-education-mobile"
              aria-expanded={isEducationOpen}
              className={cn(
                "resume-mobile-toggle",
                isEducationOpen && "open",
              )}
              onClick={() => setIsEducationOpen((open) => !open)}
              type="button"
            >
              <span>{copy.resume.labels.education}</span>
              <span className="resume-mobile-toggle-meta">
                {isEducationOpen
                  ? copy.resume.labels.collapse
                  : copy.resume.labels.expand}
              </span>
              <span className="resume-education-toggle-chevron" aria-hidden="true" />
            </button>

            <div
              className="resume-mobile-education-panel"
              hidden={!isEducationOpen}
              id="resume-education-mobile"
            >
              <div className="timeline-grid">
                {educationRows.map((row) => (
                  <article
                    className="timeline-row"
                    key={`${row.id}-education-mobile`}
                  >
                    <div>
                      <span className="timeline-badge">{row.period}</span>
                    </div>
                    <div>
                      <h2>{row.education?.title}</h2>
                      <p>{row.education?.body}</p>
                      <ul>
                        {row.education?.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="resume-logo-band-section" aria-labelledby="resume-logo-band-label">
          <div className="resume-logo-band-shell">
            <div className="resume-logo-band-label">
              <p id="resume-logo-band-label">{copy.resume.logoBand.label}</p>
              <span>{copy.resume.logoBand.hint}</span>
            </div>

            <div className="resume-logo-band-window" aria-hidden="true">
              <div className="resume-logo-band-track">
                {logoItems.map((item, index) => (
                  (() => {
                    const logo = resumeLogoAssets[item.id as keyof typeof resumeLogoAssets]

                    return (
                      <article
                        className={cn(
                          "resume-logo-card",
                          item.kind === "education" && "education",
                          logo?.className ?? resumeLogoSlotClasses[item.id as keyof typeof resumeLogoSlotClasses],
                        )}
                        key={`${item.id}-${index}`}
                      >
                        <div className="resume-logo-visual">
                          {logo ? (
                            <img
                              alt={logo.alt}
                              className="resume-logo-image"
                              loading="lazy"
                              src={logo.src}
                            />
                          ) : (
                            <span className="resume-logo-wordmark">{item.name}</span>
                          )}
                        </div>
                      </article>
                    )
                  })()
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
