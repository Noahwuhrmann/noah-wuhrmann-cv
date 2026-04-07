import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const languages = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
] as const

export function SiteLayout() {
  const location = useLocation()
  const { copy, language, setLanguage } = useLanguage()
  const isHome = location.pathname === "/"
  const [menuOpen, setMenuOpen] = useState(false)
  const [homeScrolled, setHomeScrolled] = useState(false)

  const title = copy.routeTitles[location.pathname] || copy.brand.title

  useEffect(() => {
    document.title = `${title} | Noah Wuhrmann`
  }, [title])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isHome) {
      setHomeScrolled(false)
      return
    }

    const update = () => {
      setHomeScrolled(window.scrollY > 32)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })

    return () => {
      window.removeEventListener("scroll", update)
    }
  }, [isHome])

  return (
    <div className="app-shell">
      <div className={cn("page-shell", isHome && "page-shell-home")}>
        <header
          className={cn(
            "site-header",
            isHome && "site-header-home",
            isHome && homeScrolled && "site-header-home-scrolled",
          )}
        >
          <div className="container">
            <div
              className={cn(
                "nav-shell",
                isHome && "nav-shell-home",
                isHome && homeScrolled && "nav-shell-home-scrolled",
              )}
            >
              <nav className="nav-links nav-links-desktop" aria-label="Primary navigation">
                {copy.nav.map((item) => (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) => cn("nav-link", isActive && "active")}
                    end={item.end}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="nav-actions">
                <div className="language-switcher" aria-label={copy.languageLabel}>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      className={cn(
                        "language-button",
                        language === item.code && "active",
                      )}
                      onClick={() => setLanguage(item.code)}
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  aria-controls="mobile-navigation"
                  aria-expanded={menuOpen}
                  aria-label="Toggle navigation"
                  className={cn("menu-toggle", menuOpen && "active")}
                  onClick={() => setMenuOpen((open) => !open)}
                  type="button"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="menu-toggle-line line-1" aria-hidden="true" />
                  <span className="menu-toggle-line line-2" aria-hidden="true" />
                  <span className="menu-toggle-line line-3" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className={cn("mobile-nav", menuOpen && "open")}
              hidden={!menuOpen}
              id="mobile-navigation"
            >
              <nav className="mobile-nav-links" aria-label="Mobile navigation">
                {copy.nav.map((item) => (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      cn("mobile-nav-link", isActive && "active")
                    }
                    end={item.end}
                    onClick={() => setMenuOpen(false)}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className={cn("page-main", isHome && "page-main-home")}>
          <Outlet />
        </main>

        {isHome ? null : (
          <footer className="site-footer">
            <div className="container footer-row">
              <span>© {new Date().getFullYear()} Noah Wuhrmann</span>
            </div>
          </footer>
        )}
      </div>
    </div>
  )
}
