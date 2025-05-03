"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export type AnimationType =
  | "fade-in"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip"
  | "rotate"
  | "bounce"
  | "pulse"
  | "shake"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"

interface AnimatedElementProps {
  children: ReactNode
  animation: AnimationType
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
  className?: string
  animateOnMount?: boolean
  easing?: string
}

export default function AnimatedElement({
  children,
  animation,
  duration = 800,
  delay = 0,
  threshold = 0.1,
  once = true,
  className,
  animateOnMount = false,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(animateOnMount)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip if already animated and once is true
    if (once && hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasAnimated(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
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
  }, [threshold, once, hasAnimated])

  // Base styles for the animated element
  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : getInitialTransform(animation),
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
  }

  // Additional animation classes
  const animationClass = isVisible ? getAnimationClass(animation) : ""

  return (
    <div ref={ref} className={cn(className, animationClass)} style={animationStyles}>
      {children}
    </div>
  )
}

// Helper function to get the initial transform based on animation type
function getInitialTransform(animation: AnimationType): string {
  switch (animation) {
    case "fade-up":
      return "translateY(20px)"
    case "fade-down":
      return "translateY(-20px)"
    case "fade-left":
      return "translateX(20px)"
    case "fade-right":
      return "translateX(-20px)"
    case "zoom-in":
      return "scale(0.9)"
    case "zoom-out":
      return "scale(1.1)"
    case "flip":
      return "perspective(400px) rotateY(90deg)"
    case "rotate":
      return "rotate(-5deg)"
    case "slide-up":
      return "translateY(50px)"
    case "slide-down":
      return "translateY(-50px)"
    case "slide-left":
      return "translateX(50px)"
    case "slide-right":
      return "translateX(-50px)"
    default:
      return "none"
  }
}

// Helper function to get additional animation classes
function getAnimationClass(animation: AnimationType): string {
  switch (animation) {
    case "bounce":
      return "animate-bounce"
    case "pulse":
      return "animate-pulse"
    case "shake":
      return "animate-shake"
    default:
      return ""
  }
}
