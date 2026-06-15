# Portfolio — AI/ML Engineer & Flutter Developer

A recruiter-focused portfolio + résumé, built for the 2026 AI-hiring market. Minimal & warm editorial design, with a live **Ask-My-AI** assistant (Gemini) that answers recruiter questions — a working demo of the GenAI skill, not just a claim.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Motion · Vercel AI SDK + Google Gemini.

---

## 1. Make it yours (start here)

Everything personal lives in **one file**: [`lib/data.ts`](lib/data.ts).
Open it and replace every value marked `// TODO`. The 6 must-fill fields are at the top in `profile`:

| Field | What to put |
|-------|-------------|
| `name` | Your full name |
| `email` | Contact email |
| `phone` | Phone number |
| `location` | City, Country |
| `github` | GitHub URL (leave `""` to hide) |
| `linkedin` | LinkedIn URL (leave `""` to hide) |

Then verify the rest: `skills` (recruiters probe what you list — keep it 100% honest), `experience` dates/companies, `research` link, and `education`.

> The résumé page (`/resume`) and the AI assistant both read from this same file — edit once, everything updates.

## 2. Run locally

```bash
npm install
cp .env.example .env.local   # then paste your Gemini key (optional)
npm run dev                  # http://localhost:3000
```

The **Ask-My-AI** chat uses Google Gemini. Add a key (`GOOGLE_GENERATIVE_AI_API_KEY`) from <https://aistudio.google.com/apikey>. **Without a key it still works** — it falls back to built-in answers, so it never breaks in front of a recruiter.

## 3. The résumé / CV

Visit **`/resume`** → click **Print / Save as PDF** (or `⌘/Ctrl-P`). It's a clean, single-column, ATS-friendly document that prints to a perfect PDF. Same content as the site, kept in sync automatically.

## 4. Deploy to Vercel

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

In the Vercel dashboard → **Settings → Environment Variables**, add `GOOGLE_GENERATIVE_AI_API_KEY` so the live chat uses Gemini. After deploying, update `metadataBase` in `app/layout.tsx` with your real URL for correct SEO/social cards.

---

## Project map

```
lib/data.ts            ← ALL your content (edit this)
app/page.tsx           ← section order on the homepage
app/resume/page.tsx    ← the print-ready CV
app/api/chat/route.ts  ← Gemini chat endpoint (+ offline fallback)
app/globals.css        ← theme tokens (colors, fonts)
components/             ← Hero, AskAI, Research, Experience, Projects, Skills, …
```

## Change the look

Theme colors and fonts are CSS variables in `app/globals.css` under `@theme`. Swap `--color-accent` (terracotta) or the fonts (`--font-display`, `--font-body`) to re-skin the whole site.
