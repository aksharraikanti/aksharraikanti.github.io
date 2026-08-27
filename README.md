# Personal Website — Akshar Raikanti

My personal portfolio site: about, experience, skills, and projects.

Check it out at https://aksharraikanti.github.io/

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript, statically exported
- Tailwind CSS
- Framer Motion (scroll animations), `next-themes` (dark/light mode), `cmdk` (command palette), `react-three-fiber` (3D hero)
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to out/
```

Content (experience, projects, skills, site info) lives in `content/*.ts` — edit those files rather than the components to update what's shown on the site.
