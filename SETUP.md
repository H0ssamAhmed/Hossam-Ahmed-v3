# Portfolio Setup Instructions

Welcome! Follow these steps to get your portfolio up and running.

## 🚀 Quick Start

### 1. Install Dependencies

Navigate to the project folder and install dependencies:

```bash
cd portfolio-nextjs
npm install
```

This will install:
- Next.js 14
- React 18
- TailwindCSS
- Framer Motion
- And other necessary packages

### 2. Run the Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

## 🎨 Customization Guide

### Step 1: Update Personal Information

#### Home Page (`app/page.js`)
- Line 32: Change "Your Name" to your actual name
- Line 35-36: Update your bio/description
- Lines 52-55: Update your about text
- Lines 135-165: Update contact links (GitHub, LinkedIn, Email)

#### Footer (`app/components/Footer.js`)
- Lines 7-10: Update social media links

### Step 2: Add Your Projects

Edit `app/data/projects.js`:

1. You can modify the existing 6 sample projects
2. Or add new projects following this structure:

```javascript
{
  id: 7,  // Unique ID
  title: 'Your Project Name',
  description: 'One-line description for card',
  icon: '🚀',  // Emoji icon
  tags: ['React', 'Node.js', 'MongoDB'],
  overview: 'Detailed project overview...',
  objective: 'What problem does it solve?',
  features: [
    'Feature 1',
    'Feature 2',
    // Add more features
  ],
  skills: ['React', 'TypeScript', 'AWS'],
  gallery: ['🎨', '💡', '📱', '🚀'],
  results: [
    { value: '1000+', label: 'Users' },
    { value: '99%', label: 'Uptime' }
  ]
}
```

### Step 3: Add Your Articles/Blog Posts

Edit `app/data/articles.js`:

```javascript
{
  id: 7,
  title: 'Your Article Title',
  slug: 'your-article-slug',  // Used in URL
  excerpt: 'Brief 1-2 sentence summary',
  content: `
    <h2>Introduction</h2>
    <p>Your content here...</p>
    <h2>Section Title</h2>
    <p>More content...</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  `,
  date: 'January 8, 2026',
  category: 'Development',  // or 'CSS', 'Performance', etc.
  readTime: '5 min read',
}
```

### Step 4: Customize Colors (Optional)

Edit `app/globals.css` (lines 10-24):

```css
:root {
  --accent: #cc6b49;  /* Main accent color */
  --bg-primary: #fefefe;
  --text-primary: #1a1a1a;
  /* etc... */
}

.dark {
  --accent: #e89b7e;  /* Accent for dark mode */
  /* etc... */
}
```

### Step 5: Update Site Metadata

Edit `app/layout.js` (lines 6-9):

```javascript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your custom description',
  keywords: ['your', 'keywords'],
}
```

## 🖼️ Adding Images (Optional)

Currently, the portfolio uses emoji icons for simplicity. To use real images:

1. Add images to `public/images/`
2. Update project gallery:
```javascript
gallery: ['/images/project1-1.jpg', '/images/project1-2.jpg']
```
3. In ProjectModal.js, replace the emoji display with:
```jsx
<img src={item} alt="Project screenshot" />
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your site will be live in minutes.

## 🔧 Troubleshooting

### Port 3000 is already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
npm run dev -- -p 3001
```

### Styles not updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Module not found errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## ✅ Checklist Before Deployment

- [ ] Updated your name and bio
- [ ] Added your projects
- [ ] Added your articles
- [ ] Updated social media links
- [ ] Updated contact email
- [ ] Tested dark/light theme
- [ ] Tested on mobile devices
- [ ] Checked all pages work correctly
- [ ] Updated meta tags in layout.js

## 🎉 You're All Set!

Your portfolio is ready to showcase your work to the world. Good luck!

---

Need help? Check the README.md for more detailed information.

