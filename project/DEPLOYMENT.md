# Deployment Guide - Vercel

This guide will walk you through deploying your portfolio website to Vercel.

## Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- A Vercel account (free)

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Create a GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it (e.g., "portfolio" or "vedik-portfolio")
   - Make it public or private (your choice)
   - Click "Create repository"

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find your portfolio repository
   - Click "Import"

3. **Configure Your Project**:
   - Vercel will automatically detect that it's a Vite project
   - The default settings should work:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click "Deploy"

4. **Wait for Deployment**:
   - Vercel will now build and deploy your site
   - This usually takes 1-2 minutes
   - You'll see a success screen with your live URL

5. **Your Site is Live!**:
   - Your portfolio will be available at a URL like:
     `https://your-project-name.vercel.app`
   - You can view it immediately by clicking the preview

### 3. Configure Contact Form

To make the contact form work:

1. **Sign up for Formspree**:
   - Go to [formspree.io](https://formspree.io)
   - Sign up for a free account
   - Click "New Form"
   - Name it "Portfolio Contact Form"
   - Copy the form endpoint (e.g., `https://formspree.io/f/abc123xyz`)

2. **Update Your Code**:
   - Open `src/components/Contact.tsx`
   - Find line with `'https://formspree.io/f/YOUR_FORM_ID'`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Save the file

3. **Push the Update**:
   ```bash
   git add .
   git commit -m "Add Formspree form ID"
   git push
   ```

4. **Automatic Redeployment**:
   - Vercel automatically redeploys when you push to GitHub
   - Your contact form will now work!

### 4. Add Your Resume

1. **Prepare Your Resume**:
   - Save your resume as `resume.pdf`
   - Place it in the `public` folder

2. **Push to GitHub**:
   ```bash
   git add public/resume.pdf
   git commit -m "Add resume PDF"
   git push
   ```

3. **Automatic Redeployment**:
   - Vercel will redeploy with your resume
   - The "Download Resume" button will now work

### 5. Custom Domain (Optional)

To use your own domain (e.g., vedikreddy.com):

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your domain name
   - Click "Add"

2. **Configure DNS**:
   - Follow Vercel's instructions to update your domain's DNS settings
   - This varies by domain provider (GoDaddy, Namecheap, etc.)

3. **Wait for DNS Propagation**:
   - Can take up to 48 hours
   - Usually completes in a few hours

## Continuous Deployment

Vercel automatically redeploys your site whenever you push to GitHub:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Vercel automatically rebuilds and deploys
4. Changes are live in 1-2 minutes

## Troubleshooting

### Build Failed

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Contact Form Not Working

- Verify you've replaced `YOUR_FORM_ID` with your actual Formspree ID
- Check that you've pushed the changes to GitHub
- Test the form after Vercel redeploys

### Dark Mode Not Working

- Clear your browser cache
- Check browser console for errors
- Verify `tailwind.config.js` has `darkMode: 'class'`

### Images Not Loading

- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/image.png`)
- Check file names match exactly (case-sensitive)

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add your variables
5. Redeploy the project

## Performance Tips

1. **Optimize Images**:
   - Compress images before uploading
   - Use WebP format when possible

2. **Enable Analytics**:
   - In Vercel dashboard, go to "Analytics"
   - Enable free Vercel Analytics
   - Track visitors and performance

3. **Monitor Performance**:
   - Use Vercel's built-in performance metrics
   - Check Lighthouse scores in Chrome DevTools

## Getting Help

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: support@vercel.com
- **Formspree Help**: [help.formspree.io](https://help.formspree.io)

## Summary

1. Push code to GitHub
2. Import to Vercel
3. Deploy (automatic)
4. Configure Formspree
5. Add resume
6. Optional: Custom domain

Your portfolio is now live and will automatically update when you push changes!
