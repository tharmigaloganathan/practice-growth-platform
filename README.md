# Practice Growth Platform

A modular client-acquisition and onboarding platform for wellness practices.

This project is designed to help solo wellness professionals turn website visitors into structured, qualified inquiries through a conversion-focused website, guided intake flow, practitioner dashboard, analytics, and practice-management handoff.

## MVP Scope

- Marketing website shell
- Guided inquiry flow
- Inquiry management dashboard
- Modular architecture for future components
- Future support for analytics, notifications, and practice-management handoff

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- PostgreSQL
- Prisma
- Auth.js
- Postmark
- Inngest
- Vercel

## Architecture

The project is structured as a modular monolith, with feature-based domains for forms, inquiries, tenancy, notifications, analytics, audit logging, niche-specific configuration, and future plug-in modules.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
