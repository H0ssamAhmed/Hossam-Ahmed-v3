'use client'
import Image from 'next/image'
import { motion } from "motion/react"
import React from 'react'

const About = () => {
    return (
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
    )
}

export default About