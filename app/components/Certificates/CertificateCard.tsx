import React from 'react'
import { motion } from "motion/react"
import { Certificate } from '@/app/types'

const CertificateCard = ({ cert, index }: { cert: Certificate, index: number }) => {
    return (
        <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all group cursor-default"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ backgroundColor: `${cert.color}20` }}>
                    {cert.icon}
                </div>
                <div>
                    <h3 className="font-bold group-hover:text-[var(--accent)] transition-colors">{cert.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{cert.issuer}</p>
                </div>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--text-secondary)]">{cert.date}</span>
                <span className="px-3 py-1 bg-[var(--bg-primary)] rounded-full text-xs font-mono text-[var(--text-secondary)]">
                    {cert.credentialId}
                </span>
            </div>
        </motion.div>)
}

export default CertificateCard