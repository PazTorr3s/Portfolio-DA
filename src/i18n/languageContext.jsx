import { createContext, useContext, useMemo, useState } from "react"
import { translations } from "./translations"

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es")

  const value = useMemo(() => {
    const t = (path) => {
      const keys = path.split(".")
      let cur = translations[lang]
      for (const k of keys) cur = cur?.[k]
      return cur ?? path
    }
    return { lang, setLang, t }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>")
  return ctx
}
