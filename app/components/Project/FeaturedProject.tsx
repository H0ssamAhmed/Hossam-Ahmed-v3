import React from 'react'
import { motion } from "motion/react"
import ProjectCard from './ProjectCard'
import { projects } from '@/app/data/projects'
import Link from 'next/link'

const FeaturedProject = () => {
    return (
        <section id="projects" className="section-padding bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] mb-12 text-lg">
                        Here are some of my recent projects
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            View All Projects →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default FeaturedProject