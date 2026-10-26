# مُسعف في كل مكان — Musaaf

> **مبادرة توعوية للإسعافات الأولية**
> جامعة عين شمس — كلية التربية النوعية

An Arabic-first interactive educational website for the **مُسعف في كل مكان** (First Aid Awareness) initiative.

---

## Quick Start

```bash
cd musaaf
pnpm install
pnpm dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build (outputs to `dist/`) |
| `pnpm preview` | Preview production build locally |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              — Responsive RTL navigation with mobile menu
│   ├── Footer.tsx              — Footer with emergency info and disclaimer
│   ├── HeroIllustration.tsx    — Custom animated SVG medical illustration
│   ├── GuideCategoryGrid.tsx   — Interactive guide category cards
│   ├── GuideSearch.tsx         — Search + category filter for guides
│   ├── Quiz.tsx                — Interactive awareness quiz with scoring
│   ├── KitGrid.tsx             — First-aid kit items grid
│   ├── SectionReveal.tsx       — Scroll-triggered animation wrappers
│   └── ScrollToTop.tsx         — Auto-scroll on navigation
│
├── pages/
│   ├── HomePage.tsx            — Main landing page (all sections)
│   ├── GuidePage.tsx           — Individual guide detail page
│   ├── GuidesLibraryPage.tsx   — Guide library with search
│   ├── BleedingTypesPage.tsx   — Bleeding types educational page
│   ├── KitPage.tsx             — First-aid kit page
│   ├── QuizPage.tsx            — Full quiz page
│   └── SourcesPage.tsx         — Medical references
│
├── data/                       — Arabic content, separate from UI
│   ├── guides.ts               — 8 first-aid guides with full content
│   ├── quiz.ts                 — 8 quiz questions with explanations
│   └── kit.ts                  — First-aid kit items
│
├── types/index.ts              — TypeScript interfaces
└── styles/global.css           — Global CSS, animations, design tokens
```

---

## Visual Identity

| Token | Value | Usage |
|-------|-------|-------|
| Institutional navy | `#124A78` | Headers, buttons |
| Deep navy | `#092D4B` | Footer, hero |
| Medical red | `#D92736` | Emergency, CTA |
| Soft white | `#FAFBFD` | Page backgrounds |
| Light blue | `#E8F3FA` | Section backgrounds |
| Muted gray | `#667789` | Body text |

**Typography:** Cairo (Google Fonts / @fontsource/cairo)

---

## Medical Sources

- [NHS](https://www.nhs.uk)
- [American Red Cross](https://www.redcross.org)
- [American Heart Association](https://cpr.heart.org)
- [European Resuscitation Council](https://www.erc.edu)

---

## Known Limitations

1. **Medical review:** Not reviewed by a licensed Egyptian physician. Based on published international guidelines.
2. **Ambulance number 123:** Verify against official Egyptian Ministry of Health sources before clinical publication.
3. **No backend:** Fully static; quiz and search are client-side only.
4. **University logos:** Not included — not supplied. Text-based affiliation used.

---

## Important Disclaimer

Educational awareness tool only. Does not replace certified first-aid training, professional medical advice, or emergency services.

**In any emergency in Egypt: call 123**
