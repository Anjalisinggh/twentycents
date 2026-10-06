# 20CENT

A bilingual (Japanese / English) marketing website for **20CENT**, a creative studio that combines video production, design and system development under one roof. Its teams in Tokyo, Paris and Mumbai work round the clock.

## Overview

- **Hero**: "Accelerate your business with integrated creative solutions."
- **Features**: one-stop production, world-class creators (ex-ILM / DNEG / Weta), a 24-hour follow-the-sun workflow, and an AI × human production model
- **Short PR ads**: showcase of short-form video work
- **Service lineup**: Japan-focused and international services
- **Clients & partners**: creative partners and results
- **Process**: inquiry → quote → demo → service start
- **Contact page**: dedicated contact form route

## Features

- **Internationalization** with `next-intl`: `/ja` (default) and `/en` routes, locale middleware and a language toggle
- Translations kept in `locales/en.json` and `locales/ja.json`
- Smooth section animations with **Framer Motion**
- Responsive layout styled with **Tailwind CSS v4**

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| i18n | next-intl |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | lucide-react, react-icons |

## Project Structure

```
app/
├── [locale]/            # Localized pages (home, contact)
components/
├── layout/              # Footer, LanguageToggle, HtmlLangSetter
└── sections/            # Hero, Features, Shorts, Services, Clients, Process…
locales/                 # en.json, ja.json
middleware.js            # Locale routing
```

## Getting Started

```bash
git clone https://github.com/Anjalisinggh/twentycents.git
cd twentycents
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It redirects to `/ja`, and `/en` shows the English version.

## Author

**Anjali Singh**: [GitHub](https://github.com/Anjalisinggh) · [Portfolio](https://anjali.monster) · [LinkedIn](https://www.linkedin.com/in/anjali-singh-82bb42302)
