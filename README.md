# Rich Ferguson - Resume Site

A modern, responsive personal resume and portfolio site built with Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui components. Designed for deployment to GitHub Pages at [https://richfergus.github.io/](https://richfergus.github.io/).

## Features

- **Static Site Generation**: Fully static export compatible with GitHub Pages
- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS v4
- **Component-Based UI**: shadcn/ui components for a clean, professional design
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Placeholder Content**: Ready-to-customize structure with placeholder text and images
- **API Integration Ready**: Commented-out code for GitHub and Stack Overflow API integration
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels and semantic HTML throughout

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main resume page
│   └── globals.css         # Global styles with Tailwind directives
├── components/
│   ├── BioCard.tsx         # Biography section with profile and links
│   ├── SkillsCard.tsx      # Technical skills grid
│   ├── ProjectsCard.tsx    # Featured projects showcase
│   ├── StatsCard.tsx       # Developer statistics (GitHub/SO)
│   ├── Footer.tsx          # Footer with resume download
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── github.ts           # GitHub API integration (commented)
│   ├── stackoverflow.ts    # Stack Overflow API integration (commented)
│   └── utils.ts            # Utility functions
├── public/
│   ├── placeholder-profile.svg  # Placeholder profile image
│   └── resume.pdf          # Placeholder resume PDF
├── .env.local.example      # Environment variables template
└── next.config.ts          # Next.js configuration for static export
```

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/richfergus/richfergus.github.io.git
cd richfergus.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Customization

### Update Content

1. **Bio Section** - Edit `components/BioCard.tsx`:
   - Replace placeholder name, tagline, and bio text
   - Update social links (GitHub, LinkedIn, Email, Website)
   - Replace placeholder profile image in `public/`

2. **Skills** - Edit `components/SkillsCard.tsx`:
   - Update the `placeholderSkills` array with your actual skills

3. **Projects** - Edit `components/ProjectsCard.tsx`:
   - Update the `placeholderProjects` array with your portfolio projects
   - Add project titles, descriptions, demo URLs, and GitHub links

4. **Resume PDF** - Replace `public/resume.pdf` with your actual resume

5. **Profile Image** - Replace `public/placeholder-profile.svg` with your photo

### Styling

The site uses Tailwind CSS v4 with shadcn/ui's "new-york" style. To customize:

- Edit `app/globals.css` for global styles and CSS variables
- Modify component classes in individual component files
- Update the theme in `components.json` if needed

### Enable API Integration

To display real GitHub and Stack Overflow stats:

1. **GitHub API**:
   - Create a personal access token at [GitHub Settings](https://github.com/settings/tokens)
   - Copy `.env.local.example` to `.env.local`
   - Add your token: `GITHUB_TOKEN=your_token_here`
   - Uncomment the code in `lib/github.ts`
   - Update `components/StatsCard.tsx` to use the API functions

2. **Stack Overflow API**:
   - Find your user ID from your SO profile URL
   - Add to `.env.local`: `STACKOVERFLOW_USER_ID=your_id_here`
   - Uncomment the code in `lib/stackoverflow.ts`
   - Update `components/StatsCard.tsx` to use the API functions

## Deployment

### Deploy to GitHub Pages

#### Option 1: Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will push the built site to the `gh-pages` branch.

#### Option 2: Automated with GitHub Actions

A GitHub Actions workflow is included in `.github/workflows/deploy.yml`. It will automatically deploy on push to main.

1. Ensure your repository is named `richfergus.github.io`
2. Push your code to the `main` branch
3. GitHub Actions will automatically build and deploy

### Initial Setup for GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Set source to **Deploy from a branch**
4. Select branch: `gh-pages` and folder: `/ (root)`
5. Save and wait for deployment

Your site will be available at [https://richfergus.github.io/](https://richfergus.github.io/)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build static site for production
- `npm run start` - Start production server (for testing)
- `npm run lint` - Run ESLint for code linting
- `npm run export` - Alias for build (creates static export)
- `npm run deploy` - Build and deploy to GitHub Pages

## Tech Stack

- **Framework**: Next.js 15.5.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (Radix UI primitives + Tailwind)
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono
- **Deployment**: GitHub Pages with gh-pages package

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add avatar
npx shadcn@latest add badge
npx shadcn@latest add separator
```

Browse available components at [shadcn/ui](https://ui.shadcn.com/).

## Troubleshooting

### Build Issues

- Ensure `output: 'export'` is set in `next.config.ts`
- Check that `images.unoptimized: true` is enabled for static export
- Verify all API calls are commented out or handled for build time

### Deployment Issues

- Make sure the repository is named `richfergus.github.io`
- Verify GitHub Pages is enabled in repository settings
- Check that the `gh-pages` branch exists and contains the built site
- Wait a few minutes after deployment for changes to appear

### 404 on GitHub Pages

- Ensure `.nojekyll` file is created (handled by deploy script)
- Verify the `basePath` in `next.config.ts` if using a custom domain

## License

This project is open source and available for personal use.

## Contact

Rich Ferguson - [GitHub](https://github.com/richfergus)

Project Link: [https://github.com/richfergus/richfergus.github.io](https://github.com/richfergus/richfergus.github.io)
