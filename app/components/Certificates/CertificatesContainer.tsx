'use client'
import React from 'react'
import { motion } from "motion/react"
import { certificates } from '@/app/data/certificates'
import CertificateCard from './CertificateCard'
import { Certificate } from '@/app/types'

const CertificatesContainer = ({ certificates }: { certificates: Certificate[] }) => {
    return (
        <section id="certificates" className="section-padding bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Certificates
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] mb-12 text-lg">
                        Professional certifications I&apos;ve earned
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificatesContainer