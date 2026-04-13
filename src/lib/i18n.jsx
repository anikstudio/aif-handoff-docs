import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'aif-docs-lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'ru'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  return 'ru'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    } catch (_) {
      // ignore
    }
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'))
  }, [])

  const t = useCallback(
    (ru, en) => (lang === 'ru' ? ru : en),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within <LanguageProvider>')
  }
  return ctx
}
