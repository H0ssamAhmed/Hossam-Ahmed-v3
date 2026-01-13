'use client'

import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from './components/Project/ProjectCard'
import ParticleBackground from './components/ParticleBackground'
import { projects } from './data/projects'
import { experiences } from './data/experience'
import { education } from './data/education'
import { certificates } from './data/certificates'
import FeaturedProject from './components/Project/FeaturedProject'

interface Skill {
    name: string
    icon: string
}

export default function Home() {
    const featuredProjects = projects.slice(0, 3)

    const skills: Skill[] = [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Node.js', icon: '💚' },
        { name: 'TailwindCSS', icon: '🎨' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Git', icon: '📦' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'GraphQL', icon: '◈' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '💛' },
        { name: 'CSS', icon: '🎯' },
        { name: 'HTML', icon: '📄' }
    ]

    // Duplicate skills for seamless marquee loop
    const duplicatedSkills = [...skills, ...skills]

    return (
        <div>
            {/* Hero Section */}
            <section id="#" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden">
                {/* Interactive Particle Background */}
                <ParticleBackground />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-[var(--text-primary)]">Hi, I&apos;m </span>
                            <span className="text-[var(--accent)]">Hossam</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
                            Full-Stack Developer crafting modern web experiences with passion for clean code and beautiful design
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/projects"
                                className="px-8 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                View My Work
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] rounded-lg font-medium hover:bg-[var(--accent)] hover:text-white transition-all"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section - Redesigned with Photo */}
            <section className="section-padding bg-[var(--bg-primary)]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                            About Me
                        </h2>

                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                            {/* Profile Photo */}
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden animate-float animate-glow">
                                        <Image
                                            src="/images/profile.png"
                                            alt="Profile Photo"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)] opacity-20 rounded-full blur-xl animate-pulse-soft"></div>
                                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--accent)] opacity-10 rounded-full blur-2xl animate-pulse-soft"></div>
                                </div>
                            </motion.div>

                            {/* Bio Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
                                    I&apos;m a passionate full-stack developer with 5+ years of experience building
                                    scalable web applications. I specialize in modern JavaScript frameworks and
                                    love turning complex problems into simple, beautiful solutions.
                                </p>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
                                    to open source, or writing technical articles to share knowledge with the community.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#experience"
                                        className="px-6 py-2 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                                    >
                                        See Experience
                                    </a>
                                    <a
                                        href="#certificates"
                                        className="px-6 py-2 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--accent)] transition-colors text-sm"
                                    >
                                        View Certificates
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section - Endless Marquee */}
            <section id='skills' className="section-padding bg-[var(--bg-secondary)] overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-center text-[var(--text-secondary)] mb-12 text-lg">
                            Technologies I work with every day
                        </p>
                    </motion.div>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container py-8">
                    <div className="flex animate-marquee">
                        {duplicatedSkills.map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="flex-shrink-0 mx-4 px-6 py-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:scale-105 cursor-default"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{skill.icon}</span>
                                    <span className="font-medium whitespace-nowrap">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second row - reverse direction */}
                <div className="marquee-container py-8">
                    <div className="flex animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
                        {[...duplicatedSkills].reverse().map((skill, index) => (
                            <div
                                key={`${skill.name}-reverse-${index}`}
                                className="flex-shrink-0 mx-4 px-6 py-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:scale-105 cursor-default"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{skill.icon}</span>
                                    <span className="font-medium whitespace-nowrap">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section-padding bg-[var(--bg-primary)]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            Work Experience
                        </h2>
                        <p className="text-center text-[var(--text-secondary)] mb-16 text-lg">
                            My professional journey
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="hidden md:block timeline-line"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'}`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[var(--bg-primary)]"></div>

                                <div className={`bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                    }`}>
                                    <span className="inline-block px-3 py-1 bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] rounded-full text-sm font-medium mb-3">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                    <p className="text-[var(--accent)] font-medium mb-2">{exp.company}</p>
                                    <p className="text-[var(--text-secondary)] text-sm mb-4">{exp.location}</p>
                                    <p className="text-[var(--text-secondary)] mb-4 text-left">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2 justify-start">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-[var(--bg-primary)] rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
