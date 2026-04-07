import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { siteCopy, type Language } from "@/content/site-copy"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  copy: (typeof siteCopy)[Language]
}

const STORAGE_KEY = "nw-portfolio-language"

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "de"
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)

  if (stored === "de" || stored === "en") {
    return stored
  }

  return "de"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: siteCopy[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
