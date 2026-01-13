'use client'

import React from 'react'
import { motion } from "motion/react"
import ProjectCard from '../components/Project/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
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
              My Projects
            </h1>
            <p className="text-center text-[var(--text-secondary)] mb-12 text-lg max-w-2xl mx-auto">
              A collection of my work spanning web applications, mobile apps, and full-stack solutions.
              Each project represents unique challenges and innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
