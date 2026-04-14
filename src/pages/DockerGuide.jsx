import GuideLayout from '../components/GuideLayout'
import { useLanguage } from '../lib/i18n'

export default function DockerGuide() {
  const { t } = useLanguage()
  return (
    <GuideLayout>
      {/* Hero Section */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 rounded">
          // docker · containerized · production-ready
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">
          AIF Handoff<br />
          <span className="text-cyan-400">Docker</span> {t('Гайд', 'Guide')}
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mb-6 leading-relaxed">
          {t(
            'Полное руководство по запуску AIF Handoff в Docker — от быстрого старта в dev-режиме до production-деплоя с SSL, healthchecks и resource limits. Работает на Linux, macOS и Windows с Docker Desktop.',
            'A complete guide to running AIF Handoff in Docker — from a fast dev-mode quickstart to production deploys with SSL, health checks, and resource limits. Works on Linux, macOS, and Windows with Docker Desktop.'
          )}
        </p>
        <div className="flex gap-6 flex-wrap text-sm text-gray-400">
          <div className="flex items-center gap-2">🐳 <strong className="text-gray-300">Docker Desktop</strong></div>
          <div className="flex items-center gap-2">🔑 <strong className="text-gray-300">{t('Claude подписка или API Key', 'Claude subscription or API Key')}</strong></div>
          <div className="flex items-center gap-2">🌿 <strong className="text-gray-300">Git</strong></div>
        </div>
      </div>

      {/* Section 01 - Prerequisites */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">01</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Требования', 'Prerequisites')}</h2>
            <p className="text-sm text-gray-400">{t('Что нужно установить перед началом', 'What you need to install before you start')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-3">🐳</div>
            <div className="font-semibold text-white text-sm mb-2">Docker Desktop</div>
            <div className="text-xs text-gray-400">{t(
              'Docker Desktop для Windows/macOS или Docker Engine + Docker Compose для Linux. Версия с поддержкой compose v2.',
              'Docker Desktop for Windows/macOS, or Docker Engine + Docker Compose for Linux. A version that supports compose v2.'
            )}</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-3">🔑</div>
            <div className="font-semibold text-white text-sm mb-2">{t('Claude аккаунт', 'Claude account')}</div>
            <div className="text-xs text-gray-400">
              {t('Подписка Claude (авторизация через ', 'Claude subscription (sign in via ')}
              <code className="bg-gray-900 px-1.5 py-0.5 rounded text-xs">claude login</code>
              {t(' внутри контейнера) или Anthropic API Key.', ' inside the container) or an Anthropic API Key.')}
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-3">🌿</div>
            <div className="font-semibold text-white text-sm mb-2">Git</div>
            <div className="text-xs text-gray-400">{t('Для клонирования репозитория.', 'Used to clone the repository.')}</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-3">🌐</div>
            <div className="font-semibold text-white text-sm mb-2">{t('Домен (для production)', 'Domain (for production)')}</div>
            <div className="text-xs text-gray-400">{t(
              'Только для production-деплоя с SSL. Для локального dev не нужен.',
              'Only required for production deploys with SSL. Not needed for local dev.'
            )}</div>
          </div>
        </div>

        <div className="border-l-4 border-cyan-400 bg-cyan-500/10 p-4 rounded text-sm text-cyan-300">
          <strong>{t('Преимущество Docker:', 'Why Docker:')}</strong> <span className="text-gray-300"> {t(
            'Не нужно устанавливать Node.js или Claude CLI на хост-машину — всё изолировано внутри контейнеров. Данные сохраняются в Docker volumes и переживают перезапуски.',
            'No need to install Node.js or Claude CLI on the host — everything is isolated inside containers. Data is persisted in Docker volumes and survives restarts.'
          )}</span>
        </div>
      </section>

      {/* Section 02 - Clone */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">02</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Клонирование репозитория', 'Clone the repository')}</h2>
            <p className="text-sm text-gray-400">{t('Получить исходный код aif-handoff', 'Get the aif-handoff source code')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-cyan-400">$</span> git clone https://github.com/lee-to/aif-handoff.git</p>
              <p><span className="text-cyan-400">$</span> cd aif-handoff</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">{t('Структура репозитория после клонирования:', 'Repository layout after cloning:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">tree</span>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-green-400">aif-handoff/</p>
              <p>├── <span className="text-blue-400">packages/</span></p>
              <p>│   ├── <span className="text-purple-400">api/</span>        <span className="text-gray-600"># Hono REST + WebSocket  → :3009</span></p>
              <p>│   ├── <span className="text-purple-400">web/</span>        <span className="text-gray-600"># React Kanban UI        → :5180</span></p>
              <p>│   └── <span className="text-purple-400">agent/</span>      <span className="text-gray-600">{t('# Координатор субагентов', '# Subagent coordinator')}</span></p>
              <p>├── <span className="text-amber-400">docker-compose.yml</span>             <span className="text-gray-600">{t('# dev режим', '# dev mode')}</span></p>
              <p>├── <span className="text-amber-400">docker-compose.production.yml</span>  <span className="text-gray-600"># production</span></p>
              <p>├── <span className="text-amber-400">.env.example</span></p>
              <p>└── <span className="text-amber-400">package.json</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Quickstart */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">03</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Быстрый старт (Dev режим)', 'Quickstart (Dev mode)')}</h2>
            <p className="text-sm text-gray-400">{t('Одна команда собирает и запускает все три сервиса', 'A single command builds and runs all three services')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-cyan-400">$</span> docker compose up --build</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">{t('Эта команда собирает образы и запускает три сервиса:', 'This command builds the images and launches three services:')}</p>

        <div className="overflow-x-auto mb-4 border border-gray-700 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs uppercase text-gray-400 font-semibold">{t('Сервис', 'Service')}</th>
                <th className="px-4 py-2 text-left text-xs uppercase text-gray-400 font-semibold">URL</th>
                <th className="px-4 py-2 text-left text-xs uppercase text-gray-400 font-semibold">{t('Описание', 'Description')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-gray-900/50">
                <td className="px-4 py-2 text-cyan-400 font-medium">API</td>
                <td className="px-4 py-2 text-gray-300"><code className="bg-gray-900 px-1.5 py-0.5 rounded text-xs">http://localhost:3009</code></td>
                <td className="px-4 py-2 text-gray-400">{t('Hono REST + WebSocket сервер', 'Hono REST + WebSocket server')}</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-900/50">
                <td className="px-4 py-2 text-cyan-400 font-medium">Web UI</td>
                <td className="px-4 py-2 text-gray-300"><code className="bg-gray-900 px-1.5 py-0.5 rounded text-xs">http://localhost:5180</code></td>
                <td className="px-4 py-2 text-gray-400">{t('React Kanban-доска (Angie reverse proxy)', 'React Kanban board (Angie reverse proxy)')}</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-900/50">
                <td className="px-4 py-2 text-cyan-400 font-medium">Agent</td>
                <td className="px-4 py-2 text-gray-300"><em>background</em></td>
                <td className="px-4 py-2 text-gray-400">{t('Координатор субагентов, polling каждые 30 сек', 'Subagent coordinator, polling every 30 seconds')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-l-4 border-cyan-400 bg-cyan-500/10 p-4 rounded text-sm text-cyan-300 mb-6">
          <strong>Reverse proxy:</strong> <span className="text-gray-300"> {t('Web UI на ', 'The Web UI on ')}<code className="bg-cyan-500/20 px-1.5 py-0.5 rounded text-xs">localhost:5180</code>{t(' автоматически проксирует все API и WebSocket запросы через Angie — дополнительная настройка не нужна.', ' automatically proxies all API and WebSocket requests through Angie — no extra configuration required.')}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Запуск в фоновом режиме', 'Run in the background')}</h3>
        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-cyan-400">$</span> docker compose up --build -d   <span className="text-gray-600">{t('# -d = detached (фон)', '# -d = detached (background)')}</span></p>
              <p><span className="text-cyan-400">$</span> docker compose logs -f          <span className="text-gray-600">{t('# просмотр логов', '# view logs')}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Authorization */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">04</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Авторизация Claude', 'Claude authentication')}</h2>
            <p className="text-sm text-gray-400">{t('Два способа — API Key или подписка Claude через OAuth', 'Two options — API Key or Claude subscription via OAuth')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="border-t-2 border-amber-500 bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-xs text-amber-400 uppercase tracking-wide font-semibold mb-2">Option A</div>
            <div className="font-semibold text-white text-sm mb-2">🔑 API Key</div>
            <div className="text-xs text-gray-400">
              {t('Создайте файл ', 'Create a ')}
              <code className="bg-gray-900 px-1.5 py-0.5 rounded">.env</code>
              {t(' с API ключом до запуска контейнеров. Подходит для CI/CD и серверного деплоя.', ' file with the API key before starting containers. Works well for CI/CD and server deployments.')}
            </div>
          </div>
          <div className="border-t-2 border-cyan-400 bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-xs text-cyan-400 uppercase tracking-wide font-semibold mb-2">Option B</div>
            <div className="font-semibold text-white text-sm mb-2">👤 {t('Claude подписка', 'Claude subscription')}</div>
            <div className="text-xs text-gray-400">{t(
              'Войдите через OAuth внутри контейнера после первого запуска. Credentials сохраняются в Docker volume.',
              'Sign in with OAuth from inside the container after the first run. Credentials are persisted in a Docker volume.'
            )}</div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Option A — API Key</h3>
        <p className="text-xs text-gray-400 mb-3">
          {t('Создайте ', 'Create ')}
          <code className="bg-gray-900 px-1.5 py-0.5 rounded">.env</code>
          {t(' из примера и задайте ключ ', ' from the example and set the key ')}
          <strong>{t('до', 'before')}</strong>
          {t(' запуска:', ' starting:')}
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-cyan-400">$</span> cp .env.example .env</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">ANTHROPIC_API_KEY</span>=<span className="text-green-400">sk-ant-xxxxx</span></p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Option B — Claude подписка (OAuth)', 'Option B — Claude subscription (OAuth)')}</h3>

        <div className="space-y-1">
          {[
            {
              num: 1,
              title: t('Запустить контейнеры', 'Start the containers'),
              code: 'docker compose up --build -d',
              hasLine: true
            },
            {
              num: 2,
              title: t('Войти в контейнер агента', 'Sign in from the agent container'),
              code: 'docker compose exec agent claude login',
              hasLine: true
            },
            {
              num: 3,
              title: t('Открыть URL в браузере', 'Open the URL in your browser'),
              desc: t(
                'Терминал выведет URL для авторизации. Скопируйте его полностью и откройте в браузере.',
                'The terminal will print an auth URL. Copy it in full and open it in your browser.'
              ),
              warning: t(
                'Терминал может переносить длинный URL на несколько строк — удалите все переносы строк и пробелы перед вставкой, иначе OAuth завершится ошибкой invalid code_challenge.',
                'The terminal may wrap the long URL across multiple lines — strip every line break and space before pasting, otherwise OAuth will fail with an invalid code_challenge error.'
              ),
              hasLine: true
            },
            {
              num: 4,
              title: t('Перезапустить контейнеры', 'Restart the containers'),
              code: 'docker compose restart',
              footer: t(
                'Credentials сохраняются в Docker volume claude-auth и переживают все перезапуски.',
                'Credentials are stored in the claude-auth Docker volume and survive every restart.'
              ),
              hasLine: false
            }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300">
                  {step.num}
                </div>
                {step.hasLine && <div className="w-0.5 h-12 bg-gray-700 mt-1"></div>}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-sm font-semibold text-white mb-2">{step.title}</div>
                {step.desc && <p className="text-sm text-gray-400 mb-2">{step.desc}</p>}
                {step.code && (
                  <div className="bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono text-xs text-cyan-400 overflow-x-auto mb-2">
                    $ {step.code}
                  </div>
                )}
                {step.warning && (
                  <div className="border-l-4 border-amber-500 bg-amber-500/10 p-3 rounded text-xs text-amber-300 mb-2">
                    <strong>{t('Важно:', 'Important:')}</strong> <span className="text-gray-300">{step.warning}</span>
                  </div>
                )}
                {step.footer && <p className="text-xs text-gray-400 mt-2">{step.footer}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 05 - Env Variables */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">05</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Переменные окружения (Dev)', 'Environment variables (Dev)')}</h2>
            <p className="text-sm text-gray-400">{t('Docker-специфичные переменные для dev-режима', 'Docker-specific variables for dev mode')}</p>
          </div>
        </div>

        <div className="overflow-x-auto mb-6 border border-gray-700 rounded-lg">
          <table className="w-full text-xs">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('Переменная', 'Variable')}</th>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('По умолчанию', 'Default')}</th>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('Описание', 'Description')}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'ANTHROPIC_API_KEY', default: '—', desc: t('API ключ. Если пусто — используется авторизация через claude login', 'API key. If empty, authentication falls back to claude login') },
                { name: 'PORT', default: '3009', desc: t('Порт API-сервера на хосте', 'API server port on the host') },
                { name: 'WEB_PORT', default: '5180', desc: t('Порт Web UI на хосте', 'Web UI port on the host') },
                { name: 'PROJECTS_DIR', default: './projects', desc: t('Директория на хосте для файлов проектов (bind mount)', 'Host directory for project files (bind mount)') },
                { name: 'PROJECTS_MOUNT', default: '/home/www', desc: t('Путь к файлам проектов внутри контейнеров', 'Path to project files inside the containers') },
                { name: 'AGENT_USE_SUBAGENTS', default: 'true', desc: t('true — субагенты (качество), false — AIF-скиллы (скорость)', 'true — subagents (quality), false — AIF skills (speed)') },
                { name: 'AGENT_BYPASS_PERMISSIONS', default: 'true', desc: t('Разрешить агенту выполнять команды без подтверждения', 'Allow the agent to run commands without confirmation') },
                { name: 'POLL_INTERVAL_MS', default: '30000', desc: t('Интервал опроса задач координатором (мс)', 'Coordinator task polling interval (ms)') },
                { name: 'LOG_LEVEL', default: 'debug', desc: t('Уровень логов: fatal / error / warn / info / debug / trace', 'Log level: fatal / error / warn / info / debug / trace') }
              ].map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700 hover:bg-gray-900/50">
                  <td className="px-4 py-2 text-cyan-400 font-medium">{item.name}</td>
                  <td className="px-4 py-2 text-gray-400"><code className="text-xs">{item.default}</code></td>
                  <td className="px-4 py-2 text-gray-400">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Пример минимального .env для Docker Dev', 'Minimal .env example for Docker Dev')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# Авторизация (один из вариантов)', '# Authentication (pick one)')}</p>
              <p className="text-gray-600"># ANTHROPIC_API_KEY=sk-ant-xxxxx</p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Порты', '# Ports')}</p>
              <p><span className="text-purple-400">PORT</span>=<span className="text-green-400">3009</span></p>
              <p><span className="text-purple-400">WEB_PORT</span>=<span className="text-green-400">5180</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Проекты — путь к вашему коду на хосте', '# Projects — path to your code on the host')}</p>
              <p><span className="text-purple-400">PROJECTS_DIR</span>=<span className="text-green-400">./projects</span></p>
              <p><span className="text-purple-400">PROJECTS_MOUNT</span>=<span className="text-green-400">/home/www</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Агент', '# Agent')}</p>
              <p><span className="text-purple-400">AGENT_BYPASS_PERMISSIONS</span>=<span className="text-green-400">true</span></p>
              <p><span className="text-purple-400">POLL_INTERVAL_MS</span>=<span className="text-green-400">30000</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - Verify */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">06</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Проверка работоспособности', 'Verify the setup')}</h2>
            <p className="text-sm text-gray-400">{t('Убедитесь что все сервисы запущены корректно', 'Confirm that all services started correctly')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            {
              num: 1,
              title: t('Открыть Kanban UI', 'Open the Kanban UI'),
              desc: t(
                'Перейдите на http://localhost:5180 — должна появиться Kanban-доска с колонками Backlog, Planning, Plan Ready, Implementing.',
                'Go to http://localhost:5180 — you should see the Kanban board with Backlog, Planning, Plan Ready, and Implementing columns.'
              ),
              hasLine: true
            },
            {
              num: 2,
              title: t('Проверить readiness агента', 'Check the agent readiness endpoint'),
              code: 'curl -s http://localhost:3009/agent/readiness',
              hasLine: true
            },
            {
              num: 3,
              title: t('Проверить статус контейнеров', 'Check container status'),
              code: 'docker compose ps',
              footer: t(
                'Все три сервиса (api, web, agent) должны иметь статус running.',
                'All three services (api, web, agent) should be in the running state.'
              ),
              hasLine: true
            },
            {
              num: 4,
              title: t('Создать проект и добавить задачу', 'Create a project and add a task'),
              desc: t(
                'В UI создайте проект, укажите путь к коду (внутри контейнера это /home/www/ваш-проект). Добавьте задачу в Backlog — через ~30 сек агент начнёт её обрабатывать.',
                'In the UI, create a project and point it at your code (inside the container this is /home/www/your-project). Add a task to Backlog — within ~30 seconds the agent will start working on it.'
              ),
              hasLine: false
            }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-sm font-semibold text-cyan-400">
                  {step.num}
                </div>
                {step.hasLine && <div className="w-0.5 h-12 bg-gray-700 mt-1"></div>}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-sm font-semibold text-white mb-2">{step.title}</div>
                {step.desc && <p className="text-sm text-gray-400 mb-2">{step.desc}</p>}
                {step.code && (
                  <div className="bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono text-xs text-cyan-400 overflow-x-auto mb-2">
                    $ {step.code}
                  </div>
                )}
                {step.footer && <p className="text-xs text-gray-400 mt-2">{step.footer}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300 mt-6">
          <strong>{t('Признак успешного запуска:', 'How to tell it is working:')}</strong> <span className="text-gray-300"> {t(
            'В логах агента видны строки "Agent coordinator is running" и "Poll cycle complete" каждые 30 секунд.',
            'The agent logs show "Agent coordinator is running" and "Poll cycle complete" every 30 seconds.'
          )}</span>
        </div>
      </section>

      {/* Section 07 - Production */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">07</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Production запуск', 'Production run')}</h2>
            <p className="text-sm text-gray-400">{t('Отдельный compose-файл с усиленной безопасностью и healthchecks', 'A dedicated compose file with hardened security and health checks')}</p>
          </div>
        </div>

        <div className="border-l-4 border-cyan-400 bg-cyan-500/10 p-4 rounded text-sm text-cyan-300 mb-6">
          <strong>{t('Production включает:', 'Production includes:')}</strong> <span className="text-gray-300"> {t(
            'только порты 80/443, security hardening, healthchecks, resource limits и log rotation. Авторизация работает так же как в dev.',
            'only ports 80/443, security hardening, health checks, resource limits, and log rotation. Authentication works the same as in dev.'
          )}</span>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-cyan-400">$</span> docker compose -f docker-compose.production.yml up --build</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">{t('В фоновом режиме:', 'In the background:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-cyan-400">$</span> docker compose -f docker-compose.production.yml up --build -d</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08 - Production Env */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">08</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Production переменные окружения', 'Production environment variables')}</h2>
            <p className="text-sm text-gray-400">{t('Дополнительные переменные специфичные для production', 'Additional variables specific to production')}</p>
          </div>
        </div>

        <div className="overflow-x-auto mb-6 border border-gray-700 rounded-lg">
          <table className="w-full text-xs">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('Переменная', 'Variable')}</th>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('По умолчанию', 'Default')}</th>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('Описание', 'Description')}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'DOMAIN', default: 'localhost', desc: t('Домен для SSL сертификата (Let\'s Encrypt через ACME)', 'Domain for the SSL certificate (Let\'s Encrypt via ACME)') },
                { name: 'HTTP_PORT', default: '80', desc: t('Порт HTTP для Web UI (production)', 'HTTP port for the Web UI (production)') },
                { name: 'HTTPS_PORT', default: '443', desc: t('Порт HTTPS (production)', 'HTTPS port (production)') },
                { name: 'ANTHROPIC_API_KEY', default: '—', desc: t('API ключ (или использовать claude login)', 'API key (or use claude login instead)') },
                { name: 'PROJECTS_DIR', default: './projects', desc: t('Путь к проектам на хосте', 'Path to projects on the host') },
                { name: 'PROJECTS_MOUNT', default: '/home/www', desc: t('Путь внутри контейнеров', 'Path inside the containers') }
              ].map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700 hover:bg-gray-900/50">
                  <td className="px-4 py-2 text-cyan-400 font-medium">{item.name}</td>
                  <td className="px-4 py-2 text-gray-400"><code className="text-xs">{item.default}</code></td>
                  <td className="px-4 py-2 text-gray-400">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Пример .env для production', 'Example .env for production')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-cyan-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# Авторизация', '# Authentication')}</p>
              <p><span className="text-purple-400">ANTHROPIC_API_KEY</span>=<span className="text-green-400">sk-ant-xxxxx</span>   <span className="text-gray-600">{t('# или оставить пустым + claude login', '# or leave empty and use claude login')}</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Домен и SSL', '# Domain and SSL')}</p>
              <p><span className="text-purple-400">DOMAIN</span>=<span className="text-green-400">handoff.example.com</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Production порты', '# Production ports')}</p>
              <p><span className="text-purple-400">HTTP_PORT</span>=<span className="text-green-400">80</span></p>
              <p><span className="text-purple-400">HTTPS_PORT</span>=<span className="text-green-400">443</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Проекты', '# Projects')}</p>
              <p><span className="text-purple-400">PROJECTS_DIR</span>=<span className="text-green-400">/var/projects</span></p>
              <p><span className="text-purple-400">PROJECTS_MOUNT</span>=<span className="text-green-400">/home/www</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Агент', '# Agent')}</p>
              <p><span className="text-purple-400">AGENT_BYPASS_PERMISSIONS</span>=<span className="text-green-400">true</span></p>
              <p><span className="text-purple-400">LOG_LEVEL</span>=<span className="text-green-400">info</span>   <span className="text-gray-600">{t('# в production лучше info вместо debug', '# prefer info over debug in production')}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 09 - Troubleshooting */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 h-fit">09</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Устранение проблем', 'Troubleshooting')}</h2>
            <p className="text-sm text-gray-400">{t('Типичные ошибки при работе с Docker', 'Common issues when working with Docker')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            {
              title: t('Контейнер не запускается — порт занят', 'Container fails to start — port already in use'),
              desc: t('Измените порты в .env:', 'Change the ports in .env:'),
              code: 'PORT=3010\nWEB_PORT=5181'
            },
            {
              title: t('Агент не видит credentials после claude login', 'Agent does not see credentials after claude login'),
              desc: t('Обязательно перезапустите контейнеры после авторизации:', 'Always restart the containers after signing in:'),
              code: 'docker compose restart'
            },
            {
              title: t('OAuth ошибка invalid code_challenge', 'OAuth invalid code_challenge error'),
              desc: t(
                'URL из терминала перенёсся на несколько строк. Скопируйте его целиком, удалите все переносы строк и пробелы, затем вставьте в браузер.',
                'The URL got wrapped across multiple lines in the terminal. Copy it as a whole, strip every line break and space, then paste it into the browser.'
              )
            },
            {
              title: t('Агент зависает или таймаутится', 'Agent hangs or times out'),
              desc: t('Отключите субагентов в .env:', 'Disable subagents in .env:'),
              code: 'AGENT_USE_SUBAGENTS=false',
              footer: t('Перезапустите: docker compose restart', 'Then restart: docker compose restart')
            },
            {
              title: t('Агент сообщает об отсутствии прав', 'Agent reports missing permissions'),
              desc: t('Проверьте что в .env установлено:', 'Make sure .env contains:'),
              code: 'AGENT_BYPASS_PERMISSIONS=true'
            },
            {
              title: t('Полный сброс и чистый старт', 'Full reset and clean start'),
              code: t(
                'docker compose down          # остановить (данные сохранятся)\ndocker compose down -v        # остановить + удалить volumes (данные потеряются)\ndocker compose build --no-cache # пересобрать образы\ndocker compose up --build     # запустить заново',
                'docker compose down          # stop (data is preserved)\ndocker compose down -v        # stop + remove volumes (data is lost)\ndocker compose build --no-cache # rebuild images\ndocker compose up --build     # start again'
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">
                  !
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                {item.desc && <p className="text-sm text-gray-400 mb-2">{item.desc}</p>}
                {item.code && (
                  <div className="bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono text-xs text-cyan-400 overflow-x-auto mb-2 whitespace-pre-wrap break-words">
                    {item.code}
                  </div>
                )}
                {item.footer && <p className="text-xs text-gray-400 mt-2">{item.footer}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300 mt-6">
          <strong>{t('Всё готово!', 'All set!')}</strong> <span className="text-gray-300"> {t(
            'Web UI на :5180 · API на :3009 · Agent в контейнере · Данные в Docker volumes. Добавляйте задачи в Backlog и наблюдайте как агент проводит их через все стадии автономно.',
            'Web UI on :5180 · API on :3009 · Agent in a container · Data in Docker volumes. Drop tasks into Backlog and watch the agent move them through every stage autonomously.'
          )}</span>
        </div>
      </section>
    </GuideLayout>
  )
}
