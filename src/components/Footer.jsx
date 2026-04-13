import { useLanguage } from '../lib/i18n'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#6b7280]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#10b981] text-[#0a0a0a] font-bold text-[10px]">
              A
            </span>
            <span>
              &copy; 2026 AIF Handoff {t('Документация', 'Docs')}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/lee-to/aif-handoff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#6b7280] hover:text-[#fafafa] transition"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              <span>GitHub</span>
            </a>
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#6b7280] font-mono border border-[#2a2a2a] rounded px-1.5 py-0.5">
              v0.0.1
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
