import React from 'react'

const Badge = ({ text }: { text: string }) => {
    return (
        <span className="inline-block px-3 py-1 bg-[var(--accent)] bg-opacity-10 text-white rounded-full text-sm font-medium mb-3">
            {text}
        </span>
    )
}

export default Badge