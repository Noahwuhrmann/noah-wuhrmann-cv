import { useLanguage } from "@/lib/language-context"

export function SkillsPage() {
  const { copy } = useLanguage()

  return (
    <section className="page-view">
      <div className="container">
        <div className="page-header glass-panel">
          <span className="eyebrow">{copy.skills.eyebrow}</span>
          <h1 className="page-title">{copy.skills.title}</h1>
          <p className="page-lead">{copy.skills.lead}</p>
        </div>

        <div className="compact-grid">
          {copy.skills.items.map((item) => (
            <article className="content-card skill-card-page" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="skill-scale" aria-label="Skill level">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={`${item.title}-${index}`} className={index < item.level ? "active" : ""} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
