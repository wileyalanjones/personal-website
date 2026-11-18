# Wiley Jones — Personal Website

My personal portfolio site: a one-page overview of my experience, projects, skills, and resume, with a way to get in touch.

<!-- Add a live URL and a screenshot, e.g.:
**Live site:** https://your-domain.com
![Screenshot](public/banner_image.png)
-->

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router) with [React](https://react.dev) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) for animations
- [React Icons](https://react-icons.github.io/react-icons/) for icons

## Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. Changes hot-reload as you edit.

## Scripts

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `npm run dev`      | Start the development server      |
| `npm run build`    | Create a production build         |
| `npm start`        | Serve the production build        |
| `npm run lint`     | Run ESLint                        |
| `npm run lint:fix` | Run ESLint and auto-fix issues    |

## Project Structure

```
app/
  components/   # Page sections (Hero, Experience, Projects, Skills,
                #   Resume, Contact, ...) and shared UI (Navbar, Footer,
                #   Reveal, TiltCard, modals)
  content.ts    # Site copy and data
  layout.tsx    # Root layout
  page.tsx      # Home page, composes the sections
  globals.css   # Global styles and Tailwind setup
public/         # Images, icons, and the resume PDF
```

## Updating Content

Most text and data lives in `app/content.ts`, so you can change experience, projects, and skills without touching the components. Images and the resume PDF are in `public/`.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushes to `main` trigger a new deployment.

## License

All rights reserved. The code is public for reference, but the content, images, and resume are personal and may not be reused.
