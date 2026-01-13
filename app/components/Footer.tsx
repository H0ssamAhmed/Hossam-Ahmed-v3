'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: '💻' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { name: 'Email', href: 'mailto:hello@example.com', icon: '📧' },
  ]

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">
              <span className="text-[var(--accent)]">Port</span>
              <span className="text-[var(--text-primary)]">folio</span>
            </h3>
            <p className="text-[var(--text-secondary)]">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-[var(--text-secondary)]">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
