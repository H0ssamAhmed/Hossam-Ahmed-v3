import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Modern Web Developer',
  description: 'A modern, full-stack portfolio showcasing web development projects and articles',
  keywords: ['portfolio', 'web development', 'Next.js', 'React'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
