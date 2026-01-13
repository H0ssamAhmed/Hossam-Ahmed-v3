import { Skill as SkillType } from '@/app/types'
import React from 'react'

const SkillElement = ({ skill }: { skill: SkillType }) => {
    return (
        <div
            className="flex-shrink-0 mx-4 px-6 py-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:scale-105 cursor-default"
        >
            <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium whitespace-nowrap">{skill.name}</span>
            </div>
        </div>
    )
}

export default SkillElement