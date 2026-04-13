import Header from '../components/Header'
import Footer from '../components/Footer'
import NavCard from '../components/NavCard'
import { useLanguage } from '../lib/i18n'

export default function Home() {
  const { t } = useLanguage()

  const guides = [
    {
      icon: '🐳',
      title: 'Docker',
      description: t(
        'Разверните AIF Handoff в Docker-контейнерах — одинаковое окружение на любой машине без ручной настройки.',
        'Set up AIF Handoff using Docker containers for a consistent environment across any machine without manual configuration.'
      ),
      path: '/docker',
      tag: t('контейнер', 'container'),
    },
    {
      icon: '📦',
      title: 'DevContainer',
      description: t(
        'Готовый VS Code Dev Container: полностью сконфигурированная среда разработки в изоляции от хоста.',
        'Use VS Code Dev Containers for a fully configured development environment isolated from your host.'
      ),
      path: '/devcontainer',
      tag: 'vscode',
    },
    {
      icon: '🐧',
      title: 'Linux & macOS',
      description: t(
        'Установка и настройка AIF Handoff на Unix-системах — пошагово, от зависимостей до первой задачи.',
        'Install and configure AIF Handoff on Unix-like systems — step by step, from dependencies to your first task.'
      ),
      path: '/linux-macos',
      tag: 'unix',
    },
    {
      icon: '🪟',
      title: 'Windows',
      description: t(
        'Полный гайд по установке на Windows с PowerShell — без Docker и WSL2.',
        'Complete Windows installation guide using PowerShell — no Docker or WSL2 required.'
      ),
      path: '/windows',
      tag: 'windows',
    },
  ]

  const features = [
    {
      label: t('Быстрый старт', 'Fast setup'),
      value: t('меньше 5 минут', 'under 5 min'),
      hint: t('Готовые конфиги', 'Pre-baked configs'),
    },
    {
      label: t('Платформы', 'Platforms'),
      value: t('4 гайда', '4 guides'),
      hint: t('Linux, macOS, Windows, Docker', 'Linux, macOS, Windows, Docker'),
    },
    {
      label: t('Лицензия', 'License'),
      value: t('Open source', 'Open source'),
      hint: t('MIT — свободное использование', 'MIT — free to use'),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12">
          {/* subtle grid bg */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(90deg, #fafafa 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage:
                'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
            }}
          />

          <div className="relative flex flex-col items-start gap-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#6b7280] font-mono border border-[#2a2a2a] rounded px-2 py-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              {t('документация', 'documentation')}
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#fafafa] leading-[1.05]">
              {t('Запустите dev-окружение ', 'Ship your dev env ')}
              <span className="text-[#10b981]">
                {t('за минуты', 'in minutes')}
              </span>
              ,
              <br />
              {t('а не за вечер.', 'not afternoons.')}
            </h1>

            <p className="text-base md:text-lg text-[#6b7280] leading-relaxed max-w-2xl">
              {t(
                'Полные инструкции по установке и настройке AIF Handoff для Docker, DevContainer, Linux, macOS и Windows. Выберите платформу и следуйте проверенному пошаговому сценарию.',
                'Complete setup guides for configuring AIF Handoff across Docker, DevContainers, Linux, macOS, and Windows. Pick your platform and follow a tested, step-by-step playbook.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#guides"
                className="inline-flex items-center gap-2 rounded-md bg-[#10b981] px-4 py-2 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0ea371] transition"
              >
                {t('Смотреть гайды', 'Browse guides')}
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://github.com/lee-to/aif-handoff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#2a2a2a] bg-[#101010] px-4 py-2 text-sm font-medium text-[#fafafa] hover:border-[#3a3a3a] hover:bg-[#141414] transition"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                {t('Открыть на GitHub', 'View on GitHub')}
              </a>
            </div>
          </div>
        </section>

        {/* Metrics strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-md border border-[#2a2a2a] bg-[#101010] overflow-hidden">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`p-5 flex flex-col gap-1 ${
                  i > 0 ? 'sm:border-l border-t sm:border-t-0 border-[#2a2a2a]' : ''
                }`}
              >
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#6b7280] font-mono">
                  {f.label}
                </span>
                <span className="text-xl font-semibold tracking-tight text-[#fafafa]">
                  {f.value}
                </span>
                <span className="text-xs text-[#6b7280]">{f.hint}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Guides grid */}
        <section
          id="guides"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#6b7280] font-mono">
                {t('/// гайды', '/// guides')}
              </span>
              <span className="h-px flex-1 bg-[#2a2a2a]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#fafafa]">
              {t('Выберите свою платформу', 'Choose your platform')}
            </h2>
            <p className="text-sm text-[#6b7280] max-w-2xl">
              {t(
                'Четыре пути к одной цели. Возьмите тот, который ближе вашему процессу.',
                'Four paths to the same destination. Pick the one that matches your workflow.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <NavCard
                key={guide.path}
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
                path={guide.path}
                tag={guide.tag}
                cta={t('Открыть гайд', 'Open guide')}
              />
            ))}
          </div>
        </section>

        {/* Info section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-md border border-[#2a2a2a] bg-[#101010] p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#6b7280] font-mono">
                {t('/// о проекте', '/// about')}
              </span>
              <span className="h-px flex-1 bg-[#2a2a2a]" />
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-[#fafafa] mb-4">
              {t('Что такое AIF Handoff?', 'What is AIF Handoff?')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed text-[#6b7280]">
              <p>
                {t(
                  'AIF Handoff — это инструмент автоматической настройки dev-окружения, который помогает быстро поднять рабочее место со всеми зависимостями и тулингом. Гайды покрывают разные операционные системы и подходы к контейнеризации.',
                  'AIF Handoff is a comprehensive setup tool that helps developers quickly configure their development environment with all necessary dependencies and tools. These guides cover different operating systems and containerization approaches.'
                )}
              </p>
              <p>
                {t(
                  'Предпочитаете классическую установку, Docker-контейнеры или VS Code Dev Containers — в гайдах выше есть всё, чтобы начать.',
                  "Whether you prefer traditional installation, Docker containers, or VS Code Dev Containers, you'll find everything you need to get started in the guides above."
                )}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
