# ManaCamp Marketing Site

A dark, product-aligned marketing site for ManaCamp, a modern community platform for channels, DMs, voice, video, sessions, and bots.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Pages

- `/` — Home: hero, product highlights, Windows download, iOS preview, CTA
- `/download` — Branded download page that resolves the latest Windows installer from the desktop update feed
- `/support` — Support center with FAQ accordion and contact form
- `/privacy` — Dedicated privacy policy
- `/terms` — Terms & Conditions

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Deployment

This project is configured for [Vercel](https://vercel.com/) deployment.

- Production deploys should come from pushes to `main`
- Preview deploys are created automatically for non-`main` branches and pull requests
- Custom domains can be attached in the Vercel project dashboard once DNS is pointed at Vercel

## Brand Notes

- Product name: `ManaCamp`
- Site status: under construction / active preview
- Attribution: `By DezolveLabs · https://dezolvelabs.com`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dezolve/manacamp-site)

