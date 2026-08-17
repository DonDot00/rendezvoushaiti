# Rendez-vous: Haiti

The official website for **Rendez-vous: Haiti**, a sustainability initiative founded by Loyola University Maryland French instructor Catherine Savell in the wake of the 2010 earthquake. The organization supports the Foyer Notre Dame de Lourdes in Santo, a suburb of Port-au-Prince, through education, professional training, infrastructure, and micro-entrepreneurship programs.

> "Solidarity in Action. Solidarity that works."

## Why It Reads as a Professional Site

- **Consistent visual identity** — a Haitian-flag-inspired palette (`#00209F` blue, `#D21034` red, `#FFD100` gold) applied uniformly across every section, paired with `Playfair Display` for headings and `Inter` for body copy.
- **Polished interaction design** — scroll-triggered fade-ins, a cycling hero banner, animated counters, and a scroll-progress indicator give the site a modern, agency-built feel rather than a static brochure.
- **Real content architecture** — dedicated pages for mission, programs, leadership, context/news, and a volunteer application, mirroring the structure of an established nonprofit rather than a single landing page.
- **Accessible, semantic markup** — descriptive `alt` text on all imagery, proper heading hierarchy, and Next.js's built-in image optimization (`next/image`) for fast, responsive loading.
- **SEO-ready metadata** — per-page `<title>` and description/keyword metadata via the Next.js App Router's `Metadata` API.

## Site Map & Elements

| Page | Route | Purpose |
|---|---|---|
| **Home** | `/` | Cycling hero, mission overview, animated impact stats, "Our Story" timeline (2010 → today), four-pillar program preview, photo strip, and a donate/volunteer call-to-action. |
| **What We Do** | `/what-we-do` | Detailed four-point program breakdown (Better Days, Education & Creativity, Entrepreneurship & Jobs, Sustainable Childcare) plus a photo gallery of programs in action. |
| **Who We Are** | `/who-we-are` | Board of Members cards with hover-reveal bios, and a list of Loyola University Maryland academic partnerships supporting the mission. |
| **Why We Need** | `/why-we-need` | Context on the current humanitarian situation in Haiti, with embedded news coverage links. |
| **What We Need** | `/what-we-need` | Volunteer recruitment messaging and an application form for prospective US-based volunteers. |

### Shared Components (`components/`)

- **Navbar / Footer** — persistent site navigation and footer (incl. donate link) rendered in the root layout.
- **HeroCycling / HeroBanner** — rotating full-bleed hero for the homepage; static titled banner for interior pages.
- **ScrollProgress** — a top-of-page progress bar tracking scroll position.
- **FadeIn** — reusable scroll-triggered entrance animation wrapper (built on Framer Motion) used throughout every page.
- **CountUp** — animated numeric counters for the impact stats section.
- **ScrollStory** — supports the scroll-driven "Our Story" timeline treatment.
- **VolunteerForm** — the volunteer application form on the "What We Need" page.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages live under `app/`, shared UI under `components/`.

## Other Scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```
