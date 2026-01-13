import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/" className="text-2xl md:text-3xl font-bold font-serif">
            <span className="text-[var(--accent)]">Port</span>
            <span className="text-[var(--text-primary)]">folio</span>
        </Link>

    )
}

export default Logo