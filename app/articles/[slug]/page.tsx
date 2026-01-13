import React from 'react'
import Link from 'next/link'
import { articles } from '../../data/articles'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for each article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Portfolio`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link
            href="/articles"
            className="text-[var(--accent)] hover:underline"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          href="/articles"
          className="inline-flex items-center text-[var(--accent)] hover:underline mb-8"
        >
          ← Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 max-w-4xl pb-16">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[var(--text-secondary)]">
            <span>{article.date}</span>
            <span>•</span>
            <span className="px-3 py-1 bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] rounded-full">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {article.title}
          </h1>

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            color: 'var(--text-primary)',
          }}
        />

        <style dangerouslySetInnerHTML={{
          __html: `
          .prose h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            font-family: 'Crimson Pro', serif;
          }
          
          .prose h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
            font-family: 'Crimson Pro', serif;
          }
          
          .prose p {
            margin-bottom: 1.5rem;
            line-height: 1.8;
            color: var(--text-secondary);
          }
          
          .prose ul {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }
          
          .prose li {
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
            line-height: 1.7;
          }
          
          .prose code {
            background-color: var(--bg-secondary);
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.9em;
            color: var(--accent);
          }
          
          .prose a {
            color: var(--accent);
            text-decoration: underline;
          }
          
          .prose a:hover {
            opacity: 0.8;
          }
        ` }} />
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-[var(--bg-secondary)] py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/articles/${related.slug}`}
                  className="bg-[var(--bg-primary)] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[var(--border)] hover:border-[var(--accent)] group"
                >
                  <div className="text-sm text-[var(--text-secondary)] mb-2">
                    {related.readTime}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors text-[var(--text-primary)]">
                    {related.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
