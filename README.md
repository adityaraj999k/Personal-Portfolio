# Aditya Raj Kushwaha — Developer Portfolio

A premium, dark-mode developer portfolio built with React, Vite, TypeScript,
Tailwind CSS, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is written to `dist/`. You can deploy that folder to
any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Project structure

```
src/
  components/   Reusable UI: Navbar, Button, Badge, SocialLinks,
                SectionHeading, CodePanel, Footer
  sections/     One file per page section: Hero, About, Skills,
                Projects, Experience, Achievements, Contact
  data/         All editable content lives here — see below
  pages/        Home.tsx composes the sections into the page
  hooks/        useActiveSection.ts — tracks the section in view
                for the navbar's active-link indicator
  assets/       Your profile photo
public/
  aditya-raj-kushwaha-resume.pdf   Served by the "Download Resume" button
```

## Editing your content

Everything you'd want to change lives in `src/data/`, separate from the UI:

- `profile.ts` — name, role, tagline, summary, quick facts, stats, contact
  links, resume path
- `skills.ts` — skill categories and the items inside each
- `projects.ts` — your project case studies (title, description, highlights,
  tech stack)
- `experience.ts` — the training / education timeline
- `achievements.ts` — certificates
- `nav.ts` — the navbar links

Swap your photo by replacing `src/assets/profile.jpg`, and swap your resume
by replacing `public/aditya-raj-kushwaha-resume.pdf` (keep the same
filename, or update `resumeUrl` in `profile.ts`).

## Notes

- The stats shown in the About section are intentionally conservative and
  map to real, verifiable facts (project count, certificate count). Update
  them in `profile.ts` as your track record grows — avoid inflating numbers
  a recruiter could easily check.
- The Experience section currently shows training + education, since that's
  what's on file. Add a new entry with `type: "Experience"`-style content in
  `experience.ts` the moment you have a role, internship, or freelance
  engagement to show — the timeline UI already supports it.
- Dark mode is the only theme by design, per the brief. If you want a light
  mode later, the color tokens are centralized in `tailwind.config.ts`,
  which makes that a scoped change.
