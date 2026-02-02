'use client'
import React from 'react'
import { motion } from "motion/react"
import { education } from '@/app/data/education'
import EducationCard from './EducationCard'

const EducationContainer = () => {
    return (
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
                        <EducationCard key={index} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default EducationContainer