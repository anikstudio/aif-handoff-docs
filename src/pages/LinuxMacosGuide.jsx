import GuideLayout from '../components/GuideLayout'
import { useLanguage } from '../lib/i18n'

export default function LinuxMacosGuide() {
  const { t } = useLanguage()
  return (
    <GuideLayout>
      {/* Hero Section */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/25 rounded">
          // linux · macos · native · node.js
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">
          AIF Handoff<br />
          <span className="text-green-400">Linux & macOS</span> {t('Руководство', 'Guide')}
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mb-6 leading-relaxed">
          {t(
            'Установка AIF Handoff прямо на вашу машину (Linux или macOS). Node.js 22, Claude CLI и все сервисы работают нативно без контейнеров. Быстрее чем Docker, но требует ручной настройки окружения.',
            'Install AIF Handoff directly on your machine (Linux or macOS). Node.js 22, the Claude CLI, and all services run natively without containers. Faster than Docker, but requires manual environment setup.'
          )}
        </p>
        <div className="flex gap-6 flex-wrap text-sm text-gray-400">
          <div className="flex items-center gap-2">🐧 <strong className="text-gray-300">Linux (Ubuntu/Debian/Fedora)</strong></div>
          <div className="flex items-center gap-2">🍎 <strong className="text-gray-300">macOS (Intel/Apple Silicon)</strong></div>
          <div className="flex items-center gap-2">📦 <strong className="text-gray-300">Node.js 22+</strong></div>
          <div className="flex items-center gap-2">🔑 <strong className="text-gray-300">{t('Claude аккаунт', 'Claude account')}</strong></div>
        </div>
      </div>

      {/* Section 01 - Requirements */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">01</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Требования', 'Requirements')}</h2>
            <p className="text-sm text-gray-400">{t('Что должно быть установлено перед началом', 'What needs to be installed before you start')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-3">🐧</div>
            <div className="font-semibold text-white text-sm mb-2">Linux</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>Ubuntu 20.04+ / Debian 11+ / Fedora 35+</li>
              <li>Node.js 22.x</li>
              <li>npm 10.x+</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-3">🍎</div>
            <div className="font-semibold text-white text-sm mb-2">macOS</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>macOS 11.0+ (Intel / Apple Silicon)</li>
              <li>{t('Node.js 22.x (via Homebrew или nvm)', 'Node.js 22.x (via Homebrew or nvm)')}</li>
              <li>npm 10.x+</li>
              <li>Git</li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300">
          <strong>{t('Преимущество нативной установки:', 'Why go native:')}</strong> <span className="text-gray-300"> {t('Без Docker — больше скорости, проще отладка, прямой доступ к системе. Идеально для локальной разработки.', 'No Docker — more speed, easier debugging, direct access to the system. Ideal for local development.')}</span>
        </div>
      </section>

      {/* Section 02 - Install Node.js */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">02</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Установка Node.js', 'Install Node.js')}</h2>
            <p className="text-sm text-gray-400">{t('Убедитесь что установлена версия 22.x', 'Make sure version 22.x is installed')}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">Linux (Ubuntu/Debian)</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# NodeSource репозиторий для Node.js 22', '# NodeSource repository for Node.js 22')}</p>
              <p><span className="text-green-400">$</span> curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -</p>
              <p><span className="text-green-400">$</span> sudo apt-get install -y nodejs</p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Проверка версии', '# Verify the version')}</p>
              <p><span className="text-green-400">$</span> node --version  <span className="text-gray-600">{t('# должно быть v22.x.x', '# should be v22.x.x')}</span></p>
              <p><span className="text-green-400">$</span> npm --version   <span className="text-gray-600">{t('# должно быть 10.x.x+', '# should be 10.x.x+')}</span></p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">macOS (Homebrew)</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# Установить Node.js через Homebrew', '# Install Node.js via Homebrew')}</p>
              <p><span className="text-green-400">$</span> brew install node@22</p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Или использовать nvm (рекомендуется)', '# Or use nvm (recommended)')}</p>
              <p><span className="text-green-400">$</span> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash</p>
              <p><span className="text-green-400">$</span> nvm install 22</p>
              <p><span className="text-green-400">$</span> nvm use 22</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Проверка установки', 'Verify the install')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> node --version</p>
              <p>v22.18.0</p>
              <p className="h-2" />
              <p><span className="text-green-400">$</span> npm --version</p>
              <p>10.8.1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Install Claude CLI */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">03</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Установка Claude CLI', 'Install the Claude CLI')}</h2>
            <p className="text-sm text-gray-400">{t('Инструмент для авторизации и управления Claude', 'The tool for authenticating and managing Claude')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> npm install -g @anthropic-ai/sdk-cli</p>
              <p><span className="text-green-400">$</span> claude --version</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Если ошибка — нет прав', 'If you hit a permissions error')}</h3>

        <p className="text-sm text-gray-400 mb-3">
          {t('Ошибка ', 'The ')}
          <code className="bg-gray-900 px-1.5 py-0.5 rounded text-xs">EACCES</code>
          {t(' означает что npm пытается писать в защищённую директорию. Решение:', ' error means npm is trying to write to a protected directory. Fix it like this:')}
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              {t(
`# Создать глобальную директорию npm в HOME
$ mkdir -p ~/.npm-global
$ npm config set prefix '~/.npm-global'

# Добавить в PATH (для bash)
$ echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
$ source ~/.bashrc

# Или для zsh (macOS)
$ echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc

# Теперь установить Claude CLI
$ npm install -g @anthropic-ai/sdk-cli`,
`# Create a global npm directory in HOME
$ mkdir -p ~/.npm-global
$ npm config set prefix '~/.npm-global'

# Add it to PATH (for bash)
$ echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
$ source ~/.bashrc

# Or for zsh (macOS)
$ echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc

# Now install the Claude CLI
$ npm install -g @anthropic-ai/sdk-cli`
              ).split('\n').map((line, i) => (
                line === '' ? <p key={i} className="h-2" /> :
                line.startsWith('#') ? <p key={i} className="text-gray-600">{line}</p> :
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Clone */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">04</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Клонирование репозитория', 'Clone the repository')}</h2>
            <p className="text-sm text-gray-400">{t('Получить исходный код', 'Grab the source code')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> git clone https://github.com/lee-to/aif-handoff.git</p>
              <p><span className="text-green-400">$</span> cd aif-handoff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 - Install */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">05</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Установка зависимостей', 'Install dependencies')}</h2>
            <p className="text-sm text-gray-400">{t('Установить пакеты для всех трёх сервисов', 'Install packages for all three services')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> npm install</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-3 text-sm">
            <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0 text-amber-400 text-xs font-bold">!</div>
            <div className="text-gray-400">
              {t('Предупреждения ', 'The ')}
              <code className="bg-gray-900 px-1.5 py-0.5 rounded text-xs">deprecated</code>
              {t(' — безопасны, игнорируйте', ' warnings are safe — ignore them')}
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <div className="w-5 h-5 rounded bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-bold">✓</div>
            <div className="text-gray-400">
              {t('После установки: ', 'After the install: ')}
              <code className="bg-gray-900 px-1.5 py-0.5 rounded text-xs">added N packages</code>
              {t(' — всё нормально', ' — you are good to go')}
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - Database */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">06</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Инициализация базы данных', 'Initialize the database')}</h2>
            <p className="text-sm text-gray-400">{t('Создать SQLite-файл и применить все миграции', 'Create the SQLite file and apply all migrations')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> npm run init</p>
              <p className="text-gray-600">{t('# Создаёт: ./data/aif.sqlite', '# Creates: ./data/aif.sqlite')}</p>
              <p className="text-gray-600">{t('# Применяет все миграции (11 штук)', '# Applies all migrations (11 total)')}</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">{t('Успешный вывод:', 'Successful output:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">log</span>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p>{`{"msg":"Migrations complete","newVersion":11}`}</p>
              <p>{`{"msg":"Index bootstrap complete","indexCount":16}`}</p>
              <p>{`{"msg":"Database connection closed"}`}</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">{t('Для обновления схемы в будущем:', 'To update the schema in the future:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> npm run db:push</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07 - Env */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">07</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Конфигурация .env', '.env configuration')}</h2>
            <p className="text-sm text-gray-400">{t('Настройка переменных окружения', 'Set up environment variables')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> cp .env.example .env</p>
            </div>
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
                { name: 'ANTHROPIC_API_KEY', default: '—', desc: t('Оставить пустым если используется claude login', 'Leave empty if you use claude login') },
                { name: 'PORT', default: '3009', desc: t('Порт API-сервера', 'API server port') },
                { name: 'WEB_PORT', default: '5180', desc: t('Порт Web UI', 'Web UI port') },
                { name: 'AGENT_BYPASS_PERMISSIONS', default: 'true', desc: t('Разрешить агенту выполнять команды без подтверждения', 'Let the agent run commands without confirmation') },
                { name: 'AGENT_USE_SUBAGENTS', default: 'true', desc: t('false для ускорения (однопроходный режим)', 'false to speed things up (single-pass mode)') },
                { name: 'POLL_INTERVAL_MS', default: '30000', desc: t('Интервал опроса задач координатором (мс)', 'Coordinator task poll interval (ms)') },
                { name: 'DATABASE_URL', default: './data/aif.sqlite', desc: t('Путь к SQLite-файлу', 'Path to the SQLite file') },
                { name: 'LOG_LEVEL', default: 'debug', desc: t('Уровень логов: fatal / error / warn / info / debug', 'Log level: fatal / error / warn / info / debug') }
              ].map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700 hover:bg-gray-900/50">
                  <td className="px-4 py-2 text-green-400 font-medium text-xs">{item.name}</td>
                  <td className="px-4 py-2 text-gray-400 text-xs"><code>{item.default}</code></td>
                  <td className="px-4 py-2 text-gray-400 text-xs">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Минимальный .env', 'Minimal .env')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# Авторизация (оставить пустым если claude login)', '# Auth (leave empty if using claude login)')}</p>
              <p className="text-gray-600"># ANTHROPIC_API_KEY=sk-ant-xxxxx</p>
              <p className="h-2" />
              <p><span className="text-purple-400">PORT</span>=<span className="text-green-400">3009</span></p>
              <p><span className="text-purple-400">WEB_PORT</span>=<span className="text-green-400">5180</span></p>
              <p><span className="text-purple-400">DATABASE_URL</span>=<span className="text-green-400">./data/aif.sqlite</span></p>
              <p className="h-2" />
              <p><span className="text-purple-400">AGENT_BYPASS_PERMISSIONS</span>=<span className="text-green-400">true</span></p>
              <p><span className="text-purple-400">POLL_INTERVAL_MS</span>=<span className="text-green-400">30000</span></p>
              <p><span className="text-purple-400">LOG_LEVEL</span>=<span className="text-green-400">debug</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08 - Authorization */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">08</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Авторизация Claude', 'Claude authentication')}</h2>
            <p className="text-sm text-gray-400">{t('Настроить доступ агента к Claude', 'Give the agent access to Claude')}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Option A — Claude подписка (OAuth)', 'Option A — Claude subscription (OAuth)')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> claude login</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          {t('Откройте URL из терминала в браузере и завершите OAuth. Credentials сохранятся в ', 'Open the URL from the terminal in a browser and complete the OAuth flow. Credentials will be saved to ')}
          <code className="bg-gray-900 px-1.5 py-0.5 rounded">~/.claude/.credentials.json</code>
          {t('.', '.')}
        </p>

        <h3 className="text-lg font-semibold text-white mb-4">Option B — API Key</h3>

        <p className="text-xs text-gray-400 mb-3">
          {t('Добавьте в ', 'Add to ')}
          <code className="bg-gray-900 px-1.5 py-0.5 rounded">.env</code>
          {t(':', ':')}
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">ANTHROPIC_API_KEY</span>=<span className="text-green-400">sk-ant-xxxxx</span></p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Проверить авторизацию', 'Verify authentication')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> ls ~/.claude/</p>
              <p className="text-gray-600">{t('# Должен быть файл .credentials.json', '# There should be a .credentials.json file')}</p>
              <p className="h-2" />
              <p><span className="text-green-400">$</span> test -f ~/.claude/.credentials.json && echo "OK" || echo "NOT FOUND"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 09 - Launch */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">09</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Запуск всех сервисов', 'Start all services')}</h2>
            <p className="text-sm text-gray-400">{t('Одна команда запускает API, Web UI и Agent параллельно', 'A single command starts the API, Web UI, and Agent in parallel')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> npm run dev</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-6 border border-gray-700 rounded-lg">
          <table className="w-full text-xs">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('Сервис', 'Service')}</th>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">URL</th>
                <th className="px-4 py-2 text-left uppercase text-gray-400 font-semibold">{t('Описание', 'Description')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-gray-900/50">
                <td className="px-4 py-2 text-green-400 font-medium">API</td>
                <td className="px-4 py-2 text-gray-300"><code className="text-xs">http://localhost:3009</code></td>
                <td className="px-4 py-2 text-gray-400">{t('Hono REST + WebSocket сервер', 'Hono REST + WebSocket server')}</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-900/50">
                <td className="px-4 py-2 text-green-400 font-medium">Web UI</td>
                <td className="px-4 py-2 text-gray-300"><code className="text-xs">http://localhost:5180</code></td>
                <td className="px-4 py-2 text-gray-400">{t('React Kanban-доска', 'React Kanban board')}</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-900/50">
                <td className="px-4 py-2 text-green-400 font-medium">Agent</td>
                <td className="px-4 py-2 text-gray-300"><em>background</em></td>
                <td className="px-4 py-2 text-gray-400">{t('Координатор субагентов, polling каждые 30 сек', 'Subagent coordinator, polls every 30 seconds')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Признаки успешного запуска', 'Signs of a successful start')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">log</span>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-xs">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-amber-400">@aif/web:dev:</span>   <span className="text-green-400">➜  Local:   http://localhost:5180/</span></p>
              <p><span className="text-amber-400">@aif/api:dev:</span>   <span className="text-green-400">{`{"msg":"API server started","port":3009}`}</span></p>
              <p><span className="text-amber-400">@aif/agent:dev:</span> <span className="text-green-400">{`{"msg":"Agent coordinator is running"}`}</span></p>
              <p><span className="text-amber-400">@aif/agent:dev:</span> <span className="text-green-400">{`{"msg":"Poll cycle complete"}`}</span>  <span className="text-gray-600">{t('← каждые 30 сек', '← every 30 seconds')}</span></p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Проверить готовность агента', 'Check agent readiness')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">$</span> curl -s http://localhost:3009/agent/readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 - Project */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">10</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Создание проекта в UI', 'Create a project in the UI')}</h2>
            <p className="text-sm text-gray-400">{t('Подключить ваш рабочий проект к aif-handoff', 'Connect your working project to aif-handoff')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            { num: 1, title: t('Открыть Kanban UI', 'Open the Kanban UI'), desc: t('Перейдите на http://localhost:5180', 'Go to http://localhost:5180'), hasLine: true },
            { num: 2, title: t('Создать проект', 'Create a project'), desc: t('Нажмите на селектор проектов (верхний левый угол) → Create Project', 'Click the project selector (top-left corner) → Create Project'), hasLine: true },
            { num: 3, title: t('Указать Root Path', 'Set the Root Path'), desc: t('В поле Root Path укажите абсолютный путь к вашему рабочему проекту:\n\nLinux: /home/user/my-project\nmacOS: /Users/username/my-project', 'In the Root Path field, enter the absolute path to your working project:\n\nLinux: /home/user/my-project\nmacOS: /Users/username/my-project'), hasLine: true },
            { num: 4, title: t('Добавить задачу в Backlog', 'Add a task to Backlog'), desc: t('Нажмите + Add task в колонке Backlog. Через ~30 сек агент подхватит задачу и начнёт обработку.', 'Click + Add task in the Backlog column. Within ~30 seconds the agent will pick up the task and start processing it.'), hasLine: false }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-sm font-semibold text-green-400">
                  {step.num}
                </div>
                {step.hasLine && <div className="w-0.5 h-12 bg-gray-700 mt-1"></div>}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-sm font-semibold text-white mb-2">{step.title}</div>
                <div className="text-sm text-gray-400 whitespace-pre-line">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300 mt-6">
          <strong>{t('Всё готово:', 'All set:')}</strong> <span className="text-gray-300"> {t('API на ', 'API on ')}<code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">:3009</code>{t(' · Web UI на ', ' · Web UI on ')}<code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">:5180</code>{t(' · Agent работает нативно. Добавляйте задачи и наблюдайте за автономным прохождением стадий.', ' · Agent running natively. Add tasks and watch them move through the stages autonomously.')}</span>
        </div>
      </section>

      {/* Section 11 - Troubleshooting */}
      <section className="py-12 border-t border-gray-700 mb-8">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">11</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Устранение проблем', 'Troubleshooting')}</h2>
            <p className="text-sm text-gray-400">{t('Типичные проблемы на Linux и macOS', 'Common issues on Linux and macOS')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            {
              title: t('claude: command not found после установки', 'claude: command not found after install'),
              desc: t(
                'Добавьте ~/.local/bin в PATH:\n\necho \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.bashrc\nsource ~/.bashrc\n\nДля zsh (macOS):\necho \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.zshrc\nsource ~/.zshrc',
                'Add ~/.local/bin to PATH:\n\necho \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.bashrc\nsource ~/.bashrc\n\nFor zsh (macOS):\necho \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.zshrc\nsource ~/.zshrc'
              )
            },
            {
              title: t('EACCES — нет прав при npm install -g', 'EACCES — permission denied on npm install -g'),
              desc: t(
                'Не используйте sudo с npm. Настройте глобальную директорию npm в домашней папке:\n\nmkdir -p ~/.npm-global\nnpm config set prefix \'~/.npm-global\'\necho \'export PATH="$HOME/.npm-global/bin:$PATH"\' >> ~/.bashrc\nsource ~/.bashrc',
                'Do not use sudo with npm. Configure a global npm directory inside your home folder:\n\nmkdir -p ~/.npm-global\nnpm config set prefix \'~/.npm-global\'\necho \'export PATH="$HOME/.npm-global/bin:$PATH"\' >> ~/.bashrc\nsource ~/.bashrc'
              )
            },
            {
              title: t('Агент зависает или часто таймаутится', 'The agent hangs or times out frequently'),
              desc: t(
                'Добавьте в .env:\n\nAGENT_USE_SUBAGENTS=false\n\nПерезапустите npm run dev.',
                'Add to .env:\n\nAGENT_USE_SUBAGENTS=false\n\nThen restart npm run dev.'
              )
            },
            {
              title: t('Порт уже занят (EADDRINUSE)', 'Port already in use (EADDRINUSE)'),
              desc: t(
                'Найдите и завершите процесс или измените порты в .env:\n\nlsof -i :3009\nlsof -i :5180',
                'Find and kill the process, or change the ports in .env:\n\nlsof -i :3009\nlsof -i :5180'
              )
            },
            {
              title: t('macOS — Gatekeeper блокирует claude', 'macOS — Gatekeeper is blocking claude'),
              desc: t(
                'Если macOS блокирует запуск claude:\n\nxattr -d com.apple.quarantine ~/.local/bin/claude',
                'If macOS blocks claude from running:\n\nxattr -d com.apple.quarantine ~/.local/bin/claude'
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
                <div className="text-sm text-gray-400 whitespace-pre-line font-mono text-xs">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </GuideLayout>
  )
}
