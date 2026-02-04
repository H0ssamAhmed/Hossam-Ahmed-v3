import React from 'react'
import { motion } from "motion/react"
import { Experience } from '@/app/types'
import Badge from '../Badge'

const ExperienceCard = ({ exp, index }: { exp: Experience, index: number }) => {
    return (
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
                <Badge text={exp.period} />
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-[var(--accent)] font-medium mb-2">{exp.company}</p>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{exp.location}</p>
                <p className="text-[var(--text-secondary)] mb-4 text-left">{exp.description}</p>

                <div className="flex flex-wrap gap-2 justify-start">
                    {exp.skills.map((skill) => (
                        <span
                            key={skill._id}
                            className="px-3 py-1 bg-[var(--bg-primary)] rounded-full text-xs font-medium"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ExperienceCard