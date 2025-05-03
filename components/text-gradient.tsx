"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TextGradientProps {
  text: string
  className?: string
  gradientColors?: string[]
  duration?: number
  angle?: number
  animateOnHover?: boolean
}

export default function TextGradient({
  text,
  className,
  gradientColors = ["#0db0fd", "#0d8fd0", "#0a6fa3", "#0db0fd"],
  duration = 3000,
  angle = 45,
  animateOnHover = false,
}: TextGradientProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [gradientPosition, setGradientPosition] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animateOnHover && !isHovering) return

    const animate = () => {
      setGradientPosition((prev) => (prev + 1) % 100)
    }

    const intervalId = setInterval(animate, duration / 100)

    return () => {
      clearInterval(intervalId)
    }
  }, [duration, animateOnHover, isHovering])

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${gradientColors.join(", ")})`,
    backgroundSize: "200% 200%",
    backgroundPosition: `${gradientPosition}% 50%`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    transition: "background-position 0.1s ease",
  }

  return (
    <div
      ref={elementRef}
      className={cn("inline-block", className)}
      style={gradientStyle}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {text}
    </div>
  )
}
