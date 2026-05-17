# Vikas Sharma — Portfolio

A personal portfolio website for **Vikas Sharma**, Senior .NET Developer & System Analyst with 17+ years of experience. Built with a minimalist, terminal-inspired aesthetic.

🔗 **Live site:** [vikassharma.dev](https://vikassharma.dev) *(update with your actual URL)*

---

## Features

- Single-page layout with smooth scroll navigation and active section tracking
- Expandable experience cards covering 11 positions (2006–2023)
- Categorized skills section with tech badges
- Contact form with PostgreSQL persistence via Prisma
- Dark / light mode toggle (dark by default)
- Fully responsive — mobile hamburger menu included
- Framer Motion animations (FadeIn, SlideIn, Stagger)
- Live clock in footer + scroll-to-top button
- SEO-ready: OpenGraph metadata, robots.ts, sitemap.ts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom properties |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion |
| Database | PostgreSQL via Prisma ORM |
| Fonts | DM Sans · Plus Jakarta Sans · JetBrains Mono |
| Package Manager | Yarn |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- PostgreSQL database

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/vikas-sharma-portfolio.git
cd vikas-sharma-portfolio/nextjs_space

# Install dependencies
yarn install

# Copy environment variables
cp .env.example .env
# Fill in DATABASE_URL and any other required values in .env

# Run database migrations
yarn prisma migrate deploy

# Start the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env` file in `nextjs_space/` based on `.env.example`:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_DIST_DIR` | *(optional)* Custom Next.js build output directory |
| `NEXT_OUTPUT_MODE` | *(optional)* Set to `standalone` for Docker/server deployments |

---

## Project Structure

```
nextjs_space/
├── app/
│   ├── _components/
│   │   └── portfolio-client.tsx   # Entire SPA UI
│   ├── api/
│   │   └── contact/route.ts       # Contact form API endpoint
│   ├── globals.css                # CSS design tokens (light/dark)
│   ├── layout.tsx                 # Root layout, fonts, metadata, providers
│   └── page.tsx                   # Server component entry point
├── components/
│   ├── layouts/                   # Container, Section, PageHeader, AppShell
│   ├── ui/                        # shadcn/ui components + animate.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── prisma/
│   └── schema.prisma              # ContactSubmission model
├── public/                        # Static assets
├── scripts/                       # DB seeding scripts
├── STYLE_GUIDE.md                 # Design system documentation
└── next.config.js
```

---

## Design System

- **Primary color:** Emerald green `hsl(160 84% 39%)`
- **Background:** Near-black (dark) / white (light)
- **Typography:** JetBrains Mono (body) · Plus Jakarta Sans (headings)
- **Layout:** Centered single-column, max-width 800px
- **Spacing:** 8px grid via CSS custom property tokens

See [`STYLE_GUIDE.md`](./STYLE_GUIDE.md) for the full design token reference.

---

## Database

The contact form saves submissions to a `ContactSubmission` table in PostgreSQL:

```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

Run migrations with:

```bash
yarn prisma migrate deploy
```

---

## Deployment

The app is configured for flexible deployment via environment variables:

- **Vercel / Netlify:** Set `DATABASE_URL` in the dashboard and deploy normally.
- **Standalone server:** Set `NEXT_OUTPUT_MODE=standalone` and run the built output.
- **Custom dist dir:** Set `NEXT_DIST_DIR` to override the default `.next` folder.

---

## License

MIT — feel free to use this as a template for your own portfolio.

---

*Built with precision.*
