# Stephen Burkot Portfolio

Personal portfolio website built with Astro, Tailwind CSS, and Decap CMS.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Getting Started

1. **Install dependencies**

   ```bash
   cd portfolio
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**

   ```bash
   npm run preview
   ```

## Project Structure

```
portfolio/
├── src/
│   ├── content/
│   │   ├── projects/          # Markdown files for each project
│   │   └── publications/      # JSON files for publications
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── projects/          # Projects listing and detail pages
│   │   ├── publications.astro # Publications page
│   │   ├── resume.astro       # Resume page
│   │   └── about.astro        # About page
│   ├── components/            # Reusable Astro components
│   ├── layouts/               # Page layouts
│   └── styles/                # Global styles
├── public/
│   ├── admin/                 # Decap CMS files
│   ├── images/                # Static images
│   └── resume.pdf             # Resume PDF (add your own)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Content Management

### Using Decap CMS

After deploying to Netlify:

1. Go to `yoursite.com/admin`
2. Log in with GitHub
3. Create and edit projects through the web interface

### Manual Content Editing

**Projects:** Add Markdown files to `src/content/projects/` with this frontmatter:

```yaml
---
title: "Project Title"
description: "Brief description"
date: 2024-01-15
tags:
  - data-viz
  - electronics
coverImage: "./images/your-image.jpg"
images:
  - "./images/gallery-1.jpg"
  - "./images/gallery-2.jpg"
featured: true
draft: false
---

Your project content here...
```

**Publications:** Add JSON files to `src/content/publications/`:

```json
{
  "title": "Publication Title",
  "authors": "Author, A., Author, B.",
  "journal": "Journal Name",
  "year": 2024,
  "link": "https://example.com",
  "doi": "10.1234/example"
}
```

## Deployment to Netlify

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**

   - Log in to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

3. **Enable Identity (for CMS)**

   - Go to Site settings → Identity
   - Click "Enable Identity"
   - Under Registration, select "Invite only"
   - Under External providers, add GitHub
   - Go to Identity → Invite users and invite yourself

4. **Enable Git Gateway**

   - Go to Site settings → Identity → Services
   - Enable Git Gateway

5. **Custom Domain**

   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records at your domain registrar:
     - CNAME for `www` → `yoursite.netlify.app`
     - A record for root → Netlify's IP (or use Netlify DNS)

## Adding Your Resume

Replace the placeholder with your actual resume:

1. Add your resume PDF to `public/resume.pdf`
2. The resume page will automatically display it

## Customization

### Colors

Edit `tailwind.config.mjs` to change the color palette:

```js
colors: {
  tangerine: {
    DEFAULT: '#FFA07A',  // Primary accent
    tint: '#FFF5F0',
  },
  seagreen: {
    DEFAULT: '#3CB371',  // Secondary accent
    tint: '#F0FFF5',
  },
}
```

### Typography

The site uses Inter font by default. To change it, update:
- `tailwind.config.mjs` - fontFamily configuration
- `src/layouts/BaseLayout.astro` - Google Fonts link

## Available Tags

The following tags are pre-configured in the CMS:

- `data-viz` - Data visualization projects
- `electronics` - Raspberry Pi, circuits, IoT
- `woodworking` - Furniture, frames, builds
- `photography` - Photo essays and galleries
- `global-health` - Professional/research projects
- `software` - Code projects, tools
- `3d-printing` - 3D printed objects

To add more tags, edit `public/admin/config.yml`.
