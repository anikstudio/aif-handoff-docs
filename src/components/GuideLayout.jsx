import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useLanguage } from '../lib/i18n'

export default function GuideLayout({ children }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#10b981] hover:text-[#0ea371] mb-6 transition"
        >
          <span aria-hidden>←</span>
          {t('На главную', 'Back to Home')}
        </Link>
        <div className="prose prose-invert max-w-none">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
