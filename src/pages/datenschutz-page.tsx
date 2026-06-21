import { Fragment, type ReactNode } from "react"

import { Reveal } from "@/components/ui/reveal"
import { useLanguage } from "@/lib/language-context"

const EMAIL = "noah@wuhrmann-solutions.ch"
const SITE = "www.wuhrmann-solutions.ch"

// Wandelt die bekannten Kontaktangaben in klickbare Links um, damit die
// Inhalte als reine Strings in site-copy.ts gepflegt werden können.
function linkify(text: string): ReactNode {
  const parts = text.split(/(noah@wuhrmann-solutions\.ch|www\.wuhrmann-solutions\.ch)/g)

  return parts.map((part, index) => {
    if (part === EMAIL) {
      return (
        <a className="legal-link" href={`mailto:${EMAIL}`} key={index}>
          {EMAIL}
        </a>
      )
    }

    if (part === SITE) {
      return (
        <a
          className="legal-link"
          href={`https://${SITE}`}
          key={index}
          rel="noreferrer"
          target="_blank"
        >
          {SITE}
        </a>
      )
    }

    return <Fragment key={index}>{part}</Fragment>
  })
}

export function DatenschutzPage() {
  const { copy } = useLanguage()
  const legal = copy.datenschutz

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
          <Reveal className="legal-doc" showOnMount>
            {legal.sections.map((section) => (
              <section className="legal-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((block, index) => {
                  if (typeof block === "string") {
                    return <p key={index}>{linkify(block)}</p>
                  }

                  if ("sub" in block) {
                    return <h3 key={index}>{block.sub}</h3>
                  }

                  if ("list" in block) {
                    return (
                      <ul key={index}>
                        {block.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  }

                  return (
                    <address className="legal-address" key={index}>
                      {block.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                  )
                })}
              </section>
            ))}
            <p className="legal-updated">{legal.updated}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
