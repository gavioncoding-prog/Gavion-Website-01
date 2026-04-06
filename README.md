# Gavion Group — website

Next.js (App Router) marketing site: MDX case studies and blog, dark/light theme, SEO, RSS, and server actions for contact/careers (optional [Resend](https://resend.com) email).

## Preview locally

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Development server       |
| `npm run build`   | Production build         |
| `npm run start`   | Serve production build   |
| `npm run lint`    | ESLint                   |
| `npm run typecheck` | TypeScript (no emit)   |

## Environment

See [`.env.example`](./.env.example). For production, set at least `NEXT_PUBLIC_SITE_URL` and `RESEND_API_KEY` (plus verified `RESEND_FROM_EMAIL`) so forms can email your team.

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node host. After deploy, your **shareable preview URL** is the hostname Vercel assigns (e.g. `https://your-project.vercel.app` or each Preview Deployment link in the Vercel dashboard).
