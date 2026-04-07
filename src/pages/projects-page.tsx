import { useLanguage } from "@/lib/language-context"

export function ProjectsPage() {
  const { copy } = useLanguage()

  return (
    <section className="page-view">
      <div className="container">
        <div className="page-header glass-panel">
          <span className="eyebrow">{copy.projects.eyebrow}</span>
          <h1 className="page-title">{copy.projects.title}</h1>
          <p className="page-lead">{copy.projects.lead}</p>
        </div>

        <div className="compact-grid">
          {copy.projects.items.map((item) => (
            <article className="content-card project-card-page" key={item.label}>
              <span className="project-badge">{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
