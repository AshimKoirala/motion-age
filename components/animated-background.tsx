"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
  particleColor?: string
  particleCount?: number
  particleSize?: number
  particleSpeed?: number
  particleOpacity?: number
}

export default function AnimatedBackground({
  children,
  className,
  particleColor = "currentColor",
  particleCount = 50,
  particleSize = 3,
  particleSpeed = 1,
  particleOpacity = 0.3,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Initialize particles
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }>
  >([])

  // Set up canvas and particles
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateDimensions = () => {
      if (container) {
        setDimensions({
          width: container.offsetWidth,
          height: container.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * particleSize + 1,
      speedX: (Math.random() - 0.5) * particleSpeed,
      speedY: (Math.random() - 0.5) * particleSpeed,
      opacity: Math.random() * particleOpacity + 0.1,
    }))
  }, [dimensions, particleCount, particleSize, particleSpeed, particleOpacity])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${hexToRgb(particleColor)}, ${particle.opacity})`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY = -particle.speedY
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, particleColor])

  // Helper function to convert hex to rgb
  function hexToRgb(hex: string): string {
    // Default to white if not a valid hex
    if (!hex.startsWith("#")) return "255, 255, 255"

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const formattedHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formattedHex)
    return result
      ? `${Number.parseInt(result[1], 16)}, ${Number.parseInt(result[2], 16)}, ${Number.parseInt(result[3], 16)}`
      : "255, 255, 255"
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.7 }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
