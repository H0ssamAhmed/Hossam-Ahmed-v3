import React from 'react'
import { motion } from "motion/react"
import { Education } from '@/app/types'
import Badge from '../Badge'

const EducationCard = ({ edu, index }: { edu: Education, index: number }) => {
    return (
        <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:shadow-lg group"
        >
            <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:animate-pulse-soft">{edu.icon}</span>
                <div>
                    <Badge text={edu.period} />

                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-[var(--accent)] font-medium mb-1">{edu.institution}</p>
                    <p className="text-[var(--text-secondary)] text-sm mb-4">{edu.location}</p>
                    <p className="text-[var(--text-secondary)] text-sm mb-4">{edu.description}</p>

                    <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default EducationCard