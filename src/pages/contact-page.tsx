import { useLanguage } from "@/lib/language-context"

export function ContactPage() {
  const { copy } = useLanguage()

  return (
    <section className="page-view">
      <div className="container">
        <div className="page-header glass-panel">
          <span className="eyebrow">{copy.contact.eyebrow}</span>
          <h1 className="page-title">{copy.contact.title}</h1>
          <p className="page-lead">{copy.contact.lead}</p>
        </div>

        <div className="contact-layout">
          <div className="contact-column">
            {copy.contact.methods.map((method) =>
              method.href ? (
                <a className="contact-link card-link" href={method.href} key={method.label} target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span className="contact-badge">{method.badge}</span>
                  <span className="contact-text">
                    <strong>{method.label}</strong>
                    <span>{method.value}</span>
                  </span>
                </a>
              ) : (
                <div className="contact-link" key={method.label}>
                  <span className="contact-badge">{method.badge}</span>
                  <span className="contact-text">
                    <strong>{method.label}</strong>
                    <span>{method.value}</span>
                  </span>
                </div>
              ),
            )}
          </div>

          <aside className="contact-aside">
            {copy.contact.availability.map((item) => (
              <div className="availability" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
