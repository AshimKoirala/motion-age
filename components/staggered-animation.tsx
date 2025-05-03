"use client"

import { useState, useEffect, useRef, type ReactNode, Children, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"
import type { AnimationType } from "./animated-element"

interface StaggeredAnimationProps {
  children: ReactNode
  animation: AnimationType
  staggerDelay?: number
  initialDelay?: number
  duration?: number
  threshold?: number
  className?: string
  childClassName?: string
  once?: boolean
  easing?: string
}

export default function StaggeredAnimation({
  children,
  animation,
  staggerDelay = 100,
  initialDelay = 0,
  duration = 800,
  threshold = 0.1,
  className,
  childClassName,
  once = true,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
}: StaggeredAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
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

  // Clone children and add staggered animation styles
  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child

    const delay = initialDelay + index * staggerDelay

    const animationStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "none" : getInitialTransform(animation),
      transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
    }

    return cloneElement(child, {
      style: { ...child.props.style, ...animationStyles },
      className: cn(child.props.className, childClassName),
    })
  })

  return (
    <div ref={ref} className={className}>
      {staggeredChildren}
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
