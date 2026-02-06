'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Project } from '@/app/types'
import Image from 'next/image'


interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [carouselOpen, setCarouselOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const gallery = project.gallery ?? []
  const currentImage = gallery[currentImageIndex]

  const openImage = (index: number) => {
    setCurrentImageIndex(index)
    setCarouselOpen(true)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

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

  // Close on Escape key (carousel first, then modal)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (carouselOpen) setCarouselOpen(false)
        else onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose, carouselOpen])

  // Carousel keyboard navigation
  useEffect(() => {
    if (!carouselOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
      if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [carouselOpen, gallery.length])

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
                        {project.gallery.map((src, index) => (
                          <div
                            key={index}
                            onClick={() => openImage(index)}
                            className="relative aspect-square bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center text-6xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer overflow-hidden"
                          >
                            <Image alt={src} src={src} fill className="object-cover" />
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

          {/* Image Carousel Popup */}
          <AnimatePresence>
            {carouselOpen && gallery.length > 0 && currentImage && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setCarouselOpen(false)}
                  className="fixed inset-0 bg-black/90 z-[60] backdrop-blur-sm"
                />
                <div className="fixed inset-0 z-[61] flex items-center justify-center p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-4xl max-h-[90vh] flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setCarouselOpen(false)}
                      className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
                      aria-label="Close carousel"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Prev arrow */}
                    <button
                      onClick={goToPrev}
                      className="absolute left-2 md:left-0 md:-translate-x-16 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Image */}
                    <div className="relative w-full aspect-video max-h-[80vh] mx-12 md:mx-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0"
                        >
                          <Image
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            src={currentImage}
                            fill
                            className="object-contain rounded-lg"
                            sizes="(max-width: 1024px) 100vw, 896px"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Next arrow */}
                    <button
                      onClick={goToNext}
                      className="absolute right-2 md:right-0 md:translate-x-16 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}
