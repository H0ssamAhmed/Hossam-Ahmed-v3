# Portfolio Website

Modern, responsive portfolio built with Next.js 14, featuring project showcases, blog system, and dark/light theme support.

## ✨ Features

- 🎨 Dark/Light theme with persistence
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 14
- ♿ WCAG AA accessible
- 📊 Project showcase with interactive modals
- 📝 Blog/articles system with dynamic routing
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── components/         # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ThemeProvider.js
│   │   ├── ProjectCard.js
│   │   └── ProjectModal.js
│   ├── data/              # Static data
│   │   ├── projects.js
│   │   └── articles.js
│   ├── projects/          # Projects page
│   ├── articles/          # Articles pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── public/                # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Home Page**: Edit `app/page.js` to update your name, bio, and skills
2. **Projects**: Modify `app/data/projects.js` to add/edit your projects
3. **Articles**: Update `app/data/articles.js` with your blog posts
4. **Contact Links**: Update social links in `app/components/Footer.js` and `app/page.js`

### Theme Colors

Edit `app/globals.css` and `tailwind.config.js` to customize colors:

```css
:root {
  --bg-primary: #fefefe;
  --bg-secondary: #f5f3f0;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --accent: #cc6b49;
  --border: #e0ddd8;
}
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Other Platforms

This Next.js application can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any platform supporting Node.js

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** TailwindCSS
- **Animation:** Framer Motion
- **Fonts:** Google Fonts (Crimson Pro, Inter)

## 📝 Adding Content

### Adding a New Project

Edit `app/data/projects.js`:

```javascript
{
  id: 7,
  title: 'Your Project Name',
  description: 'Short description',
  icon: '🚀',
  tags: ['React', 'Node.js'],
  overview: 'Detailed overview...',
  objective: 'Project objective...',
  features: ['Feature 1', 'Feature 2'],
  skills: ['Skill 1', 'Skill 2'],
  gallery: ['🎨', '💡'],
  results: [
    { value: '100%', label: 'Success rate' }
  ]
}
```

### Adding a New Article

Edit `app/data/articles.js`:

```javascript
{
  id: 7,
  title: 'Your Article Title',
  slug: 'your-article-slug',
  excerpt: 'Brief summary...',
  content: `<h2>Section</h2><p>Content...</p>`,
  date: 'January 8, 2026',
  category: 'Development',
  readTime: '5 min read',
}
```

## 🎯 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Fully responsive on all devices

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatible
- Proper ARIA labels

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: hello@example.com

---

**Built with ❤️ using Next.js**

