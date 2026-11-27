# Personal website

Researcher site built with [Astro](https://astro.build): an academic profile with a "Work with me" page for
consulting. Light theme, navy accent.

| Page | Path | Content |
| --- | --- | --- |
| Top | `/` | About, research, work with me (services), selected publications, latest posts |
| Publications | `/publications/` | All entries grouped by year, with type filters |
| Software | `/software/` | Projects with thumbnails, highlights, tags, licence and links |
| CV | `/cv/` | Positions, education, awards & grants, invited talks, skills, PDF download |
| Work with me | `/work/` | Services, selected work, how a project runs, contact |
| Blog | `/blog/` | Appears in the navigation once a post is published |

The left sidebar (photo, name, position, links, "Available for projects") is shown on every page.

## Commands

```bash
npm install        # first time only
npm run dev        # dev server at http://localhost:4321 (reloads on edit)
npm run build      # static build into dist/
```

## Editing content (only `src/data/` needs to change)

| What | File |
| --- | --- |
| Name, position, affiliation, links, about, research themes | `src/data/profile.ts` (`profile`) |
| Business name, contact email, services, "how it works" steps, availability | `src/data/profile.ts` (`business`) |
| Publications and talks | `src/data/publications.ts` |
| Software | `src/data/software.ts` |
| Positions, education, awards, skills, PDF | `src/data/cv.ts` |
| Blog posts | `src/content/blog/*.md` |

- **Placeholders** are written in `[brackets]`, as a whole value or mid-sentence, and render as grey italic text.
  Replace them and drop the brackets. Find what is left with `grep -rn '\[' src/data`.
- **Photo**: put it in `src/assets/` and set `photo` in `profile.ts` (instructions in the comment there). Without one, the initials are shown.
- **Contact**: set `business.email`; until then the "Get in touch" buttons are shown as dashed placeholders.
- **Availability box**: set `business.available` to `false` to hide it.
- **Publications**: one object per entry. `type` is `journal` / `conference` / `preprint` / `manuscript` / `talk`.
  `selected: true` shows it on the top page; `note: 'Invited'` on a talk also lists it under "Invited talks" in the CV.
- **CV PDF**: put the file in `public/` (e.g. `public/cv.pdf`) and set `cv.pdf = '/cv.pdf'`.
- **Colour**: change `--accent` and `--accent-soft` at the top of `src/styles/global.css`.

## Blog

Add a Markdown file to `src/content/blog/` (`hello-world.md` is a template). Posts with `draft: true` are not
published. Once one post has `draft: false`, "Blog" appears in the navigation and "Latest posts" on the top page.

## Publishing (GitHub Pages)

1. Create a repository named `hodakamori.github.io` and push this folder to it
2. Settings → Pages → Source: "GitHub Actions"
3. Every push to `main` deploys via `.github/workflows/deploy.yml`; the site is at `https://hodakamori.github.io/`

For another URL, change `site` in `astro.config.mjs` (for a project page, also set `base`).
