# Architecture

## System Overview

Visitor
→ Marketing Website
→ Guided Inquiry Flow
→ API/Server Action
→ PostgreSQL Database
→ Background Email Job
→ Practitioner Dashboard

## Architecture Style
Modular monolith using Next.js, TypeScript, PostgreSQL, Prisma, and feature-based modules.

## Core Domains
- Auth
- Tenancy
- Marketing
- Forms
- Inquiries
- Routing
- Notifications
- Analytics
- Audit
- Verticals
- Modules

# Flow
Public Website
    |
    v
Guided Inquiry Form
    |
    v
Inquiry Service
    |
    +--> Database
    +--> Analytics Event
    +--> Email Job
    +--> Audit Log
    |
    v
Practitioner Dashboard

## Stack Decisions

- Next.js: full-stack React framework for marketing pages, intake flows, dashboards, and API/server actions.
- TypeScript: type safety across UI, business logic, and data models.
- Tailwind CSS: fast custom styling with reusable design tokens.
- shadcn/ui: polished, accessible components without building every UI primitive from scratch.
- PostgreSQL: relational data model for tenants, users, forms, inquiries, events, and analytics.
- Prisma: type-safe ORM and migrations for faster database development.
- Auth.js: authentication and session management with portfolio-level backend visibility.
- Postmark: reliable transactional email for inquiry notifications and confirmations.
- Inngest: background jobs for email sending, retries, follow-ups, and async workflows.
- Vercel: deployment and preview environments for the Next.js application.
