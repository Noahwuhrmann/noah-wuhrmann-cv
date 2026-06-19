import { Icon, type IconName } from "@/components/ui/icons"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage } from "@/lib/language-context"

const projectIcons: IconName[] = ["image", "cart", "rocket"]

export function ProjectsPage() {
  const { copy } = useLanguage()

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <Reveal className="subpage-hero__inner">
            <span className="eyebrow">{copy.projects.eyebrow}</span>
            <h1 className="page-title">{copy.projects.title}</h1>
            <p className="page-lead">{copy.projects.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="compact-grid">
            {copy.projects.items.map((item, index) => (
              <Reveal key={item.label} delay={index * 90}>
                <article className="content-card info-card project-card-page">
                  <div className="info-card__top">
                    <Icon name={projectIcons[index] ?? "image"} />
                    <span className="step-num">{item.label}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className="project-card-footer">
                    <div className="project-card-skills">
                      <span className="project-card-skills-label">
                        {copy.projects.skillsLabel}
                      </span>
                      <div className="tag-list">
                        {item.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {item.href ? (
                      <a
                        className="project-view-button"
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <span>{copy.projects.ctaLabel}</span>
                        <span className="project-view-button__icon" aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <button className="project-view-button" type="button" disabled>
                        <span>{copy.projects.ctaLabel}</span>
                        <span className="project-view-button__icon" aria-hidden="true">↗</span>
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
