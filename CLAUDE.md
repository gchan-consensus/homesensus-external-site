# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application for HomeSensus external site, generated and managed through v0.app. The project uses the App Router, TypeScript, and Tailwind CSS v4.

**Important**: This repository is automatically synced with v0.app deployments. Changes made on v0.app are automatically pushed to this repository.

## Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Directory Structure
- `app/`: Next.js App Router directory
  - `layout.tsx`: Root layout with Geist fonts and Analytics
  - `page.tsx`: Homepage assembling all landing page sections
  - `globals.css`: Global Tailwind styles
- `components/`: React components (landing page sections)
  - `Navbar.tsx`, `Hero.tsx`, `PlatformOverview.tsx`, `SolutionOverview.tsx`, `CompetitiveAdv.tsx`, `Banner.tsx`, `AboutUs.tsx`
  - `theme-provider.tsx`: Theme management
- `lib/utils.ts`: Utility functions (cn helper for Tailwind)
- `public/`: Static assets

### Key Technologies
- **Framework**: Next.js 14.2.16 (App Router)
- **UI Components**: Radix UI primitives (shadcn/ui style="new-york")
- **Styling**: Tailwind CSS v4 with CSS variables
- **Fonts**: Geist Sans & Geist Mono
- **Forms**: react-hook-form with Zod validation
- **Charts**: Recharts 2.15.4
- **Analytics**: Vercel Analytics

### Import Aliases
Use `@/` prefix for imports:
- `@/components` → components directory
- `@/lib/utils` → lib/utils.ts
- `@/app` → app directory

### Build Configuration
- ESLint errors ignored during builds (`eslint.ignoreDuringBuilds: true`)
- TypeScript errors ignored during builds (`typescript.ignoreBuildErrors: true`)
- Images are unoptimized (`images.unoptimized: true`)

### Styling Conventions
- Use `cn()` utility from `@/lib/utils` for conditional className merging
- Tailwind config uses neutral base color with CSS variables
- Components use shadcn/ui "new-york" style variant

## v0.app Integration

This project is managed through v0.app. To make changes:
1. Edit on v0.app: https://v0.app/chat/projects/9pFYXqNKyj7
2. Deploy from v0.app interface
3. Changes auto-sync to this repository
4. Vercel auto-deploys from repository

When making local changes, be aware they may be overwritten by v0.app syncs.
