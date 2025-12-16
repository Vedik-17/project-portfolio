# Quick Start Guide

Get your portfolio website up and running in minutes!

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:5173`

## Before Deploying

### 1. Update Contact Form

In `src/components/Contact.tsx`, replace `YOUR_FORM_ID`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Get your form ID from [formspree.io](https://formspree.io) (free account).

### 2. Add Your Resume

- Place your resume as `resume.pdf` in the `public` folder
- Or update the path in `src/components/Hero.tsx`

### 3. Customize Content (Optional)

Update personal information in:
- `src/components/Hero.tsx` - Name and tagline
- `src/components/About.tsx` - Bio and education
- `src/components/Contact.tsx` - Email address
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills

## Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Done!**
   - Your site will be live in 1-2 minutes
   - URL: `https://your-project.vercel.app`

## Key Features

- Dark/Light mode toggle (top right)
- Smooth scrolling navigation
- Responsive design (mobile + desktop)
- Animated sections
- Working contact form
- Project showcase with GitHub links

## Folder Structure

```
src/
├── components/     # All UI components
├── context/        # Theme context for dark/light mode
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Need Help?

- Full documentation: See `README.md`
- Deployment guide: See `DEPLOYMENT.md`
- Build errors? Run `npm run build` to check locally

## Quick Tips

1. **Theme Toggle**: Click sun/moon icon in navbar
2. **Sections**: Click navbar items for smooth scrolling
3. **Mobile Menu**: Hamburger icon on mobile devices
4. **Auto Deploy**: Push to GitHub → Vercel auto-deploys

## Common Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

That's it! Your portfolio is ready to go live.
