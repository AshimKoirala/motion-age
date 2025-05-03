"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursorClassName?: string
  showCursor?: boolean
  onComplete?: () => void
  threshold?: number
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className,
  cursorClassName,
  showCursor = true,
  onComplete,
  threshold = 0.1,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Intersection Observer to start typing when element is in view
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return

    let timeout: NodeJS.Timeout

    // Initial delay before starting to type
    timeout = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
          setIsComplete(true)
          if (onComplete) onComplete()
        }
      }, speed)

      return () => clearInterval(typingInterval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay, isVisible, onComplete])

  return (
  <span ref={ref} className={cn("inline-block", className)}>
    <span>{displayText}</span>
    {showCursor && (isTyping || !isComplete) && (
      <span className={cn("border-r-2 ml-0.5 animate-blink", cursorClassName)}>&nbsp;</span>
    )}
  </span>
);
}
