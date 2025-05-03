"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  imageClassName?: string
  revealDirection?: "left" | "right" | "top" | "bottom"
  revealDuration?: number
  revealDelay?: number
  threshold?: number
  fill?: boolean
  priority?: boolean
  sizes?: string
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  revealDirection = "left",
  revealDuration = 800,
  revealDelay = 0,
  threshold = 0.1,
  fill = false,
  priority = false,
  sizes,
}: ImageRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: "10px",
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  // Determine overlay styles based on reveal direction
  const getOverlayStyles = () => {
    const baseStyles = {
      position: "absolute",
      backgroundColor: "currentColor",
      transition: `transform ${revealDuration}ms cubic-bezier(0.65, 0, 0.35, 1) ${revealDelay}ms`,
      zIndex: 1,
    }

    switch (revealDirection) {
      case "left":
        return {
          ...baseStyles,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: isRevealed ? "translateX(-100%)" : "translateX(0)",
          transformOrigin: "right",
        }
      case "right":
        return {
          ...baseStyles,
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          transform: isRevealed ? "translateX(100%)" : "translateX(0)",
          transformOrigin: "left",
        }
      case "top":
        return {
          ...baseStyles,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: isRevealed ? "translateY(-100%)" : "translateY(0)",
          transformOrigin: "bottom",
        }
      case "bottom":
        return {
          ...baseStyles,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: isRevealed ? "translateY(100%)" : "translateY(0)",
          transformOrigin: "top",
        }
      default:
        return baseStyles
    }
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div style={getOverlayStyles() as React.CSSProperties} />
      <div
        className={cn("relative z-0", imageClassName)}
        style={{
          opacity: isRevealed ? 1 : 0,
          transition: `opacity 300ms ease ${revealDuration + revealDelay}ms`,
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  )
}
