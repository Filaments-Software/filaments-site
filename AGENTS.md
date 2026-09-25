# AGENTS.md

## Project Overview

Next.js 15 App Router site (T3 stack via create-t3-app). TypeScript, Tailwind CSS 3,
tRPC v11 RC, React Query v5, Zod. ESM (`"type": "module"`). Package manager: npm.
Deployed on Vercel.

This is a small brochure/marketing site for an indie game studio (~15 source files in `src/`).

## Build / Lint / Test Commands

```bash
npm run dev            # Dev server (Turbopack)
npm run build          # Production build
npm run start          # Production server
npm run preview        # Build + start (local preview)
npm run lint           # ESLint via Next.js
npm run lint:fix       # ESLint with auto-fix
npm run typecheck      # tsc --noEmit
npm run check          # Lint + typecheck combined
npm run format:check   # Prettier check
npm run format:write   # Prettier auto-format
```

### Tests

No test framework is configured. No test files exist. If adding tests, Vitest is the
recommended pairing for the T3 stack.

### Verifying Changes

Always run before committing:

```bash
npm run check          # lint + typecheck in one command
npm run format:check   # ensure formatting is correct
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── layout.tsx        # Root layout (font, footer, TRPCProvider)
│   ├── page.tsx          # Home page
│   ├── about/page.tsx    # About page
│   ├── _components/      # Shared page-level components (underscore = excluded from routing)
│   └── api/trpc/[trpc]/route.ts  # tRPC HTTP handler
├── env.js                # Environment variable validation (Zod + @t3-oss/env-nextjs)
├── server/api/           # tRPC server-side code
│   ├── trpc.ts           # tRPC init, context, middleware, procedures
│   ├── root.ts           # Root router, AppRouter type, createCaller
│   └── routers/          # Individual tRPC routers
├── styles/               # Global CSS + Tailwind directives
└── trpc/                 # Client + server tRPC helpers
    ├── query-client.ts   # React Query client factory
    ├── react.tsx         # Client-side tRPC provider + hooks
    └── server.ts         # Server-side tRPC caller (RSC)
```

## Code Style Guidelines

### TypeScript

- **Strict mode** is ON with `noUncheckedIndexedAccess: true`.
- **Never use `any`** — zero instances exist in the codebase; keep it that way.
- Use `interface` for object shapes. Use `type` only for aliases and inferred types.
- Use the `satisfies` keyword where appropriate (see `tailwind.config.ts`).
- Path alias: `@/*` maps to `./src/*`. Always use `@/` for internal imports.

### Imports

Order (not enforced by plugin, but follow consistently):

1. Side-effect imports (`import "server-only"`, `import "@/styles/globals.css"`)
2. Third-party packages (`next/image`, `react`, `@trpc/*`, `zod`)
3. Internal `@/` absolute imports (`@/server/api/root`, `@/trpc/react`)
4. Relative imports (`./query-client`)

Rules enforced by ESLint:

- **Inline type imports**: `import { type Foo }` NOT `import type { Foo }`
- Unused variables prefixed with `_` are allowed; all others are warned.
- Named imports are preferred. Default imports only for Next.js conventions
  (`Image`, `Link`, `SuperJSON`).

### Components

- **Functional components only**. No class components. No `React.FC`.
- Use plain function declarations: `export default function MyComponent() { ... }`
- **Server Components by default** (App Router convention). Only add `"use client"`
  when hooks or browser APIs are needed.
- Props: define with `interface`, e.g. `interface MyProps { ... }`.
- Use `React.lazy` + `Suspense` for client component code-splitting where beneficial.
- Use `useSuspenseQuery` over `useQuery` for tRPC data fetching in client components.

### Naming Conventions

| What                  | Convention    | Example                          |
| --------------------- | ------------- | -------------------------------- |
| React components      | PascalCase    | `FilamentCard.tsx`, `AboutPage`  |
| Non-component files   | kebab-case    | `query-client.ts`                |
| Route files           | Next.js conv. | `page.tsx`, `layout.tsx`         |
| Private directories   | `_` prefix    | `_components/`                   |
| Functions / variables | camelCase     | `getStatusColor`, `createCaller` |
| Exported types        | PascalCase    | `AppRouter`, `RouterInputs`      |
| Constants / configs   | camelCase     | `appRouter`, `nextConfig`        |

### Styling

- **Tailwind CSS utility classes only** — no CSS modules, styled-components, or CSS-in-JS.
- Tailwind classes are auto-sorted by `prettier-plugin-tailwindcss`.
- Custom font: Montserrat (loaded via `next/font/google`).
- Color palette: dark blue gradients (`#071e3d`, `#1e3a8a`, `#0f172a`, `#12315a`),
  glassmorphism (`bg-white/5`), blue-400 accents.
- Mobile-first responsive design using Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`).
- Traditional CSS files exist only in `src/styles/` for global rules and performance hints.

### Error Handling

- **Zod** validates all inputs: environment variables via `@t3-oss/env-nextjs`,
  tRPC procedure inputs via Zod schemas.
- tRPC error formatter flattens ZodErrors into responses.
- Errors log to console in development only (`env.NODE_ENV === "development"`).
- No manual try/catch — errors flow through tRPC and React Query error boundaries.
- Use nullish coalescing defensively: `value ?? fallback`.

### State Management

- **Server state**: tRPC + React Query. Server components use `createCaller` /
  `createHydrationHelpers`. Client components use `api.*.useSuspenseQuery()`.
- **Local state**: `useState` for simple UI state. No global state library.
- React Query config: 1-minute stale time, 5-minute GC time.

### Formatting (Prettier)

Defaults apply (no overrides in config):

- Double quotes, semicolons, 2-space indent, 80-char print width, trailing commas.
- `prettier-plugin-tailwindcss` auto-sorts Tailwind classes.

### ESLint

Config: `.eslintrc.cjs` (CommonJS format — required by ESLint 8).
Extends `next/core-web-vitals` + `@typescript-eslint/recommended-type-checked` +
`@typescript-eslint/stylistic-type-checked`.

Notable rules:

- `array-type`: off (both `T[]` and `Array<T>` allowed)
- `consistent-type-definitions`: off (convention is `interface`, but not enforced)
- `consistent-type-imports`: warn (inline style required)
- `no-unused-vars`: warn (underscore prefix `_` ignored)
- `require-await`: off
- `no-misused-promises`: on, but `checksVoidReturn.attributes` is false

### Environment Variables

Validated in `src/env.js` using `@t3-oss/env-nextjs` with Zod schemas.
Add new env vars there — never read `process.env` directly elsewhere.
See `.env.example` for required variables.
