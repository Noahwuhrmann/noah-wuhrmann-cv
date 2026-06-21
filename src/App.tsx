import { useLayoutEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"

import { SiteLayout } from "@/components/layout/site-layout"
import { LanguageProvider } from "@/lib/language-context"
import { AboutPage } from "@/pages/about-page"
import { ContactPage } from "@/pages/contact-page"
import { DatenschutzPage } from "@/pages/datenschutz-page"
import { HomePage } from "@/pages/home-page"
import { ImpressumPage } from "@/pages/impressum-page"
import { ProjectsPage } from "@/pages/projects-page"
import { ResumePage } from "@/pages/resume-page"
import { SkillsPage } from "@/pages/skills-page"

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = "auto"
    window.scrollTo({ left: 0, top: 0, behavior: "auto" })

    const restoreFrame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.cancelAnimationFrame(restoreFrame)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [location.key])

  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
