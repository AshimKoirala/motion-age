"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number // Positive values move slower, negative values move faster
  direction?: "vertical" | "horizontal"
  className?: string
  reverse?: boolean
}

export default function ParallaxElement({
  children,
  speed = 0.2,
  direction = "vertical",
  className,
  reverse = false,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [elementTop, setElementTop] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  // Calculate the transform value based on scroll position
  const calculateTransform = () => {
    if (!isInView) return "none"

    const actualSpeed = reverse ? -speed : speed

    if (direction === "vertical") {
      return `translateY(${offset * actualSpeed}px)`
    } else {
      return `translateX(${offset * actualSpeed}px)`
    }
  }

  // Set up intersection observer to detect when element is in viewport
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting) {
          const rect = element.getBoundingClientRect()
          setElementTop(rect.top + window.scrollY)
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(element)
    setWindowHeight(window.innerHeight)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Update offset on scroll
  useEffect(() => {
    if (!isInView) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const elementPosition = elementTop - windowHeight
      const newOffset = scrollPosition - elementPosition
      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isInView, elementTop, windowHeight])

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        transform: calculateTransform(),
      }}
    >
      {children}
    </div>
  )
}
