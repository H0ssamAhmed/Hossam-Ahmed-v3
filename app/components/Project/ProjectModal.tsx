'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Project } from '@/app/types'
import Image from 'next/image'


interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-[var(--bg-primary)] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[var(--border)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="sticky top-4 float-right mr-4 mt-4 p-2 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--border)] transition-colors z-10"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="text-6xl mb-4">{project.icon}</div>
                    <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                    <p className="text-[var(--text-secondary)] text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm rounded-full border border-[var(--border)]"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  {/* Gallery */}
                  {project.gallery && project.gallery.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.gallery.map((item, index) => (
                          <div
                            key={index}
                            className="relative aspect-square bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center text-6xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                          >
                            <Image alt={item} src={item} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Overview */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3">Overview</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Objective */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3">Objective</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-[var(--text-secondary)]"
                        >
                          <span className="text-[var(--accent)] mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3">
                      Technologies & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-[var(--accent)] bg-opacity-10 text-white rounded-lg font-medium"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.results.map((result, index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]"
                          >
                            <div className="text-3xl font-bold text-[var(--accent)] mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-[var(--text-secondary)]">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
