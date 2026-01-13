import { Article } from '../types'

export const articles: Article[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    slug: 'building-scalable-react-applications',
    excerpt: 'Learn best practices for architecting large-scale React applications that are maintainable and performant.',
    content: `
      <h2>Introduction</h2>
      <p>Building large React applications requires careful planning and adherence to best practices. In this article, we'll explore the fundamental principles that make React applications scalable and maintainable.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component hierarchy is crucial for scalability. Follow these principles:</p>
      <ul>
        <li>Keep components small and focused on a single responsibility</li>
        <li>Use composition over inheritance</li>
        <li>Implement proper prop drilling or use context for shared state</li>
        <li>Create reusable UI components in a component library</li>
      </ul>
      
      <h2>State Management</h2>
      <p>As your application grows, state management becomes critical. Consider these approaches:</p>
      <ul>
        <li>Use local state for component-specific data</li>
        <li>Implement Context API for theme, auth, and app-wide state</li>
        <li>Consider Redux or Zustand for complex state logic</li>
        <li>Keep state close to where it's used</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Performance is key in large applications. Apply these techniques:</p>
      <ul>
        <li>Use React.memo() for expensive components</li>
        <li>Implement code splitting with React.lazy()</li>
        <li>Optimize re-renders with useMemo and useCallback</li>
        <li>Use virtual scrolling for long lists</li>
      </ul>
      
      <h2>Code Organization</h2>
      <p>A well-organized codebase is easier to maintain and scale. Structure your project with clear separation of concerns, modular architecture, and consistent naming conventions.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications is an iterative process. Start with solid foundations, refactor as needed, and always prioritize code maintainability.</p>
    `,
    date: 'January 15, 2026',
    category: 'Development',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Modern CSS Techniques for 2026',
    slug: 'modern-css-techniques-2026',
    excerpt: 'Discover the latest CSS features and techniques that will improve your styling workflow and create stunning designs.',
    content: `
      <h2>Introduction</h2>
      <p>CSS continues to evolve with powerful new features. Let's explore the modern techniques that are reshaping how we style web applications in 2026.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries allow components to respond to their container's size rather than the viewport. This enables truly modular, reusable components that adapt to any context.</p>
      
      <h2>CSS Grid and Subgrid</h2>
      <p>CSS Grid has matured, and subgrid allows nested grids to align with their parent's grid tracks, making complex layouts simpler and more maintainable.</p>
      
      <h2>Custom Properties and Functions</h2>
      <p>CSS custom properties (variables) combined with calc() and clamp() enable responsive designs without media queries. Create fluid typography and spacing systems easily.</p>
      
      <h2>Cascade Layers</h2>
      <p>@layer gives explicit control over cascade specificity, solving many CSS architecture challenges and making styles more predictable.</p>
      
      <h2>Conclusion</h2>
      <p>These modern CSS techniques empower developers to create more robust, maintainable, and beautiful user interfaces with less code.</p>
    `,
    date: 'January 10, 2026',
    category: 'CSS',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Web Performance Optimization Guide',
    slug: 'web-performance-optimization',
    excerpt: 'A comprehensive guide to optimizing web performance, from initial load to runtime efficiency.',
    content: `
      <h2>Introduction</h2>
      <p>Web performance directly impacts user experience and business metrics. This guide covers essential optimization techniques for modern web applications.</p>
      
      <h2>Loading Performance</h2>
      <p>Optimize initial page load with these strategies:</p>
      <ul>
        <li>Minimize and compress assets</li>
        <li>Implement lazy loading for images and components</li>
        <li>Use modern image formats (WebP, AVIF)</li>
        <li>Enable HTTP/2 and compression</li>
        <li>Optimize font loading with font-display</li>
      </ul>
      
      <h2>Runtime Performance</h2>
      <p>Keep your application smooth and responsive:</p>
      <ul>
        <li>Avoid layout thrashing and forced reflows</li>
        <li>Use requestAnimationFrame for animations</li>
        <li>Implement virtual scrolling for large lists</li>
        <li>Debounce and throttle expensive operations</li>
      </ul>
      
      <h2>Measuring Performance</h2>
      <p>Use tools like Lighthouse, WebPageTest, and Chrome DevTools to measure Core Web Vitals: LCP, FID, and CLS. Set performance budgets and monitor them continuously.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Measure, optimize, and iterate to provide the best experience for your users.</p>
    `,
    date: 'January 5, 2026',
    category: 'Performance',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Designing Accessible Web Interfaces',
    slug: 'designing-accessible-interfaces',
    excerpt: 'Learn how to create web interfaces that are accessible to all users, including those with disabilities.',
    content: `
      <h2>Introduction</h2>
      <p>Accessibility is not optional—it's a fundamental aspect of good design. Let's explore how to make web interfaces accessible to everyone.</p>
      
      <h2>Semantic HTML</h2>
      <p>Use proper HTML elements for their intended purpose. Semantic HTML provides meaning to assistive technologies and improves SEO.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure all interactive elements are keyboard accessible:</p>
      <ul>
        <li>Logical tab order</li>
        <li>Visible focus indicators</li>
        <li>Keyboard shortcuts for common actions</li>
        <li>Skip links for navigation</li>
      </ul>
      
      <h2>ARIA Attributes</h2>
      <p>Use ARIA attributes when semantic HTML isn't sufficient. Common patterns include aria-label, aria-describedby, and role attributes.</p>
      
      <h2>Color and Contrast</h2>
      <p>Ensure sufficient color contrast (WCAG AA: 4.5:1 for text). Don't rely on color alone to convey information.</p>
      
      <h2>Testing</h2>
      <p>Test with screen readers, keyboard navigation, and automated tools like axe DevTools. Include users with disabilities in your testing process.</p>
      
      <h2>Conclusion</h2>
      <p>Accessible design benefits everyone. Make it a priority from the start of your projects.</p>
    `,
    date: 'December 28, 2025',
    category: 'Accessibility',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    excerpt: 'Master TypeScript with these best practices for type-safe, maintainable code.',
    content: `
      <h2>Introduction</h2>
      <p>TypeScript adds static typing to JavaScript, catching errors early and improving code quality. Let's explore best practices for using TypeScript effectively.</p>
      
      <h2>Type Annotations</h2>
      <p>Be explicit with type annotations for function parameters and return values. Let TypeScript infer types for local variables when obvious.</p>
      
      <h2>Interfaces vs Types</h2>
      <p>Use interfaces for object shapes and types for unions, intersections, and primitives. Interfaces can be extended and merged, while types are more flexible.</p>
      
      <h2>Generics</h2>
      <p>Leverage generics to create reusable, type-safe components and functions. Generics provide flexibility while maintaining type safety.</p>
      
      <h2>Strict Mode</h2>
      <p>Enable strict mode in tsconfig.json for maximum type safety. This catches potential issues early and enforces best practices.</p>
      
      <h2>Utility Types</h2>
      <p>Use built-in utility types like Partial, Pick, Omit, and Record to transform types. These reduce boilerplate and improve type reusability.</p>
      
      <h2>Conclusion</h2>
      <p>TypeScript improves code quality and developer experience. Invest time in learning its features for long-term benefits.</p>
    `,
    date: 'December 20, 2025',
    category: 'Development',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'API Design Principles',
    slug: 'api-design-principles',
    excerpt: 'Essential principles for designing RESTful APIs that are intuitive, scalable, and maintainable.',
    content: `
      <h2>Introduction</h2>
      <p>Well-designed APIs are intuitive, consistent, and robust. Let's explore principles that make APIs a joy to use.</p>
      
      <h2>RESTful Conventions</h2>
      <p>Follow REST conventions:</p>
      <ul>
        <li>Use HTTP methods appropriately (GET, POST, PUT, DELETE)</li>
        <li>Structure URLs hierarchically (/users/123/posts)</li>
        <li>Use plural nouns for collections (/articles)</li>
        <li>Return appropriate status codes</li>
        <li>Use snake_case or camelCase consistently</li>
      </ul>
      
      <h2>Versioning</h2>
      <p>Plan for API evolution with versioning. Use URL versioning (/v1/users) or header-based versioning for breaking changes.</p>
      
      <h2>Error Handling</h2>
      <p>Provide clear, consistent error messages with proper status codes. Include error codes, messages, and suggestions for resolution.</p>
      
      <h2>Documentation</h2>
      <p>Comprehensive documentation is crucial. Use tools like Swagger/OpenAPI for interactive, always-up-to-date docs.</p>
      
      <h2>Security</h2>
      <p>Implement authentication (JWT, OAuth), rate limiting, and input validation. Never trust client input.</p>
      
      <h2>Conclusion</h2>
      <p>Good API design requires careful planning and consistent execution. Prioritize developer experience and maintainability.</p>
    `,
    date: 'December 15, 2025',
    category: 'Backend',
    readTime: '8 min read',
  },
]
