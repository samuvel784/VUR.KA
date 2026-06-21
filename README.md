# VURKA — Meaning, Origins & Research

A static, mobile-first, SEO- and AI-crawler-optimized website documenting the
meaning, origins, interpretations, and significance of **VUR-KA**.

## Structure

```
vurka-site/
├── index.html              Home — overview & quick definition
├── origins/index.html       Etymology: Vur (Latin) + Ka (Egyptian) + Tamil கா
├── research/index.html       Methodology, sources, cross-cultural parallels
├── interpretations/index.html  Literal, philosophical & brand readings
├── faq/index.html            FAQ with FAQPage structured data
├── about/index.html          Mission, motto, sub-brand universe
├── css/style.css             Shared stylesheet (design tokens, layout)
├── js/main.js                Mobile nav toggle + scroll reveal
├── favicon.svg                Favicon
├── manifest.json              Web app manifest
├── robots.txt                 Crawler rules (incl. AI bots)
├── sitemap.xml                 Full sitemap
├── vercel.json                 Deployment config (clean URLs, headers)
└── package.json
```

Every page is plain, semantic HTML5 — no build step, no JavaScript framework,
no client-side rendering required. This means search engines and AI crawlers
(which often don't execute JavaScript) can read the full content directly.

## SEO & AI-discoverability features

- **Descriptive URLs**: `/origins/`, `/research/`, `/faq/`, etc. — no `/page1`.
- **Unique title + meta description + keywords** on every page.
- **JSON-LD structured data** on every page: `WebSite`, `DefinedTerm`,
  `Article`, `FAQPage`, and `AboutPage` schemas.
- **Quick-answer boxes** at the top of key sections — written in the direct
  Q&A style AI Overviews and chat assistants tend to lift verbatim.
- **FAQ page with `FAQPage` schema** — one of the most commonly cited formats
  by AI answer engines.
- **`robots.txt`** explicitly allows major AI crawlers (GPTBot, ClaudeBot,
  Google-Extended, PerplexityBot, etc.) in addition to standard search bots.
- **`sitemap.xml`** lists every page for fast discovery/indexing.
- **Accessible**: skip link, visible focus states, semantic landmarks
  (`header`, `nav`, `main`, `footer`), `prefers-reduced-motion` support.
- **Fast**: no frameworks, no build, minimal CSS/JS, system + Google Fonts only.

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
cd vurka-site
vercel --prod
```

### Option B — GitHub + Vercel dashboard
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Other** (no build command needed).
4. Output directory: leave as root (`.`).
5. Deploy.

### Local preview
```bash
npm run dev
# then open http://localhost:3000
```

## After deployment — important final steps

1. **Update the domain** in every file: replace `https://vurka.com` with your
   real domain in `sitemap.xml`, `robots.txt`, and the `<link rel="canonical">`
   / `og:url` / JSON-LD `url` tags on each page.
2. **Verify in Google Search Console**
   ([search.google.com/search-console](https://search.google.com/search-console)):
   - Add your domain as a property.
   - Submit `https://yourdomain.com/sitemap.xml`.
   - Use "Request Indexing" for each key page (Home, Origins, FAQ first).
3. **Verify in Bing Webmaster Tools** for additional crawler coverage.
4. **Test structured data** with Google's Rich Results Test for each page
   (especially `/faq/`, which uses `FAQPage` schema).
5. Give it time — AI answer engines typically need the page to be indexed by
   their underlying search index before they can cite it.

## Editing content

Each page is self-contained HTML — edit the `<main>` section directly. Shared
styles live in `css/style.css`; shared behavior (mobile nav + scroll reveal)
lives in `js/main.js`. To add a new page, copy an existing page's structure,
update the `<title>`, meta tags, JSON-LD, and breadcrumb, then add it to
`sitemap.xml` and the nav lists across all pages.
