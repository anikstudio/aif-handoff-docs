import GuideLayout from '../components/GuideLayout'
import { useLanguage } from '../lib/i18n'

export default function DevcontainerGuide() {
  const { t } = useLanguage()
  return (
    <GuideLayout>
      {/* Hero Section */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/25 rounded">
          // dev container · vscode · jetbrains · isolated
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">
          AIF Handoff<br />
          <span className="text-purple-400">Dev Container</span> Guide
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mb-6 leading-relaxed">
          {t(
            'Запуск AIF Handoff в изолированном Dev Container прямо из VS Code или JetBrains IDE. Node 22, все зависимости и проброшенные порты — предустановлены автоматически. Не нужно ничего устанавливать на хост.',
            'Run AIF Handoff in an isolated Dev Container directly from VS Code or a JetBrains IDE. Node 22, all dependencies, and port forwarding come preconfigured. Nothing needs to be installed on the host.'
          )}
        </p>
        <div className="flex gap-6 flex-wrap text-sm text-gray-400">
          <div className="flex items-center gap-2">🐳 <strong className="text-gray-300">Docker Desktop</strong></div>
          <div className="flex items-center gap-2">💙 <strong className="text-gray-300">VS Code</strong></div>
          <div className="flex items-center gap-2">🟣 <strong className="text-gray-300">JetBrains IDE</strong></div>
          <div className="flex items-center gap-2">🔑 <strong className="text-gray-300">{t('Claude аккаунт', 'Claude account')}</strong></div>
        </div>
      </div>

      {/* IDE Tabs */}
      <div className="flex gap-2 mb-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded text-sm font-semibold text-purple-400">
          💙 VS Code
        </div>
        <div className="px-4 py-2 border border-gray-600 rounded text-sm font-semibold text-gray-400">
          🟣 JetBrains (IntelliJ, WebStorm, PyCharm...)
        </div>
      </div>

      {/* Section 01 - What is Dev Container */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">01</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Что такое Dev Container', 'What is a Dev Container')}</h2>
            <p className="text-sm text-gray-400">{t('Изолированная среда разработки внутри Docker-контейнера, управляемая из IDE', 'An isolated development environment inside a Docker container, managed from your IDE')}</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-400 bg-purple-500/10 p-4 rounded text-sm text-purple-300 mb-6">
          <strong>{t('Принцип:', 'Concept:')}</strong> <span className="text-gray-300"> {t(
            'Dev Container — это Docker-контейнер со всем необходимым окружением (Node.js 22, зависимости, порты), которым управляет ваша IDE. Открываете проект — IDE предлагает переоткрыть его в контейнере.',
            'A Dev Container is a Docker container with everything you need (Node.js 22, dependencies, ports) that your IDE manages for you. Open the project and the IDE prompts you to reopen it inside the container.'
          )}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: '⚡', title: t('Нет ручной настройки', 'No manual setup'), desc: t('Node.js 22, npm, все зависимости предустановлены автоматически при открытии контейнера.', 'Node.js 22, npm, and all dependencies are preinstalled automatically when the container opens.') },
            { icon: '🔒', title: t('Полная изоляция', 'Full isolation'), desc: t('Среда не конфликтует с другими проектами и системными зависимостями на хосте.', 'The environment never clashes with other projects or system-level dependencies on the host.') },
            { icon: '🌐', title: t('Порты пробрасываются', 'Ports are forwarded'), desc: t('Порты 3009 (API) и 5180 (Web UI) автоматически пробрасываются на хост.', 'Ports 3009 (API) and 5180 (Web UI) are forwarded to the host automatically.') },
            { icon: '💾', title: t('Код остаётся на хосте', 'Code stays on the host'), desc: t('Файлы проекта монтируются из хоста — редактируете как обычно, изменения сразу видны.', 'Project files are mounted from the host — edit them as usual and changes are picked up instantly.') }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
              <div className="text-xs text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mb-3">{t('Конфигурация Dev Container находится в репозитории:', 'The Dev Container configuration lives in the repository:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">tree</span>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-green-400">aif-handoff/</p>
              <p>└── <span className="text-purple-400">.devcontainer/</span></p>
              <p>    └── <span className="text-amber-400">devcontainer.json</span>   <span className="text-gray-600">{t('# конфигурация контейнера', '# container configuration')}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Requirements */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">02</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Требования', 'Requirements')}</h2>
            <p className="text-sm text-gray-400">{t('Что нужно установить перед началом', 'What to install before you start')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div style={{ color: '#007acc', fontSize: '20px' }} className="mb-3">💙</div>
            <div className="font-semibold text-white text-sm mb-2">VS Code</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>{t('VS Code (последняя версия)', 'VS Code (latest version)')}</li>
              <li>{t('Расширение ', 'The ')}<strong>Dev Containers</strong>{t(' от Microsoft', ' extension by Microsoft')}</li>
              <li>Docker Desktop</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="mb-3 text-xl">🟣</div>
            <div className="font-semibold text-white text-sm mb-2">JetBrains</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>{t('IntelliJ IDEA, WebStorm, PyCharm или другая JetBrains IDE', 'IntelliJ IDEA, WebStorm, PyCharm, or another JetBrains IDE')}</li>
              <li>{t('Плагин ', 'The ')}<strong>Dev Containers</strong>{t('', ' plugin')}</li>
              <li>Docker Desktop</li>
              <li>Git</li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded text-sm text-amber-300 mt-4">
          <strong>{t('Docker Desktop обязателен:', 'Docker Desktop is required:')}</strong> <span className="text-gray-300"> {t(
            'Dev Container работает поверх Docker. Убедитесь что Docker Desktop запущен перед открытием проекта в IDE.',
            'Dev Containers run on top of Docker. Make sure Docker Desktop is running before opening the project in your IDE.'
          )}</span>
        </div>
      </section>

      {/* Section 03 - Clone */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">03</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Клонирование репозитория', 'Clone the repository')}</h2>
            <p className="text-sm text-gray-400">{t('Получить исходный код на хост-машину', 'Get the source code onto your host machine')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-purple-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">$</span> git clone https://github.com/lee-to/aif-handoff.git</p>
              <p><span className="text-purple-400">$</span> cd aif-handoff</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-400 bg-blue-500/10 p-4 rounded text-sm text-blue-300">
          <strong>{t('Или клонировать прямо из IDE:', 'Or clone directly from the IDE:')}</strong> <span className="text-gray-300"> {t('VS Code и JetBrains поддерживают клонирование через встроенный Git-клиент —', 'Both VS Code and JetBrains support cloning through their built-in Git client —')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">Git: Clone</code> {t('в командной строке VS Code или', 'in the VS Code command palette, or')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">File → New → Project from VCS</code> {t('в JetBrains.', 'in JetBrains.')}</span>
        </div>
      </section>

      {/* Section 04 - VS Code Setup */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">04</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('VS Code — установка расширения', 'VS Code — install the extension')}</h2>
            <p className="text-sm text-gray-400">{t('Установить Dev Containers extension от Microsoft', 'Install the Dev Containers extension by Microsoft')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            { num: 1, title: t('Открыть панель расширений', 'Open the Extensions panel'), desc: t('В VS Code нажмите Ctrl+Shift+X (или Cmd+Shift+X на macOS) для открытия Extensions.', 'In VS Code press Ctrl+Shift+X (or Cmd+Shift+X on macOS) to open Extensions.'), hasLine: true },
            { num: 2, title: t('Найти и установить Dev Containers', 'Find and install Dev Containers'), desc: t('Введите в поиске: Dev Containers\nУстановите расширение от Microsoft (ID: ms-vscode-remote.remote-containers)', 'Search for: Dev Containers\nInstall the extension by Microsoft (ID: ms-vscode-remote.remote-containers)'), hasLine: true },
            { num: 3, title: t('Убедиться что Docker Desktop запущен', 'Make sure Docker Desktop is running'), desc: t('Dev Containers требует запущенный Docker. Иконка Docker в трее должна показывать "Docker Desktop is running".', 'Dev Containers requires Docker to be running. The Docker tray icon should read "Docker Desktop is running".'), hasLine: false }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
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

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mt-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{t('bash — альтернативно через CLI', 'bash — alternatively via CLI')}</span>
            <button className="text-xs text-gray-500 hover:text-purple-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">$</span> code --install-extension ms-vscode-remote.remote-containers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 - VS Code Open */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">05</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('VS Code — открытие в контейнере', 'VS Code — open in container')}</h2>
            <p className="text-sm text-gray-400">{t('Два способа открыть проект в Dev Container', 'Two ways to open the project inside a Dev Container')}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Способ 1 — через уведомление (рекомендуется)', 'Option 1 — via the notification (recommended)')}</h3>

        <div className="space-y-1 mb-6">
          {[
            { num: 1, title: t('Открыть папку проекта', 'Open the project folder'), desc: t('File → Open Folder → выбрать папку aif-handoff', 'File → Open Folder → select the aif-handoff folder'), hasLine: true },
            { num: 2, title: t('Принять предложение VS Code', 'Accept the VS Code prompt'), desc: t('VS Code автоматически обнаружит .devcontainer/devcontainer.json и покажет уведомление в правом нижнем углу с кнопкой Reopen in Container. Нажмите эту кнопку.', 'VS Code automatically detects .devcontainer/devcontainer.json and shows a notification in the bottom-right corner with a Reopen in Container button. Click it.'), hasLine: true },
            { num: 3, title: t('Дождаться сборки контейнера', 'Wait for the container to build'), desc: t('VS Code соберёт образ и запустит контейнер. При первом запуске это займёт несколько минут. Прогресс виден в уведомлении — нажмите "Show log" для деталей.', 'VS Code builds the image and starts the container. The first run takes a few minutes. Progress is shown in the notification — click "Show log" for details.'), hasLine: false }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                  {step.num}
                </div>
                {step.hasLine && <div className="w-0.5 h-12 bg-gray-700 mt-1"></div>}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-sm font-semibold text-white mb-2">{step.title}</div>
                <div className="text-sm text-gray-400">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Способ 2 — через Command Palette', 'Option 2 — via the Command Palette')}</h3>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">vs code — command palette</span>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p className="text-gray-600">{t('# Открыть Command Palette', '# Open the Command Palette')}</p>
              <p><span className="text-amber-400">Ctrl+Shift+P</span>  <span className="text-gray-600">{t('(или Cmd+Shift+P на macOS)', '(or Cmd+Shift+P on macOS)')}</span></p>
              <p className="h-2" />
              <p className="text-gray-600">{t('# Ввести команду', '# Type the command')}</p>
              <p className="text-purple-400">Dev Containers: Reopen in Container</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300">
          <strong>{t('После открытия:', 'After opening:')}</strong> <span className="text-gray-300"> {t('В левом нижнем углу VS Code появится индикатор', 'The bottom-left corner of VS Code shows the')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">Dev Container: aif-handoff</code> {t('— это означает что вы работаете внутри контейнера. Терминал VS Code теперь работает внутри контейнера.', 'indicator, which means you are working inside the container. The VS Code terminal now runs inside the container as well.')}</span>
        </div>
      </section>

      {/* Section 06 - JetBrains Setup */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">06</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('JetBrains — настройка', 'JetBrains — setup')}</h2>
            <p className="text-sm text-gray-400">{t('Установить плагин Dev Containers для JetBrains IDE', 'Install the Dev Containers plugin for your JetBrains IDE')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            { num: 1, title: t('Открыть настройки плагинов', 'Open the plugin settings'), desc: t('File → Settings → Plugins (Windows/Linux)\nIntelliJ IDEA → Preferences → Plugins (macOS)', 'File → Settings → Plugins (Windows/Linux)\nIntelliJ IDEA → Preferences → Plugins (macOS)'), hasLine: true },
            { num: 2, title: t('Найти и установить Dev Containers', 'Find and install Dev Containers'), desc: t('На вкладке Marketplace найдите Dev Containers и нажмите Install.\nПосле установки перезапустите IDE.', 'On the Marketplace tab search for Dev Containers and click Install.\nRestart the IDE once the installation finishes.'), hasLine: true },
            { num: 3, title: t('Настроить Docker в IDE', 'Configure Docker in the IDE'), desc: t('Settings → Build, Execution, Deployment → Docker\nНажмите + и выберите Docker Desktop (или Unix socket на Linux).\nIDE должна показать Connection successful.', 'Settings → Build, Execution, Deployment → Docker\nClick + and select Docker Desktop (or the Unix socket on Linux).\nThe IDE should report Connection successful.'), hasLine: false }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
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
      </section>

      {/* Section 07 - JetBrains Open */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">07</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('JetBrains — открытие в контейнере', 'JetBrains — open in container')}</h2>
            <p className="text-sm text-gray-400">{t('Открыть проект aif-handoff в Dev Container', 'Open the aif-handoff project inside a Dev Container')}</p>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          {[
            { num: 1, title: t('Открыть проект', 'Open the project'), desc: t('File → Open → выбрать папку aif-handoff', 'File → Open → select the aif-handoff folder'), hasLine: true },
            { num: 2, title: t('Принять предложение IDE', 'Accept the IDE prompt'), desc: t('JetBrains обнаружит .devcontainer/devcontainer.json и покажет уведомление с кнопкой Reopen in Dev Container. Нажмите эту кнопку.', 'JetBrains detects .devcontainer/devcontainer.json and shows a notification with a Reopen in Dev Container button. Click it.'), hasLine: true },
            { num: 3, title: t('Дождаться запуска контейнера', 'Wait for the container to start'), desc: t('IDE соберёт и запустит контейнер. Прогресс отображается в нижней панели статуса. При первом запуске займёт несколько минут.', 'The IDE builds and starts the container. Progress is shown in the bottom status bar. The first run takes a few minutes.'), hasLine: false }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                  {step.num}
                </div>
                {step.hasLine && <div className="w-0.5 h-12 bg-gray-700 mt-1"></div>}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-sm font-semibold text-white mb-2">{step.title}</div>
                <div className="text-sm text-gray-400">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-blue-400 bg-blue-500/10 p-4 rounded text-sm text-blue-300">
          <strong>{t('Альтернативно:', 'Alternatively:')}</strong> <span className="text-gray-300"> {t('В JetBrains можно открыть Dev Container через', 'In JetBrains you can open a Dev Container via')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">File → Remote Development → Dev Containers → Open Existing</code> {t('и указать путь к папке с', 'and point it at the folder containing')} <code className="bg-blue-500/20 px-1.5 py-0.5 rounded text-xs">.devcontainer</code>.</span>
        </div>
      </section>

      {/* Section 08 - Authorization */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">08</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Авторизация Claude', 'Claude authentication')}</h2>
            <p className="text-sm text-gray-400">{t('Настроить доступ к Claude внутри Dev Container', 'Configure access to Claude inside the Dev Container')}</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">{t('Два варианта — выберите один:', 'Two options — pick one:')}</p>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Option A — API Key (рекомендуется для Dev Container)', 'Option A — API Key (recommended for Dev Container)')}</h3>

        <p className="text-xs text-gray-400 mb-3">{t('Создайте', 'Create')} <code className="bg-gray-900 px-1.5 py-0.5 rounded">.env</code> {t('из примера', 'from the example')} <strong>{t('до', 'before')}</strong> {t('открытия контейнера:', 'opening the container:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">bash</span>
            <button className="text-xs text-gray-500 hover:text-purple-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">$</span> cp .env.example .env</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">.env</span>
            <button className="text-xs text-gray-500 hover:text-purple-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">ANTHROPIC_API_KEY</span>=<span className="text-green-400">sk-ant-xxxxx</span></p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">{t('Option B — Claude подписка (OAuth внутри терминала)', 'Option B — Claude subscription (OAuth inside the terminal)')}</h3>

        <p className="text-xs text-gray-400 mb-3">{t('Откройте терминал внутри контейнера (в VS Code — Ctrl+`, в JetBrains — вкладка Terminal) и выполните:', 'Open a terminal inside the container (in VS Code press Ctrl+`, in JetBrains use the Terminal tab) and run:')}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{t('bash — терминал внутри контейнера', 'bash — terminal inside the container')}</span>
            <button className="text-xs text-gray-500 hover:text-purple-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">$</span> claude login</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded text-sm text-amber-300">
          <strong>{t('URL из терминала:', 'URL from the terminal:')}</strong> <span className="text-gray-300"> {t('Скопируйте URL целиком без переносов строк и откройте в браузере на хосте. Переносы строк ломают OAuth с ошибкой ', 'Copy the URL in one piece without line breaks and open it in a browser on the host. Line breaks break OAuth with an ')}<code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-xs">invalid code_challenge</code>{t('.', ' error.')}</span>
        </div>
      </section>

      {/* Section 09 - Env */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">09</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Конфигурация .env', '.env configuration')}</h2>
            <p className="text-sm text-gray-400">{t('Настройка переменных окружения для Dev Container', 'Environment variables for the Dev Container')}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{t('bash — создать из примера', 'bash — create from the example')}</span>
            <button className="text-xs text-gray-500 hover:text-purple-400 border border-gray-600 px-3 py-1 rounded transition">copy</button>
          </div>
          <div className="p-4 overflow-x-auto font-mono text-sm">
            <div className="text-gray-300 space-y-1 break-words">
              <p><span className="text-purple-400">$</span> cp .env.example .env</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-4 border border-gray-700 rounded-lg">
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
                { name: 'ANTHROPIC_API_KEY', default: '—', desc: t('Оставить пустым если используется claude login', 'Leave empty when using claude login') },
                { name: 'PORT', default: '3009', desc: t('Порт API — пробрасывается на хост автоматически', 'API port — forwarded to the host automatically') },
                { name: 'WEB_PORT', default: '5180', desc: t('Порт Web UI — пробрасывается на хост автоматически', 'Web UI port — forwarded to the host automatically') },
                { name: 'AGENT_BYPASS_PERMISSIONS', default: 'true', desc: t('Разрешить агенту выполнять команды', 'Allow the agent to execute commands') },
                { name: 'AGENT_USE_SUBAGENTS', default: 'true', desc: t('false для ускорения на слабых машинах', 'set to false to speed things up on low-end machines') },
                { name: 'POLL_INTERVAL_MS', default: '30000', desc: t('Интервал опроса задач (мс)', 'Task polling interval (ms)') }
              ].map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700 hover:bg-gray-900/50">
                  <td className="px-4 py-2 text-purple-400 font-medium text-xs">{item.name}</td>
                  <td className="px-4 py-2 text-gray-400 text-xs"><code>{item.default}</code></td>
                  <td className="px-4 py-2 text-gray-400 text-xs">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10 - Launch */}
      <section className="py-12 border-t border-gray-700">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">10</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Запуск и проверка', 'Run and verify')}</h2>
            <p className="text-sm text-gray-400">{t('Запустить сервисы из терминала внутри контейнера', 'Start the services from the terminal inside the container')}</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-400 bg-purple-500/10 p-4 rounded text-sm text-purple-300 mb-6">
          <strong>{t('Важно:', 'Important:')}</strong> <span className="text-gray-300"> {t('Все команды выполняются в терминале', 'All commands run in a terminal')} <strong>{t('внутри контейнера', 'inside the container')}</strong> {t('(терминал IDE после открытия в Dev Container), не на хосте.', '(the IDE terminal after you reopen in the Dev Container), not on the host.')}</span>
        </div>

        <div className="space-y-1">
          {[
            { num: 1, title: t('Установить зависимости', 'Install dependencies'), code: 'npm install', footer: t('В Dev Container зависимости могут устанавливаться автоматически — проверьте лог запуска контейнера.', 'In a Dev Container dependencies may be installed automatically — check the container startup log.'), hasLine: true },
            { num: 2, title: t('Инициализировать базу данных', 'Initialize the database'), code: 'npm run init', hasLine: true },
            { num: 3, title: t('Запустить все сервисы', 'Start all services'), code: 'npm run dev', hasLine: true },
            { num: 4, title: t('Открыть Web UI', 'Open the Web UI'), desc: t('Перейдите на http://localhost:5180 в браузере на хосте — порт пробрасывается автоматически.\n\nVS Code также покажет уведомление с кнопкой "Open in Browser" при старте сервера.', 'Go to http://localhost:5180 in a browser on the host — the port is forwarded automatically.\n\nVS Code will also show an "Open in Browser" notification when the server starts.'), hasLine: false }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                  {step.num}
                </div>
                {step.hasLine && <div className="w-0.5 h-12 bg-gray-700 mt-1"></div>}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-sm font-semibold text-white mb-2">{step.title}</div>
                {step.code && <div className="bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono text-xs text-purple-400 mb-2">$ {step.code}</div>}
                {step.desc && <div className="text-sm text-gray-400 whitespace-pre-line">{step.desc}</div>}
                {step.footer && <p className="text-xs text-gray-400 mt-2">{step.footer}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-green-400 bg-green-500/10 p-4 rounded text-sm text-green-300 mt-6">
          <strong>{t('Готово:', 'Done:')}</strong> <span className="text-gray-300"> {t('API на', 'API on')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">:3009</code> · {t('Web UI на', 'Web UI on')} <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-xs">:5180</code> · {t('Agent работает внутри контейнера. Создайте проект в UI и добавьте задачу в Backlog.', 'the Agent runs inside the container. Create a project in the UI and add a task to the Backlog.')}</span>
        </div>
      </section>

      {/* Section 11 - Troubleshooting */}
      <section className="py-12 border-t border-gray-700 mb-8">
        <div className="flex gap-4 mb-8">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 h-fit">11</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('Устранение проблем', 'Troubleshooting')}</h2>
            <p className="text-sm text-gray-400">{t('Типичные проблемы Dev Container', 'Common Dev Container issues')}</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            { title: t('IDE не предлагает "Reopen in Container"', 'The IDE does not offer "Reopen in Container"'), desc: t('Убедитесь что расширение/плагин Dev Containers установлен и Docker Desktop запущен. В VS Code вызовите вручную:\nCtrl+Shift+P → Dev Containers: Reopen in Container', 'Make sure the Dev Containers extension/plugin is installed and Docker Desktop is running. In VS Code trigger it manually:\nCtrl+Shift+P → Dev Containers: Reopen in Container') },
            { title: t('Контейнер не собирается — ошибки Docker', 'The container fails to build — Docker errors'), desc: t('Проверьте что Docker Desktop запущен и имеет достаточно ресурсов (минимум 4GB RAM). Попробуйте пересобрать:\n\nDev Containers: Rebuild Container', 'Check that Docker Desktop is running and has enough resources (at least 4GB of RAM). Try rebuilding:\n\nDev Containers: Rebuild Container') },
            { title: t('Порты не пробрасываются', 'Ports are not being forwarded'), desc: t('В VS Code проверьте вкладку Ports (рядом с Terminal). Если портов нет — добавьте вручную: нажмите "Forward a Port" и введите 3009 и 5180.', 'In VS Code check the Ports tab (next to Terminal). If no ports are listed, add them manually: click "Forward a Port" and enter 3009 and 5180.') },
            { title: t('Агент зависает или нет прав', 'The agent hangs or lacks permissions'), desc: t('Добавьте в .env внутри контейнера:\n\nAGENT_BYPASS_PERMISSIONS=true\nAGENT_USE_SUBAGENTS=false  # если медленно работает\n\nПерезапустите npm run dev.', 'Add the following to .env inside the container:\n\nAGENT_BYPASS_PERMISSIONS=true\nAGENT_USE_SUBAGENTS=false  # if it runs slowly\n\nRestart npm run dev.') }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-5 py-5 border-b border-gray-700 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">
                  !
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                <div className="text-sm text-gray-400 whitespace-pre-line">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </GuideLayout>
  )
}
