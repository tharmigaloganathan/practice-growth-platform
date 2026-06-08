# 001 — Modular Monolith

## Decision
The Practice Growth Platform will start as a modular monolith using Next.js, TypeScript, PostgreSQL, Prisma, and feature-based modules.

## Why
A modular monolith keeps deployment and local development simple while still allowing the codebase to be organized around business domains such as forms, inquiries, notifications, analytics, tenancy, and vertical-specific configuration.

## Alternatives Considered
- Microservices: too much operational complexity for the MVP.
- Separate app per client: simpler at first, but harder to maintain and less reusable.
- No modular boundaries: faster initially, but harder to adapt across industries later.

## Consequences
- The app can move quickly without infrastructure overhead.
- Clear feature boundaries are still needed to prevent the codebase from becoming tangled.
- Future modules can be extracted into services if scale or complexity requires it.
