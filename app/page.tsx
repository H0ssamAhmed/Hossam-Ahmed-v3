import React, { useEffect } from 'react'
import { projects } from './data/projects'
import FeaturedProject from './components/Project/FeaturedProject'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import SkillsContainer from './components/Skills/SkillsContainer'
import ExperienceContainer from './components/Experience/ExperienceContainer'
import Contact from './components/Contact/Contact'
import EducationContainer from './components/Education/EducationContainer'
import CertificatesContainer from './components/Certificates/CertificatesContainer'


async function getProjects() {
    const res = await fetch(`${process.env.BASE_URL}/home`, {
        cache: 'no-store', // SSR
    })
    return res.json()
}
export default async function Home() {
    const home = await getProjects()
    console.log(home.data.projects);

    return (
        <main>
            {/* Hero Section */}
            <Hero />
            {/* About Section - Redesigned with Photo */}
            <About />

            {/* Skills Section - Endless Marquee */}
            <SkillsContainer skills={home.data.skills} />

            {/* Experience Section */}
            <ExperienceContainer experiences={home.data.experiences} />

            {/* Education Section */}
            <EducationContainer />

            {/* Certificates Section */}
            <CertificatesContainer certificates={home.data.certificates} />

            {/* Featured Projects Section */}
            <FeaturedProject projects={home.data.projects} />

            {/* Contact Section */}
            <Contact />
        </main>
    )
}
