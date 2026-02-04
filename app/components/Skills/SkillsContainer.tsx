'use client'
import React from 'react'
import { motion } from "motion/react"
import { Skill } from '@/app/types'
import SkillElement from './SkillElement'


const SkillsContainer = ({ skills }: { skills: Skill[] }) => {
    // const skills: Skill[] = [
    //     { name: 'React', icon: '⚛️' },
    //     { name: 'Next.js', icon: '▲' },
    //     { name: 'TypeScript', icon: '📘' },
    //     { name: 'Node.js', icon: '💚' },
    //     { name: 'TailwindCSS', icon: '🎨' },
    //     { name: 'PostgreSQL', icon: '🐘' },
    //     { name: 'MongoDB', icon: '🍃' },
    //     { name: 'AWS', icon: '☁️' },
    //     { name: 'Git', icon: '📦' },
    //     { name: 'REST APIs', icon: '🔗' },
    //     { name: 'GraphQL', icon: '◈' },
    //     { name: 'Docker', icon: '🐳' },
    //     { name: 'Python', icon: '🐍' },
    //     { name: 'JavaScript', icon: '💛' },
    //     { name: 'CSS', icon: '🎯' },
    //     { name: 'HTML', icon: '📄' }
    // ]

    // Duplicate skills for seamless marquee loop
    const duplicatedSkills = [...skills, ...skills]

    return (
        <section id='skills' className="section-padding bg-[var(--bg-secondary)] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] mb-12 text-lg">
                        Technologies I work with every day
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="marquee-container py-8">
                <div className="flex animate-marquee">
                    {duplicatedSkills.map((skill, index) => <SkillElement key={skill.icon + index} skill={skill} />)}
                </div>
            </div>

            {/* Second row - reverse direction */}
            <div className="marquee-container py-8">
                <div className="flex animate-marquee" style={{ animationDirection: 'reverse' }}>
                    {[...duplicatedSkills].reverse().map((skill, index) => <SkillElement key={skill.icon + index} skill={skill} />)}
                </div>
            </div>
        </section>
    )
}

export default SkillsContainer