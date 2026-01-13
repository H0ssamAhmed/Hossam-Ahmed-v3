# Advanced Next.js Portfolio - Software Development Life Cycle Documentation

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Requirements Analysis](#requirements-analysis)
3. [System Design](#system-design)
4. [User Stories](#user-stories)
5. [Technical Specifications](#technical-specifications)
6. [Database Schema](#database-schema)
7. [API Documentation](#api-documentation)
8. [Implementation Guide](#implementation-guide)
9. [Testing Strategy](#testing-strategy)
10. [Deployment Plan](#deployment-plan)

---

## 1. PROJECT OVERVIEW

### 1.1 Executive Summary

A modern, full-stack portfolio website built with Next.js 14, featuring dynamic routing, project showcases with modal galleries, a blog system, and dark/light theme support.

### 1.2 Project Goals

- Create a professional portfolio platform
- Showcase projects with detailed case studies
- Implement a blog/article system
- Provide excellent UX with smooth animations
- Support accessibility and SEO best practices

### 1.3 Success Metrics

- Page load time < 2 seconds
- Lighthouse score > 90 for all categories
- Mobile responsive on all devices
- WCAG 2.1 AA compliance

### 1.4 Technology Stack

- **Frontend:** Next.js 14 (App Router), React 18, TailwindCSS
- **Animation:** Framer Motion
- **Styling:** CSS Variables, TailwindCSS
- **Deployment:** Vercel
- **Version Control:** Git/GitHub

---

## 2. REQUIREMENTS ANALYSIS

### 2.1 Functional Requirements

#### FR-1: Navigation System

- **FR-1.1** Sticky navigation bar with logo and menu items
- **FR-1.2** Dark/light theme toggle with persistence
- **FR-1.3** Smooth scroll to sections
- **FR-1.4** Mobile responsive hamburger menu

#### FR-2: Home Page

- **FR-2.1** Hero section with headline and CTA buttons
- **FR-2.2** About section with skills grid
- **FR-2.3** Featured projects (3 cards)
- **FR-2.4** Contact section with social links

#### FR-3: Projects System

- **FR-3.1** Projects listing page showing all projects
- **FR-3.2** Project cards with hover effects
- **FR-3.3** Project modal with detailed information
- **FR-3.4** Gallery slider within modal
- **FR-3.5** Skills/technologies tags
- **FR-3.6** Features list
- **FR-3.7** Results/metrics display

#### FR-4: Articles/Blog System

- **FR-4.1** Articles listing page
- **FR-4.2** Individual article pages with dynamic routing
- **FR-4.3** Article metadata (date, category, read time)
- **FR-4.4** Related articles suggestions
- **FR-4.5** Article categories and filtering

#### FR-5: Theme System

- **FR-5.1** Light and dark mode support
- **FR-5.2** Theme persistence using localStorage
- **FR-5.3** Smooth transitions between themes
- **FR-5.4** System preference detection

### 2.2 Non-Functional Requirements

#### NFR-1: Performance

- Initial page load < 2 seconds
- Time to interactive < 3 seconds
- First Contentful Paint < 1.5 seconds

#### NFR-2: Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels

#### NFR-3: SEO

- Meta tags optimization
- Open Graph tags
- Sitemap generation
- Semantic HTML

#### NFR-4: Browser Compatibility

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## 3. SYSTEM DESIGN

### 3.1 Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      Client Browser                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │           Next.js Frontend (React)                │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │  │
│  │  │   Pages     │  │ Components  │  │  Styles  │ │  │
│  │  │ - Home      │  │ - Navbar    │  │ - Global │ │  │
│  │  │ - Projects  │  │ - Footer    │  │ - Theme  │ │  │
│  │  │ - Articles  │  │ - Modal     │  │          │ │  │
│  │  │ - [article] │  │ - Cards     │  │          │ │  │
│  │  └─────────────┘  └─────────────┘  └──────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              Static Data Layer (JSON/JS)                 │
│  ┌──────────────────┐         ┌──────────────────┐     │
│  │  projects.js     │         │   articles.js    │     │
│  │  - Project data  │         │   - Article data │     │
│  │  - Metadata      │         │   - Content      │     │
│  └──────────────────┘         └──────────────────┘     │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Browser Storage                       │
│               (localStorage - Theme)                     │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Component Hierarchy

```
App Layout
├── ThemeProvider (Context)
├── Navbar
│   ├── Logo/Link
│   ├── Navigation Links
│   └── Theme Toggle
├── Page Content
│   ├── Home (/)
│   │   ├── Hero Section
│   │   ├── About Section
│   │   ├── Projects Section
│   │   │   └── ProjectCard (x3)
│   │   │       └── ProjectModal
│   │   └── Contact Section
│   ├── Projects (/projects)
│   │   └── ProjectCard (all)
│   │       └── ProjectModal
│   ├── Articles (/articles)
│   │   └── Article Preview Cards
│   └── Article Detail (/articles/[slug])
│       ├── Article Header
│       ├── Article Content
│       └── Related Articles
└── Footer
```

### 3.3 Routing Structure

```
/                           → Home Page
/projects                   → All Projects Page
/articles                   → Articles Listing
/articles/[slug]           → Individual Article
/articles/designing-systems → Example Article URL
/articles/web-performance  → Example Article URL
```

---

## 4. USER STORIES

### Epic 1: Portfolio Browsing

#### US-1.1: View Portfolio Homepage

**As a** visitor  
**I want to** see an overview of the developer's work and skills  
**So that** I can quickly understand their expertise

**Acceptance Criteria:**

- Hero section displays compelling headline
- About section shows skills and experience
- Featured projects are visible
- Contact information is accessible
- Page loads in under 2 seconds

**Priority:** High  
**Story Points:** 5

---

#### US-1.2: Browse All Projects

**As a** potential client/employer  
**I want to** view all projects in a grid layout  
**So that** I can explore the full portfolio

**Acceptance Criteria:**

- Projects page shows all projects
- Projects display title, description, and tags
- Grid is responsive on all devices
- Hover effects provide visual feedback
- Loading animations are smooth

**Priority:** High  
**Story Points:** 3

---

#### US-1.3: View Project Details

**As a** visitor  
**I want to** click on a project to see detailed information  
**So that** I can understand the project scope and outcomes

**Acceptance Criteria:**

- Modal opens with smooth animation
- Gallery displays project images
- Overview, objective, and features are shown
- Technologies used are listed
- Results/metrics are displayed
- Modal can be closed via X button or backdrop click
- Body scroll is disabled when modal is open

**Priority:** High  
**Story Points:** 8

---

### Epic 2: Content Reading

#### US-2.1: Browse Articles

**As a** reader  
**I want to** see a list of available articles  
**So that** I can choose topics that interest me

**Acceptance Criteria:**

- Articles page displays all articles
- Each article shows title, excerpt, date, category
- Read time estimate is shown
- Articles are sorted by date (newest first)
- Hover effects indicate clickability

**Priority:** Medium  
**Story Points:** 3

---

#### US-2.2: Read Full Article

**As a** reader  
**I want to** click an article to read the full content  
**So that** I can learn from the author's insights

**Acceptance Criteria:**

- Article page loads with proper URL slug
- Content is formatted with proper typography
- Back button returns to articles list
- Related articles are suggested at bottom
- SEO meta tags are properly set

**Priority:** Medium  
**Story Points:** 5

---

### Epic 3: User Experience

#### US-3.1: Toggle Dark/Light Theme

**As a** user  
**I want to** switch between dark and light modes  
**So that** I can view the site comfortably in different lighting

**Acceptance Criteria:**

- Toggle button is visible in navigation
- Theme switches immediately on click
- All colors adapt to selected theme
- Theme preference is saved
- Theme persists across page navigation
- Smooth transitions between themes

**Priority:** High  
**Story Points:** 5

---

#### US-3.2: Navigate via Keyboard

**As a** keyboard user  
**I want to** navigate the site using only keyboard  
**So that** I can access all features without a mouse

**Acceptance Criteria:**

- Tab navigation works correctly
- Focus indicators are visible
- Enter/Space activates buttons/links
- Escape closes modals
- Skip to content link available

**Priority:** Medium  
**Story Points:** 3

---

#### US-3.3: View on Mobile Device

**As a** mobile user  
**I want to** access the portfolio on my phone  
**So that** I can view it anywhere

**Acceptance Criteria:**

- Layout adapts to screen size
- Navigation menu is accessible
- Touch targets are appropriately sized
- Images scale properly
- Modals work on mobile

**Priority:** High  
**Story Points:** 5

---

## 5. TECHNICAL SPECIFICATIONS

### 5.1 File Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.js                 # Root layout with providers
│   ├── page.js                   # Home page
│   ├── globals.css              # Global styles
│   ├── components/
│   │   ├── Navbar.js            # Navigation component
│   │   ├── Footer.js            # Footer component
│   │   ├── ThemeProvider.js     # Theme context provider
│   │   ├── ProjectCard.js       # Project card component
│   │   └── ProjectModal.js      # Project detail modal
│   ├── projects/
│   │   └── page.js              # All projects page
│   ├── articles/
│   │   ├── page.js              # Articles listing
│   │   └── [slug]/
│   │       └── page.js          # Individual article
│   └── data/
│       ├── projects.js          # Project data
│       └── articles.js          # Article data
├── public/
│   ├── images/                  # Static images
│   └── favicon.ico
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

### 5.2 Component Specifications

#### 5.2.1 ThemeProvider Component

```javascript
// Input Props: { children: ReactNode }
// State: theme (string: 'light' | 'dark')
// Methods: toggleTheme()
// Side Effects: localStorage.setItem, classList.toggle
// Context: Provides { theme, toggleTheme }
```

#### 5.2.2 ProjectCard Component

```javascript
// Props:
// - project: {
//     id: number
//     title: string
//     description: string
//     icon: string
//     tags: string[]
//     ... (see data schema)
//   }
// - delay: number (animation delay)
//
// State: isModalOpen (boolean)
// Events: onClick → setIsModalOpen(true)
// Renders: ProjectModal when isModalOpen
```

#### 5.2.3 ProjectModal Component

```javascript
// Props:
// - project: Project (full object)
// - isOpen: boolean
// - onClose: () => void
//
// Features:
// - AnimatePresence for enter/exit
// - Body scroll lock when open
// - Close on backdrop click
// - Close on X button click
// - Gallery grid display
// - Skills badges
// - Features list
// - Results metrics
```

---

## 6. DATABASE SCHEMA

### 6.1 Data Models

Since this is a static site, data is stored in JavaScript/JSON files. Here's the schema:

#### Project Model

```typescript
interface Project {
  id: number;
  title: string;
  description: string; // Short description for cards
  icon: string; // Emoji or icon identifier
  tags: string[]; // Technology tags
  overview: string; // Detailed overview
  objective: string; // Project objective
  features: string[]; // List of key features
  skills: string[]; // Technologies/skills used
  gallery: string[]; // Gallery images (emojis for demo)
  results?: Result[]; // Optional results metrics
}

interface Result {
  value: string; // e.g., "40%"
  label: string; // e.g., "User engagement"
}
```

#### Article Model

```typescript
interface Article {
  id: number;
  title: string;
  slug: string; // URL-friendly identifier
  excerpt: string; // Short preview text
  content: string; // Full HTML content
  date: string; // Publication date
  category: string; // Article category
  readTime: string; // e.g., "5 min read"
  author?: string; // Optional author name
}
```

### 6.2 Sample Data

#### projects.js

```javascript
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online shopping platform with payment integration",
    icon: "🛒",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    overview:
      "Built a complete e-commerce solution with product catalog, shopping cart, checkout, and order management.",
    objective:
      "Create a scalable, secure online store that handles high traffic and provides excellent UX.",
    features: [
      "Product catalog with search and filtering",
      "Shopping cart with real-time updates",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory",
      "Email notifications",
    ],
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe API",
      "TailwindCSS",
    ],
    gallery: ["🛒", "💳", "📦", "📊"],
    results: [
      { value: "10k+", label: "Monthly orders" },
      { value: "99.9%", label: "Uptime" },
      { value: "$2M+", label: "Annual revenue" },
    ],
  },
  // ... more projects
];
```

#### articles.js

```javascript
export const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    excerpt:
      "Learn best practices for architecting large-scale React applications that are maintainable and performant.",
    content: `
      <h2>Introduction</h2>
      <p>Building large React applications requires careful planning...</p>
      <h2>Component Architecture</h2>
      <p>A well-structured component hierarchy is crucial...</p>
      <!-- Full article content -->
    `,
    date: "January 15, 2026",
    category: "Development",
    readTime: "8 min read",
  },
  // ... more articles
];
```

---

## 7. API DOCUMENTATION

### 7.1 Static Data Access

Since this is a Next.js static site, there are no REST APIs. Data access is through ES6 imports:

```javascript
// Import project data
import { projects } from "@/app/data/projects";

// Import article data
import { articles } from "@/app/data/articles";

// Find specific article by slug
const article = articles.find((a) => a.slug === params.slug);

// Filter projects by tag
const filteredProjects = projects.filter((p) => p.tags.includes("React"));
```

### 7.2 Future API Considerations

If moving to a dynamic backend, suggested API endpoints:

```
GET    /api/projects           → List all projects
GET    /api/projects/:id       → Get project details
GET    /api/articles           → List all articles
GET    /api/articles/:slug     → Get article by slug
POST   /api/contact            → Submit contact form
GET    /api/search?q=query     → Search content
```

---

## 8. IMPLEMENTATION GUIDE

### 8.1 Phase 1: Project Setup (Sprint 1)

#### Tasks:

1. Initialize Next.js project
2. Install dependencies
3. Configure TailwindCSS
4. Set up folder structure
5. Configure fonts (Google Fonts)
6. Create base layout and providers

#### Deliverables:

- Working development environment
- Basic routing structure
- Theme provider setup
- Global styles configured

**Estimated Time:** 2-3 days

---

### 8.2 Phase 2: Core Components (Sprint 1-2)

#### Tasks:

1. Build Navbar component
   - Logo and navigation links
   - Theme toggle button
   - Mobile responsive menu
2. Build Footer component
3. Implement ThemeProvider context
4. Create reusable UI components

#### Deliverables:

- Functional navigation
- Working theme toggle
- Responsive layout
- Component library

**Estimated Time:** 3-4 days

---

### 8.3 Phase 3: Home Page (Sprint 2)

#### Tasks:

1. Create Hero section
2. Build About section with skills grid
3. Implement Projects preview section
4. Add Contact section
5. Integrate animations with Framer Motion

#### Deliverables:

- Complete home page
- Smooth animations
- Responsive design
- Optimized images

**Estimated Time:** 4-5 days

---

### 8.4 Phase 4: Projects System (Sprint 3)

#### Tasks:

1. Create project data structure
2. Build ProjectCard component
3. Implement ProjectModal component
   - Gallery slider
   - Features list
   - Skills tags
   - Results display
4. Create projects listing page
5. Add modal animations

#### Deliverables:

- Working project showcase
- Interactive modals
- Gallery functionality
- Smooth UX

**Estimated Time:** 5-6 days

---

### 8.5 Phase 5: Articles System (Sprint 4)

#### Tasks:

1. Create articles data structure
2. Build articles listing page
3. Implement dynamic routing for articles
4. Create article detail page
5. Add related articles feature
6. Style article content (typography)

#### Deliverables:

- Blog/articles system
- Dynamic routing
- SEO optimization
- Related content

**Estimated Time:** 4-5 days

---

### 8.6 Phase 6: Polish & Optimization (Sprint 5)

#### Tasks:

1. Performance optimization
2. Accessibility audit and fixes
3. SEO meta tags
4. Cross-browser testing
5. Mobile optimization
6. Add loading states
7. Error handling

#### Deliverables:

- Optimized performance
- WCAG AA compliance
- SEO-ready
- Production-ready code

**Estimated Time:** 3-4 days

---

## 9. TESTING STRATEGY

### 9.1 Unit Testing

#### Components to Test:

- ThemeProvider context
- ProjectCard component
- ProjectModal component
- Navbar component

#### Test Cases:

```javascript
// ThemeProvider.test.js
describe("ThemeProvider", () => {
  test("initializes with light theme", () => {});
  test("toggles between light and dark", () => {});
  test("persists theme to localStorage", () => {});
  test("applies dark class to document", () => {});
});

// ProjectModal.test.js
describe("ProjectModal", () => {
  test("renders when isOpen is true", () => {});
  test("closes on backdrop click", () => {});
  test("closes on X button click", () => {});
  test("disables body scroll when open", () => {});
  test("displays all project details", () => {});
});
```

### 9.2 Integration Testing

#### Test Scenarios:

1. Navigation flow through all pages
2. Theme persistence across navigation
3. Project modal interaction flow
4. Article navigation and display

### 9.3 End-to-End Testing

#### E2E Test Cases:

```javascript
// e2e/portfolio.spec.js
describe("Portfolio E2E", () => {
  test("User can browse homepage", async () => {
    // Visit homepage
    // Verify hero content
    // Scroll to projects
    // Verify featured projects
  });

  test("User can view project details", async () => {
    // Click project card
    // Verify modal opens
    // Check gallery images
    // Verify features list
    // Close modal
  });

  test("User can read articles", async () => {
    // Navigate to articles
    // Click an article
    // Verify article loads
    // Check related articles
  });

  test("Theme toggle works correctly", async () => {
    // Toggle to dark mode
    // Verify colors change
    // Refresh page
    // Verify theme persists
  });
});
```

### 9.4 Performance Testing

#### Metrics to Monitor:

- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.0s
- Total Blocking Time (TBT) < 300ms
- Cumulative Layout Shift (CLS) < 0.1

#### Tools:

- Lighthouse CI
- WebPageTest
- Chrome DevTools Performance

### 9.5 Accessibility Testing

#### Checklist:

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader compatible
- [ ] Form labels associated
- [ ] Alt text on images

#### Tools:

- axe DevTools
- WAVE
- Screen readers (NVDA, JAWS)

---

## 10. DEPLOYMENT PLAN

### 10.1 Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Performance metrics meet targets
- [ ] Accessibility audit complete
- [ ] SEO meta tags configured
- [ ] Error handling implemented
- [ ] Environment variables set
- [ ] Analytics configured
- [ ] Sitemap generated
- [ ] robots.txt configured

### 10.2 Deployment Steps (Vercel)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to preview
vercel

# 4. Deploy to production
vercel --prod

# 5. Configure custom domain (optional)
vercel domains add yourdomain.com
```

### 10.3 Environment Configuration

```bash
# .env.local (for local development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-ga-id

# Production environment variables
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_GA_ID=production-ga-id
```

### 10.4 Post-Deployment

#### Monitoring:

- Set up error tracking (Sentry)
- Configure analytics (Google Analytics)
- Monitor performance (Vercel Analytics)
- Set up uptime monitoring

#### Maintenance:

- Weekly dependency updates
- Monthly security audits
- Performance monitoring
- Content updates

---

## 11. DOCUMENTATION MAINTENANCE

### 11.1 Code Documentation

```javascript
/**
 * ProjectModal Component
 *
 * Displays detailed information about a project in a modal overlay.
 * Includes image gallery, features list, technologies, and results.
 *
 * @param {Object} props
 * @param {Project} props.project - The project data to display
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback when modal should close
 *
 * @example
 * <ProjectModal
 *   project={projectData}
 *   isOpen={modalOpen}
 *   onClose={() => setModalOpen(false)}
 * />
 */
```

### 11.2 README Template

```markdown
# Portfolio Website

Modern, responsive portfolio built with Next.js 14 and Framer Motion.

## Features

- 🎨 Dark/Light theme with persistence
- 📱 Fully responsive design
- ⚡ Optimized performance
- ♿ WCAG AA accessible
- 📊 Project showcase with modals
- 📝 Blog/articles system

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000

## Project Structure

[Directory structure here]

## Tech Stack

- Next.js 14
- React 18
- TailwindCSS
- Framer Motion

## Deployment

Deployed on Vercel: [yoursite.com]

## License

MIT
```

---

## 12. CHANGELOG

### Version 1.0.0 (Launch)

- Initial release
- Home page with hero, about, projects, contact
- Projects system with modal details
- Articles/blog system
- Dark/light theme
- Responsive design
- Accessibility features

### Version 1.1.0 (Planned)

- Contact form with email integration
- Project filtering by technology
- Article categories and search
- RSS feed for articles
- Social sharing buttons

### Version 1.2.0 (Planned)

- CMS integration (Contentful/Sanity)
- Advanced animations
- Case study PDFs
- Testimonials section
- Newsletter signup

---

## APPENDIX A: Design System

### Colors

```css
Light Theme:
--bg-primary: #fefefe
--bg-secondary: #f5f3f0
--text-primary: #1a1a1a
--text-secondary: #666666
--accent: #cc6b49
--border: #e0ddd8

Dark Theme:
--bg-primary: #1a1a1a
--bg-secondary: #242424
--text-primary: #f5f3f0
--text-secondary: #a8a8a8
--accent: #e89b7e
--border: #3a3a3a
```

### Typography

- **Headings:** Crimson Pro (Serif)
- **Body:** Inter (Sans-serif)
- **Base Size:** 16px
- **Scale:** 1.25 (Major Third)

### Spacing

- Base unit: 4px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px

---

## APPENDIX B: Browser Support Matrix

| Browser       | Minimum Version | Notes        |
| ------------- | --------------- | ------------ |
| Chrome        | 90+             | Full support |
| Firefox       | 88+             | Full support |
| Safari        | 14+             | Full support |
| Edge          | 90+             | Full support |
| Mobile Safari | 14+             | Full support |
| Chrome Mobile | 90+             | Full support |

---

## APPENDIX C: Performance Budget

| Metric      | Target  | Maximum |
| ----------- | ------- | ------- |
| Page Weight | < 500KB | < 1MB   |
| JavaScript  | < 200KB | < 300KB |
| CSS         | < 50KB  | < 100KB |
| Images      | < 250KB | < 500KB |
| Fonts       | < 100KB | < 150KB |
| TTI         | < 2.5s  | < 3.5s  |

---

**Document Version:** 1.0  
**Last Updated:** January 6, 2026  
**Author:** Development Team  
**Status:** Approved for Implementation
