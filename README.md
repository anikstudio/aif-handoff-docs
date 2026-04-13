# AIF Handoff Docs

Documentation site for **AIF Handoff** — an autonomous Kanban board powered by AI agents. Static React/Vite app with bilingual (RU/EN) interface covering installation and configuration across Docker, DevContainer, Linux/macOS and Windows.

Live: https://github.com/lee-to/aif-handoff (source project)

---

## Stack

- **React 18** + **React Router 6** — SPA with client-side routing
- **Vite 5** — build pipeline and dev server
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) + `@tailwindcss/typography`
- **Custom i18n context** — lightweight `t(ru, en)` helper, no runtime dependencies

## Project structure

```
src/
├── App.jsx                  # Router setup
├── main.jsx                 # Entry point, wraps app in <LanguageProvider>
├── index.css                # Tailwind import + design tokens (@theme block)
├── lib/
│   └── i18n.jsx             # LanguageProvider + useLanguage hook
├── components/
│   ├── Header.jsx           # Sticky nav with RU/EN toggle
│   ├── Footer.jsx
│   ├── GuideLayout.jsx      # Wrapper for guide pages
│   └── NavCard.jsx          # Platform card on the home page
└── pages/
    ├── Home.jsx
    ├── DockerGuide.jsx
    ├── DevcontainerGuide.jsx
    ├── LinuxMacosGuide.jsx
    └── WindowsGuide.jsx

public/
└── .htaccess                # Apache SPA fallback + HTTPS redirect + caching

index.html                   # CSP meta header, favicon (inline SVG)
vite.config.js               # base: './', plugins: react + tailwindcss
```

## Design system

Dark theme ported from the `aif-handoff-ui-kit.lib.pen` source file:

| Token | Value |
|---|---|
| background | `#0a0a0a` |
| card | `#101010` |
| border | `#2a2a2a` |
| primary | `#10b981` (emerald) |
| muted | `#141414` |
| muted-foreground | `#6b7280` |
| foreground | `#fafafa` |

All tokens are exposed as CSS custom properties via Tailwind v4 `@theme` block in [src/index.css](src/index.css) and can be used as utility classes (`bg-background`, `text-primary`, etc.) or directly (`bg-[#10b981]`).

Visual language: uppercase monospace labels with wide letter-spacing (`/// guides`, `/// about`), subtle card borders, segmented-control toggles, emerald primary actions with near-black foreground.

## Internationalization

Custom context-based i18n — no runtime library, no JSON files, no build step.

```jsx
import { useLanguage } from './lib/i18n'

function MyComponent() {
  const { lang, setLang, t } = useLanguage()

  return (
    <h1>{t('Привет', 'Hello')}</h1>
  )
}
```

- `lang` — current language (`'ru'` | `'en'`)
- `setLang(lang)` — explicitly set language
- `toggleLang()` — flip between RU and EN
- `t(ru, en)` — returns the string matching active language

Language preference is persisted in `localStorage` under `aif-docs-lang`. Default is `ru`. The RU/EN segmented toggle lives in the [Header](src/components/Header.jsx), visible on both desktop and mobile.

Every user-facing string across all pages is wrapped in `t(ru, en)`. Code blocks, shell commands, file paths, URLs, and tech product names (Docker, PowerShell, Node.js, etc.) are intentionally left untranslated.

## Security

- **CSP meta header** in [index.html](index.html):
  - `default-src 'self'`
  - `script-src 'self'`
  - `style-src 'self' 'unsafe-inline'` (required for Tailwind v4 + Vite HMR)
  - `frame-ancestors 'none'`
  - `form-action 'self'`
- **No dynamic user input**, **no backend calls** — fully static site
- **No third-party trackers or analytics**

## Getting started

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # production build to dist/
npm run preview    # local preview of production build
```

## Deployment

### Shared hosting (Apache / sweb.ru / etc.)

1. `npm run build`
2. Upload the contents of `dist/` (including the hidden `.htaccess`) to `public_html/` of the target domain
3. Make sure `mod_rewrite` is enabled on the host

The bundled [public/.htaccess](public/.htaccess) handles:
- **SPA fallback** — sends any non-existing path to `index.html` so React Router takes over (direct `/windows` or page refresh works)
- **HTTPS force-redirect** with reverse-proxy awareness (`X-Forwarded-Proto` check) — works on sweb.ru and similar shared hostings that terminate SSL at the proxy layer
- **Gzip compression** for text assets
- **Long-term caching** (`immutable`, 1 year) for hashed JS/CSS, `no-cache` for HTML

### GitHub Pages

Temporarily switch `vite.config.js` to `base: '/aif-handoff-docs/'` and `<Router basename="/aif-handoff-docs/">` in [src/App.jsx](src/App.jsx), then:

```bash
npm run deploy     # builds and pushes dist/ to gh-pages branch via gh-pages CLI
```

## License

MIT

## Credits

Documentation for [lee-to/aif-handoff](https://github.com/lee-to/aif-handoff).
