import { Skill as SkillType } from '@/app/types'
import Image from 'next/image'
import React from 'react'

const SkillElement = ({ skill }: { skill: SkillType }) => {
    return (
        <div
            className="flex-shrink-0 mx-4 px-6 py-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:scale-105 cursor-default"
        >
            <div className="flex items-center gap-3">
                <div className='relative w-14 h-14 bg-white   rounded-xl'>

                    <Image className='p-3' src={skill.icon} fill alt={skill.name} />
                </div>
                <span className="font-medium whitespace-nowrap">{skill.name}</span>
            </div>
        </div>
    )
}

export default SkillElement