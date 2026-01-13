import React from 'react'
import ParticleBackground from '../ParticleBackground'
import { motion } from "motion/react"
import Link from 'next/link'
const Hero = () => {
    return (
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
    )
}

export default Hero