import GuideLayout from '../components/GuideLayout'
import { useLanguage } from '../lib/i18n'

export default function WindowsGuide() {
  const { t } = useLanguage()
  return (
    <GuideLayout>
      {/* Hero Section */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/25 rounded">
          // autonomous kanban · ai agents
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">
          AIF <span className="text-green-400">Handoff</span><br />
          {t('Руководство по установке', 'Setup Guide')}
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mb-6 leading-relaxed">
          {t(
            'Полное руководство по установке и настройке автономной Kanban-доски на базе AI-агентов — от проверки зависимостей до первой выполненной задачи. Составлено для Windows без Docker/WSL2.',
            'A complete guide to installing and configuring an autonomous Kanban board powered by AI agents — from dependency checks to your first completed task. Written for Windows without Docker or WSL2.'
          )}
        </p>
        <div className="flex gap-6 flex-wrap text-sm text-gray-400">
          <div className="flex items-center gap-2">⚙️ <strong className="text-gray-300">Node.js 22+</strong></div>
          <div className="flex items-center gap-2">🤖 <strong className="text-gray-300">Claude Code CLI</strong></div>
          <div className="flex items-center gap-2">📦 <strong className="text-gray-300">npm 10+</strong></div>
          <div className="flex items-center gap-2">🪟 <strong className="text-gray-300">Windows PowerShell</strong></div>
        </div>
      </div>

      {/* Pipeline Overview */}
      <div className="mb-8 p-6 bg-gray-800 border border-gray-700 rounded-lg">
        <div className="text-xs uppercase text-gray-500 tracking-wide mb-4 font-semibold">{t('Pipeline задач', 'Task pipeline')}</div>
        <div className="flex flex-wrap gap-3 items-center">
          {['Backlog', 'Planning', 'Plan Ready', 'Implementing', 'Review', 'Done'].map((stage, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className={`px-3 py-1.5 rounded text-xs font-semibold border ${stage === 'Done' ? 'bg-green-500/20 border-green-500/50 text-green-400' :
                stage === 'Backlog' ? 'bg-gray-500/20 border-gray-500/50 text-gray-400' :
                  'bg-amber-500/20 border-amber-500/50 text-amber-400'
                }`}>
                {stage}
              </div>
              {idx < 5 && <div className="text-gray-500">→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Section 01 - Requirements */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">01</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Системные требования', 'System requirements')}</h2>
            <p className="text-sm text-gray-400">{t('Что должно быть установлено перед началом', 'What you need installed before you start')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: '⬢', title: 'Node.js 22+', desc: t('Необходим для запуска всех сервисов. Рекомендуется установка через nvm-windows.', 'Required to run all services. We recommend installing via nvm-windows.') },
            { icon: '🤖', title: 'Claude Code CLI', desc: t('Agent SDK запускает Claude Code как дочерний процесс — CLI обязателен глобально.', 'The Agent SDK runs Claude Code as a child process — the CLI must be installed globally.') },
            { icon: '🔑', title: t('Claude аккаунт', 'Claude account'), desc: t('Подписка Claude или Anthropic API Key. Credentials хранятся в ~/.claude/', 'A Claude subscription or an Anthropic API key. Credentials are stored in ~/.claude/') },
            { icon: '🌿', title: 'Git', desc: t('Для клонирования репозитория. Агент также использует git для работы с кодом проекта.', 'Used to clone the repository. The agent also uses git to work with your project code.') }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
              <div className="text-xs text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 02 - Check Claude */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">02</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Проверка Claude CLI на Windows', 'Verifying the Claude CLI on Windows')}</h2>
            <p className="text-sm text-gray-400">{t('PowerShell-аналоги unix-команд — which и grep не работают в Windows', 'PowerShell equivalents for Unix commands — which and grep are not available on Windows')}</p>
          </div>
        </div>

        <div className="border-l-4 border-blue-400 bg-blue-500/10 p-4 rounded text-sm text-blue-300 mb-6">
          <strong>{t('Важно:', 'Important:')}</strong> <span className="text-gray-300"> {t('На Windows команды', 'On Windows, the')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">which</code> {t('и', 'and')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">grep</code> {t('не работают. Используйте PowerShell-аналоги ниже.', 'commands are not available. Use the PowerShell equivalents below.')}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Проверить установку и версию', 'Check the installation and version')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS&gt;</span> claude --version</p>
              <p className="text-gray-600">{t('# Ожидаемый вывод:', '# Expected output:')}</p>
              <p className="text-green-400">2.1.77 (Claude Code)</p>
              <p className="h-2" />
              <p><span className="text-green-400">PS&gt;</span> Get-Command claude</p>
              <p className="text-gray-600">{t('# Покажет путь к claude.ps1', '# Shows the path to claude.ps1')}</p>
              <p className="text-green-400">ExternalScript  claude.ps1  C:\Users\...\AppData\Local\nvm\nodejs\claude.ps1</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Проверить глобальный npm-пакет', 'Check the global npm package')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS&gt;</span> npm list -g --depth=0 | Select-String "claude-code"</p>
              <p className="text-gray-600">{t('# Ожидаемый вывод:', '# Expected output:')}</p>
              <p className="text-green-400">+-- @anthropic-ai/claude-code@2.1.77</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Проверить авторизацию', 'Check authentication')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS&gt;</span> ls $env:USERPROFILE\.claude\</p>
              <p className="text-gray-600">{t('# Должны быть файл .credentials.json и папки sessions/, cache/ и др.', '# You should see a .credentials.json file plus sessions/, cache/ and other folders')}</p>
              <p className="h-2" />
              <p><span className="text-green-400">PS&gt;</span> Test-Path "$env:USERPROFILE\.claude\.credentials.json"</p>
              <p><span className="text-green-400">True</span> <span className="text-gray-600">{t('# OK — авторизован', '# OK — authenticated')}</span></p>
              <p><span className="text-red-400">False</span> <span className="text-gray-600">{t('# Нужна авторизация: claude login', '# Needs authentication: claude login')}</span></p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded text-sm text-amber-300">
          <strong>{t('Если не авторизован:', 'If not authenticated:')}</strong> <span className="text-gray-300"> {t('Запустите', 'Run')} <code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-xs">claude login</code>, {t('скопируйте URL из терминала', 'copy the URL from the terminal')} <em>{t('целиком без переносов строк', 'in full without line breaks')}</em> {t('и вставьте в браузер. Переносы строк в URL ломают OAuth.', 'and paste it into your browser. Line breaks in the URL will break OAuth.')}</span>
        </div>
      </section>

      {/* Section 03 - Clone */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">03</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Клонирование репозитория', 'Cloning the repository')}</h2>
            <p className="text-sm text-gray-400">{t('aif-handoff должен располагаться', 'aif-handoff should live')} <strong>{t('отдельно', 'separately')}</strong> {t('от вашего рабочего проекта', 'from your working project')}</p>
          </div>
        </div>

        <div className="border-l-4 border-blue-400 bg-blue-500/10 p-4 rounded text-sm text-blue-300 mb-6">
          <strong>{t('Архитектура:', 'Architecture:')}</strong> <span className="text-gray-300"> {t('aif-handoff — отдельный сервис (монорепозиторий с API, Web UI и Agent). Не клонируйте его внутрь вашего проекта. Рекомендуется', 'aif-handoff is a standalone service (a monorepo containing the API, Web UI, and Agent). Do not clone it inside your project. We recommend')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">C:\aif-handoff</code>.</span>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS&gt;</span> cd C:\</p>
              <p><span className="text-green-400">PS&gt;</span> git clone https://github.com/lee-to/aif-handoff.git</p>
              <p><span className="text-green-400">PS&gt;</span> cd aif-handoff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Install */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">04</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Установка зависимостей', 'Installing dependencies')}</h2>
            <p className="text-sm text-gray-400">{t('Одна команда устанавливает все пакеты для всех трёх сервисов через Turborepo', 'A single command installs every package for all three services via Turborepo')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS C:\aif-handoff&gt;</span> npm install</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { icon: '!', text: t('Предупреждения deprecated (prebuild-install, @esbuild-kit) — безопасны, игнорируйте', 'Deprecated warnings (prebuild-install, @esbuild-kit) are safe to ignore') },
            { icon: '!', text: t('Предупреждения moderate severity vulnerabilities — не критичны для dev-среды', 'Moderate severity vulnerability warnings are not critical for a dev environment') },
            { icon: '✓', text: t('После установки должно появиться added N packages — всё нормально', 'After install you should see "added N packages" — that is expected') }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 text-sm">
              <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold ${item.icon === '!'
                ? 'bg-amber-500/20 border border-amber-500/50 text-amber-400'
                : 'bg-green-500/20 border border-green-500/50 text-green-400'
                }`}>
                {item.icon}
              </div>
              <div className="text-gray-400">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 05 - Database */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">05</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Инициализация базы данных', 'Initializing the database')}</h2>
            <p className="text-sm text-gray-400">{t('Создаёт SQLite-файл и применяет все миграции (11 штук)', 'Creates the SQLite file and applies all migrations (11 in total)')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS C:\aif-handoff&gt;</span> npm run init</p>
              <p className="text-gray-600">{t('# Выполняет npm run db:setup внутри @aif/shared', '# Runs npm run db:setup inside @aif/shared')}</p>
              <p className="text-gray-600">{t('# Создаёт: C:\\aif-handoff\\data\\aif.sqlite', '# Creates: C:\\aif-handoff\\data\\aif.sqlite')}</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">{t('Успешный вывод содержит:', 'A successful run contains:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">log</span>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <pre className="text-green-400">
              {`{"msg":"Running database migrations"}`}
              {`{"msg":"Migrations complete","newVersion":11}`}
              {`{"msg":"Index bootstrap complete","indexCount":16}`}
              {`{"msg":"Database connection closed"}`}
            </pre>
          </div>
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300">
          <strong>OK:</strong> <span className="text-gray-300"> {t('Если видите', 'If you see')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">newVersion:11</code> {t('и', 'and')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">indexCount:16</code> — {t('база создана корректно.', 'the database was created correctly.')}</span>
        </div>
      </section>

      {/* Section 06 - Env */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">06</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Конфигурация окружения', 'Environment configuration')}</h2>
            <p className="text-sm text-gray-400">{t('Создайте .env из примера и настройте ключевые переменные', 'Create .env from the example and set the key variables')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS C:\aif-handoff&gt;</span> copy .env.example .env</p>
              <p><span className="text-green-400">PS C:\aif-handoff&gt;</span> notepad .env</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded text-sm text-amber-300 mb-6">
          <strong>{t('Windows-специфично:', 'Windows-specific:')}</strong> <span className="text-gray-300"> {t('Обязательно добавьте', 'Make sure to add')} <code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-xs">AGENT_WAKE_ENABLED=false</code> — {t('иначе агент будет спамить ошибкой', 'otherwise the agent will spam the error')} <code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-xs">WebSocket is not defined</code> {t('при попытках подключения. Polling-режим работает полноценно.', 'on every connection attempt. Polling mode works fully.')}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Минимальный .env для Windows', 'Minimal .env for Windows')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# Порты', '# Ports')}</p>
              <p><span className="text-purple-400">PORT</span>=<span className="text-green-400">3009</span></p>
              <p><span className="text-purple-400">WEB_PORT</span>=<span className="text-green-400">5180</span></p>
              <p><span className="text-purple-400">DATABASE_URL</span>=<span className="text-green-400">./data/aif.sqlite</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Агент', '# Agent')}</p>
              <p><span className="text-purple-400">AGENT_BYPASS_PERMISSIONS</span>=<span className="text-green-400">true</span></p>
              <p><span className="text-purple-400">AGENT_WAKE_ENABLED</span>=<span className="text-green-400">false</span>   <span className="text-gray-600">{t('# ВАЖНО для Windows!', '# IMPORTANT for Windows!')}</span></p>
              <p><span className="text-purple-400">POLL_INTERVAL_MS</span>=<span className="text-green-400">30000</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Авторизация (оставить пустым если используется claude login)', '# Authentication (leave empty if using claude login)')}</p>
              <p className="text-gray-600"># ANTHROPIC_API_KEY=sk-ant-xxxxx</p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Логирование', '# Logging')}</p>
              <p><span className="text-purple-400">LOG_LEVEL</span>=<span className="text-green-400">debug</span></p>
              <p><span className="text-purple-400">AGENT_QUERY_AUDIT_ENABLED</span>=<span className="text-green-400">false</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07 - Launch */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">07</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Запуск всех сервисов', 'Starting all services')}</h2>
            <p className="text-sm text-gray-400">{t('Одна команда запускает API, Web UI и Agent параллельно', 'A single command starts the API, Web UI, and Agent in parallel')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">powershell</span>
            <button className="text-xs text-gray-500 hover:text-green-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-green-400">PS C:\aif-handoff&gt;</span> npm run dev</p>
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
                <td className="px-4 py-2 text-gray-400">{t('Координатор субагентов, polling каждые 30 сек', 'Subagent coordinator, polling every 30 seconds')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Признаки успешного запуска', 'Signs of a successful launch')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
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
      </section>

      {/* Section 08 - Project */}
      <section className="py-12 border-t border-gray-700 mb-8">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 h-fit">08</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Создание проекта в UI', 'Creating a project in the UI')}</h2>
            <p className="text-sm text-gray-400">{t('Подключить ваш рабочий проект к aif-handoff', 'Connect your working project to aif-handoff')}</p>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          {[
            { num: 1, title: t('Открыть Kanban UI', 'Open the Kanban UI'), desc: t('Перейдите на http://localhost:5180', 'Go to http://localhost:5180'), hasLine: true },
            { num: 2, title: t('Создать проект', 'Create a project'), desc: t('Нажмите на селектор проектов (верхний левый угол) → Create Project', 'Click the project selector in the top-left corner → Create Project'), hasLine: true },
            { num: 3, title: t('Указать Root Path', 'Set the Root Path'), desc: t('В поле Root Path укажите абсолютный путь к вашему рабочему проекту:\n\nПример: C:\\Users\\username\\my-project\n\nОб этом пути агент скажет команды для git-операций.', 'In the Root Path field, enter the absolute path to your working project:\n\nExample: C:\\Users\\username\\my-project\n\nThe agent will run git operations against this path.'), hasLine: true },
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

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300">
          <strong>{t('Всё готово:', 'All set:')}</strong> <span className="text-gray-300"> {t('API на', 'API on')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">:3009</code> · {t('Web UI на', 'Web UI on')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">:5180</code> · {t('Agent работает нативно на Windows. Добавляйте задачи и наблюдайте за автономным прохождением стадий.', 'Agent runs natively on Windows. Add tasks and watch them flow through the stages autonomously.')}</span>
        </div>
      </section>
    </GuideLayout>
  )
}
