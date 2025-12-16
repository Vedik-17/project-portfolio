# Mendu Vedik Reddy - Portfolio Website

A modern, interactive, single-page developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Fully Responsive Design**: Optimized for mobile and desktop devices
- **Dark/Light Mode Toggle**: Theme switcher with persistent preferences
- **Smooth Scrolling**: Seamless navigation between sections
- **Animated Components**: Beautiful animations powered by Framer Motion
- **Interactive Project Cards**: Hover effects and detailed project information
- **Working Contact Form**: Integrated with Formspree for form submissions
- **SEO Optimized**: Meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Introduction with CTA buttons
2. **About Me**: Professional summary and education details
3. **Skills**: Categorized technical skills with animated badges
4. **Projects**: Showcase of 6 projects with links to GitHub repositories
5. **Contact**: Working contact form and social links
6. **Footer**: Copyright and social media links

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type-safe code
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment on Vercel

### Quick Deploy

1. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect the Vite configuration
   - Click "Deploy"

### Manual Configuration (if needed)

If you need to configure manually:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Contact Form Setup

The contact form uses Formspree. To set it up:

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint ID
5. Replace `YOUR_FORM_ID` in `src/components/Contact.tsx` with your actual form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Resume Download

To enable the resume download feature:

1. Add your resume PDF file to the `public` directory
2. Name it `resume.pdf`, or update the link in `src/components/Hero.tsx`:
   ```jsx
   <a href="/resume.pdf" download>
   ```

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/Hero.tsx`: Name and tagline
- `src/components/About.tsx`: Bio and education
- `src/components/Contact.tsx`: Email address
- `src/components/Footer.tsx`: Copyright information
- `index.html`: Meta tags and SEO information

### Projects

Edit the projects array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    techStack: ['Tech1', 'Tech2'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com', // optional
  },
  // Add more projects...
];
```

### Skills

Modify the skills in `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Category Name',
    icon: IconComponent,
    skills: ['Skill1', 'Skill2'],
    color: 'blue', // blue, green, purple, orange
  },
  // Add more categories...
];
```

### Color Scheme

The website uses a professional blue accent color. To change it:

1. Open `tailwind.config.js`
2. Add custom colors in the `extend` section
3. Replace `blue-*` classes throughout the components

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/         # React context
│   │   └── ThemeContext.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.ts       # Vite configuration
```

## License

This project is open source and available under the MIT License.

## Contact

Mendu Vedik Reddy
- GitHub: [@Vedik-17](https://github.com/Vedik-17)
- Email: vedikreddy@example.com
