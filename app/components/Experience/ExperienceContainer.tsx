import React from 'react'
import { motion } from "motion/react"
import { experiences } from '@/app/data/experience'
import { Experience } from '@/app/types'
import ExperienceCard from './ExperienceCard'


const ExperienceContainer = () => {
    return (
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
                        <ExperienceCard index={index} exp={exp} key={exp.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceContainer