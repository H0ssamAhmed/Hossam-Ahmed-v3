'use client'

import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from './components/Project/ProjectCard'
import ParticleBackground from './components/ParticleBackground'
import { projects } from './data/projects'
import { education } from './data/education'
import { certificates } from './data/certificates'
import FeaturedProject from './components/Project/FeaturedProject'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import SkillsContainer from './components/Skills/SkillsContainer'
import ExperienceContainer from './components/Experience/ExperienceContainer'



export default function Home() {
    const featuredProjects = projects.slice(0, 3)


    return (
        <div>
            {/* Hero Section */}
            <Hero />
            {/* About Section - Redesigned with Photo */}
            <About />


            {/* Skills Section - Endless Marquee */}
            <SkillsContainer />

            {/* Experience Section */}
            <ExperienceContainer />

            {/* Education Section */}
            <section className="section-padding bg-[var(--bg-secondary)]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            Education
                        </h2>
                        <p className="text-center text-[var(--text-secondary)] mb-12 text-lg">
                            My academic background
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:shadow-lg group"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl group-hover:animate-pulse-soft">{edu.icon}</span>
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] rounded-full text-sm font-medium mb-2">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                        <p className="text-[var(--accent)] font-medium mb-1">{edu.institution}</p>
                                        <p className="text-[var(--text-secondary)] text-sm mb-4">{edu.location}</p>
                                        <p className="text-[var(--text-secondary)] text-sm mb-4">{edu.description}</p>

                                        <ul className="space-y-1">
                                            {edu.achievements.map((achievement, i) => (
                                                <li key={i} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="section-padding bg-[var(--bg-primary)]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            Certificates
                        </h2>
                        <p className="text-center text-[var(--text-secondary)] mb-12 text-lg">
                            Professional certifications I&apos;ve earned
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all group cursor-default"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ backgroundColor: `${cert.color}20` }}>
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold group-hover:text-[var(--accent)] transition-colors">{cert.title}</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">{cert.issuer}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[var(--text-secondary)]">{cert.date}</span>
                                    <span className="px-3 py-1 bg-[var(--bg-primary)] rounded-full text-xs font-mono text-[var(--text-secondary)]">
                                        {cert.credentialId}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <FeaturedProject />

            {/* Contact Section */}
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
        </div>
    )
}
