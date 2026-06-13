import type { CSSProperties } from "react"

import { Icon, type IconName } from "@/components/ui/icons"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage } from "@/lib/language-context"

const maxSkillLevel = 5

const toolIcons: IconName[] = ["chart", "bolt", "briefcase", "palette", "spark"]
const workflowIcons: IconName[] = ["search", "layers", "bolt", "rocket"]

function getSkillStyle(level: number): CSSProperties {
  const clampedLevel = Math.min(Math.max(level, 0), maxSkillLevel)

  return {
    "--skill-level": `${(clampedLevel / maxSkillLevel) * 100}%`,
  } as CSSProperties
}

export function SkillsPage() {
  const { copy } = useLanguage()

  return (
    <div className="skills-page-view">
      <section className="subpage-hero">
        <div className="container">
          <Reveal className="subpage-hero__inner">
            <span className="eyebrow">{copy.skills.eyebrow}</span>
            <h1 className="page-title">{copy.skills.title}</h1>
            <p className="page-lead">{copy.skills.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <Reveal className="skills-showcase">
            <article className="skills-command-panel glass-panel">
              <div className="skills-command-copy">
                <span className="skills-panel-label">{copy.skills.highlightLabel}</span>
                <h2>{copy.skills.highlightTitle}</h2>
                <p>{copy.skills.highlightBody}</p>
              </div>

              <div className="skills-visual-board">
                <div className="skills-visual-header">
                  <h3>{copy.skills.visualTitle}</h3>
                  <p>{copy.skills.visualHint}</p>
                </div>

                <div className="skills-visual-list">
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
              </div>
            </article>

            <aside className="skills-tool-panel glass-panel">
              <span className="skills-panel-label">{copy.skills.toolLabel}</span>
              <h2>{copy.skills.toolTitle}</h2>

              <div className="skills-tool-clusters">
                {copy.skills.toolGroups.map((group, index) => (
                  <section className="skills-tool-cluster" key={group.title}>
                    <div className="skills-tool-cluster-head">
                      <Icon name={toolIcons[index] ?? "bolt"} size="sm" />
                      <h3>{group.title}</h3>
                    </div>
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
          </Reveal>

          <Reveal
            className="skills-workflow glass-panel"
            delay={120}
            as="section"
            aria-label={copy.skills.workflowLabel}
          >
            <span className="skills-workflow-label">{copy.skills.workflowLabel}</span>
            <div className="skills-workflow-steps">
              {copy.skills.workflow.map((step, index) => (
                <article className="skills-workflow-step" key={step.label}>
                  <Icon name={workflowIcons[index] ?? "bolt"} size="sm" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{step.label}</h2>
                    <p>{step.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="container">
          <Reveal className="section-heading">
            <span className="section-kicker">{copy.skills.detailLabel}</span>
            <h2 className="section-title">{copy.skills.detailTitle}</h2>
          </Reveal>

          <div className="skills-card-grid">
            {copy.skills.items.map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                delay={(index % 3) * 80}
                style={getSkillStyle(item.level)}
                className={`content-card skill-card-page tone-${(index % 5) + 1}`}
              >
                <div className="skill-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>
                    {item.level}/{maxSkillLevel}
                  </strong>
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
                <div
                  className="skill-meter"
                  aria-label={`${item.title}: ${item.level}/${maxSkillLevel}`}
                >
                  <span />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
