import type { CSSProperties } from "react"

import { useLanguage } from "@/lib/language-context"

const maxSkillLevel = 5

function getSkillStyle(level: number): CSSProperties {
  const clampedLevel = Math.min(Math.max(level, 0), maxSkillLevel)

  return {
    "--skill-level": `${(clampedLevel / maxSkillLevel) * 100}%`,
  } as CSSProperties
}

export function SkillsPage() {
  const { copy } = useLanguage()

  return (
    <section className="page-view skills-page-view">
      <div className="container">
        <div className="page-header glass-panel">
          <span className="eyebrow">{copy.skills.eyebrow}</span>
          <h1 className="page-title">{copy.skills.title}</h1>
          <p className="page-lead">{copy.skills.lead}</p>
        </div>

        <div className="skills-showcase">
          <article className="skills-command-panel glass-panel">
            <div className="skills-command-copy">
              <span className="skills-panel-label">{copy.skills.highlightLabel}</span>
              <h2>{copy.skills.highlightTitle}</h2>
              <p>{copy.skills.highlightBody}</p>

              <div className="skills-signal-list">
                {copy.skills.spotlights.map((spotlight, index) => (
                  <div
                    className={`skills-signal-item tone-${(index % 3) + 1}`}
                    key={spotlight.label}
                  >
                    <strong>{spotlight.value}</strong>
                    <div>
                      <span>{spotlight.label}</span>
                      <p>{spotlight.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-visual-board" aria-hidden="true">
              {copy.skills.items.map((item, index) => (
                <div
                  className={`skills-visual-track tone-${(index % 5) + 1}`}
                  key={`${item.title}-visual`}
                  style={getSkillStyle(item.level)}
                  title={item.title}
                >
                  <span className="skills-visual-code">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="skills-visual-bar">
                    <span />
                  </span>
                  <span className="skills-visual-tooltip">{item.title}</span>
                </div>
              ))}
            </div>
          </article>

          <aside className="skills-tool-panel glass-panel">
            <span className="skills-panel-label">{copy.skills.toolLabel}</span>
            <h2>{copy.skills.toolTitle}</h2>

            <div className="skills-tool-clusters">
              {copy.skills.toolGroups.map((group) => (
                <section className="skills-tool-cluster" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skills-chip-list">
                    {group.items.map((tool) => (
                      <span className="skills-chip" key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </aside>
        </div>

        <section className="skills-workflow glass-panel" aria-label={copy.skills.workflowLabel}>
          <span className="skills-workflow-label">{copy.skills.workflowLabel}</span>
          <div className="skills-workflow-steps">
            {copy.skills.workflow.map((step, index) => (
              <article className="skills-workflow-step" key={step.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{step.label}</h2>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="skills-card-grid">
          {copy.skills.items.map((item, index) => (
            <article
              className={`content-card skill-card-page tone-${(index % 5) + 1}`}
              key={item.title}
              style={getSkillStyle(item.level)}
            >
              <div className="skill-card-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.level}/{maxSkillLevel}</strong>
              </div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="skills-chip-list skill-card-tags">
                {item.tags.map((tag) => (
                  <span className="skills-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="skill-meter" aria-label={`${item.title}: ${item.level}/${maxSkillLevel}`}>
                <span />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
