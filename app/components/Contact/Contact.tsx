'use client'
import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities
                        to be part of your vision.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--border)] transition-colors flex items-center gap-2"
                        >
                            <span className="text-2xl">💻</span>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--border)] transition-colors flex items-center gap-2"
                        >
                            <span className="text-2xl">💼</span>
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:hello@example.com"
                            className="px-6 py-3 bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--border)] transition-colors flex items-center gap-2"
                        >
                            <span className="text-2xl">📧</span>
                            <span>Email</span>
                        </a>
                    </div>

                    <a
                        href="mailto:hello@example.com"
                        className="inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        Send Me a Message
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact