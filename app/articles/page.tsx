'use client'

import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import { articles } from '../data/articles'

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Articles & Insights
            </h1>
            <p className="text-center text-[var(--text-secondary)] mb-12 text-lg max-w-2xl mx-auto">
              Thoughts on web development, best practices, and lessons learned from real-world projects.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="bg-[var(--bg-secondary)] rounded-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-[var(--border)] hover:border-[var(--accent)] group">
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-[var(--text-secondary)]">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="px-3 py-1 bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] rounded-full">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    <div className="text-[var(--accent)] font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                      Read Article →
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
