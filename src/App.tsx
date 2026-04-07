import { useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"

import { SiteLayout } from "@/components/layout/site-layout"
import { LanguageProvider } from "@/lib/language-context"
import { AboutPage } from "@/pages/about-page"
import { ContactPage } from "@/pages/contact-page"
import { HomePage } from "@/pages/home-page"
import { ProjectsPage } from "@/pages/projects-page"
import { ResumePage } from "@/pages/resume-page"
import { SkillsPage } from "@/pages/skills-page"

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
