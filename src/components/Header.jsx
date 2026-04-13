import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../lib/i18n'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const links = [
    { path: '/', label: t('Главная', 'Home') },
    { path: '/devcontainer', label: 'DevContainer' },
    { path: '/docker', label: 'Docker' },
    { path: '/linux-macos', label: t('Linux и macOS', 'Linux & macOS') },
    { path: '/windows', label: 'Windows' },
  ]

  const isActive = (path) => location.pathname === path

  const LangSwitch = () => (
    <div
      className="inline-flex items-center rounded border border-[#2a2a2a] bg-[#101010] p-0.5 font-mono text-[10px] uppercase tracking-[0.14em]"
      role="group"
      aria-label={t('Переключатель языка', 'Language switch')}
    >
      <button
        type="button"
        onClick={() => setLang('ru')}
        className={`px-2 py-1 rounded-sm transition ${
          lang === 'ru'
            ? 'bg-[#10b981] text-[#0a0a0a]'
            : 'text-[#6b7280] hover:text-[#fafafa]'
        }`}
        aria-pressed={lang === 'ru'}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-sm transition ${
          lang === 'en'
            ? 'bg-[#10b981] text-[#0a0a0a]'
            : 'text-[#6b7280] hover:text-[#fafafa]'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-[#2a2a2a] bg-[#0a0a0a]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[#10b981] text-[#0a0a0a] font-bold text-xs">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#fafafa] group-hover:text-white">
              AIF Handoff
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.14em] text-[#6b7280] border border-[#2a2a2a] rounded px-1.5 py-0.5 font-mono">
              {t('документация', 'docs')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded text-xs font-medium tracking-tight transition ${
                  isActive(link.path)
                    ? 'bg-[#141414] text-[#fafafa] border border-[#2a2a2a]'
                    : 'text-[#6b7280] hover:text-[#fafafa] hover:bg-[#141414] border border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang switch + mobile menu btn */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LangSwitch />
            </div>
            <div className="md:hidden flex items-center gap-2">
              <LangSwitch />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded border border-[#2a2a2a] text-[#6b7280] hover:text-[#fafafa] hover:bg-[#141414] transition"
                aria-label={t('Переключить меню', 'Toggle navigation')}
              >
                <svg
                  className="h-4 w-4"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded text-sm font-medium transition ${
                  isActive(link.path)
                    ? 'bg-[#141414] text-[#fafafa] border border-[#2a2a2a]'
                    : 'text-[#6b7280] hover:bg-[#141414] hover:text-[#fafafa] border border-transparent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
