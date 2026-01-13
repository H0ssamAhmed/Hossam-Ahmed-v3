'use client'

import React, { useEffect, useRef, useState } from 'react'

class Particle {
    x: number = 0
    y: number = 0
    baseX: number = 0
    baseY: number = 0
    size: number = 0
    length: number = 0
    angle: number = 0
    speed: number = 0
    vx: number = 0
    vy: number = 0
    friction: number = 0.92
    attractionRadius: number = 250
    attractionForce: number = 0.25
    opacity: number = 0

    constructor(width: number, height: number) {
        this.reset(width, height)
    }

    reset(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.baseX = this.x
        this.baseY = this.y
        this.size = 4
        this.length = 4
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.3 + 0.1
        this.vx = 0
        this.vy = 0
        this.friction = 0.92
        this.attractionRadius = 250
        this.attractionForce = 0.25
        this.opacity = Math.random() * 0.5 + 0.3
    }

    update(mouseX: number, mouseY: number) {
        // Calculate distance from mouse
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Attraction towards mouse when close
        if (distance < this.attractionRadius && distance > 0) {
            const force = (this.attractionRadius - distance) / this.attractionRadius
            const angle = Math.atan2(dy, dx)
            this.vx -= Math.cos(angle) * force * this.attractionForce * 20
            this.vy -= Math.sin(angle) * force * this.attractionForce * 20
        }

        // Return to base position when mouse is far
        const returnDx = this.baseX - this.x
        const returnDy = this.baseY - this.y
        this.vx += returnDx * 0.003
        this.vy += returnDy * 0.003

        // Apply velocity with friction
        this.vx *= this.friction
        this.vy *= this.friction
        this.x += this.vx
        this.y += this.vy

        // Slight floating animation
        this.angle += Math.sin(Date.now() * 0.001 + this.baseX) * 0.003
    }

    draw(ctx: CanvasRenderingContext2D, color: string) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        // Draw elongated particle (dash/fleck)
        ctx.beginPath()
        ctx.ellipse(0, 0, this.length, this.size, 0, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = this.opacity
        ctx.fill()

        ctx.restore()
    }
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const particlesRef = useRef<Particle[]>([])
    const animationRef = useRef<number | null>(null)
    const [particleColor, setParticleColor] = useState('#cc6b49')

    // Get the accent color from CSS variables on mount
    useEffect(() => {
        const updateColor = () => {
            const rootStyles = getComputedStyle(document.documentElement)
            const accent = rootStyles.getPropertyValue('--accent').trim()
            if (accent) {
                setParticleColor(accent)
            }
        }

        updateColor()

        // Listen for theme changes
        const observer = new MutationObserver(updateColor)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        // Initialize particles
        const particleCount = Math.min(6000, Math.floor((width * height) / 5000))
        particlesRef.current = Array.from(
            { length: particleCount },
            () => new Particle(width, height)
        )

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY,
            }
        }

        // Touch move handler for mobile
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouseRef.current = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                }
            }
        }

        // Handle resize
        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight

            // Reinitialize particles for new dimensions
            const newParticleCount = Math.min(200, Math.floor((width * height) / 10000))
            particlesRef.current = Array.from(
                { length: newParticleCount },
                () => new Particle(width, height)
            )
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Update and draw particles
            particlesRef.current.forEach((particle) => {
                particle.update(mouseRef.current.x, mouseRef.current.y)
                particle.draw(ctx, particleColor)
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('touchmove', handleTouchMove, { passive: true })
        window.addEventListener('resize', handleResize)

        // Start animation
        animate()

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('resize', handleResize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [particleColor])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none "
            style={{ opacity: 0.3 }}
        />
    )
}
