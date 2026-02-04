import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"


const WORDS = [

    { text: "React", color: "text-sky-500" },
    { text: "Next.js", color: "text-[var(--accent)]" },
    { text: "JavaScript", color: "text-yellow-400" },
    { text: "TypeScript", color: "text-blue-500" },
    { text: "TailwindCSS", color: "text-green-500" },
    { text: "HTML", color: "text-red-500" },
    { text: "CSS", color: "text-purple-500" },
    { text: "Git", color: "text-orange-500" },
    { text: "GitHub", color: "text-gray-500" },
    { text: "Docker", color: "text-teal-500" },
    { text: "Kubernetes", color: "text-indigo-500" },
]

export default function WordAnimation() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % WORDS.length)
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <span className="inline-block min-w-[140px] w-fit px-2  text-xl md:text-2xl text-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={WORDS[index].text}
                    initial={{ opacity: 1, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: -100 }}
                    transition={{ duration: 0.4 }}
                    className={`font-semibold ${WORDS[index].color}`}
                >
                    {WORDS[index].text}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}
