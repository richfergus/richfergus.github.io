# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with TypeScript, Tailwind CSS v4, and shadcn/ui components. The project uses Turbopack for fast builds and development.

## Essential Commands

```bash
# Development
npm run dev          # Start development server with Turbopack on http://localhost:3000

# Build & Production
npm run build        # Build for production with Turbopack
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code linting
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15.5.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (Radix UI primitives + Tailwind)
- **React**: Version 19.1.0

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font optimization (Geist font)
  - `globals.css` - Global styles with Tailwind directives and CSS variables
  - `page.tsx` - Home page component
- `/components/ui` - shadcn/ui components (button, card, dialog, dropdown-menu, input, label, navigation-menu, tabs)
- `/lib` - Utility functions including `cn()` for className merging

### Component Management
- **shadcn/ui Configuration**: Defined in `components.json`
  - Style: new-york
  - Icons: lucide-react
  - Path aliases: `@/` prefix for imports
- **Adding Components**: `npx shadcn@latest add [component-name]`

### Important Configuration Files
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration with `@/*` path alias
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration (if exists)

### Development Workflow
1. UI components are managed via shadcn/ui CLI
2. Components are copied into the project (not installed as dependencies)
3. All components use Tailwind CSS classes and CSS variables for theming
4. Project uses ESLint for code quality checks

## Claude rules
1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the [todo.md](http://todo.md/) file with a summary of the changes you made and any other relevant information.