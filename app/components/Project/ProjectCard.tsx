'use client'

import React, { useState } from 'react'
import { motion } from "motion/react"
import ProjectModal from './ProjectModal'
import { Project } from '@/app/types'

interface ProjectCardProps {
  project: Project
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-[var(--bg-secondary)] rounded-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-[var(--border)] hover:border-[var(--accent)] group">
          <div className="text-4xl mb-4">{project.icon}</div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm rounded-full border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-[var(--text-secondary)] text-sm">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
          <div className="text-[var(--accent)] font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
            View Details →
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
