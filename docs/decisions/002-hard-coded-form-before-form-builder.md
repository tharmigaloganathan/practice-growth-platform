# 002 — Hard-Coded Form Before Form Builder

## Decision
The MVP will start with a code-based wellness inquiry form before building a fully dynamic form renderer or form builder.

## Why
A fully configurable form builder adds significant complexity: schema rendering, conditional logic, validation, versioning, admin editing, and response storage. Starting with one concrete wellness inquiry flow lets the product prove its core workflow first.

## Alternatives Considered
- Build generic form builder first: more flexible, but too much complexity before validating the product workflow.
- Use static HTML form only: fastest, but does not prepare the architecture for modular verticals.
- Use third-party form embed: low effort, but weakens the system-design value of the project.

## Consequences
- The first version is faster to build and easier to test.
- The wellness form schema still creates a path toward future dynamic rendering.
- Some form logic may be refactored later when the form renderer is introduced.
