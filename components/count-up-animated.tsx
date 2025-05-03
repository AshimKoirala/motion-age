"use client"

import { useState, useEffect, useRef } from "react"

interface CountUpAnimatedProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: string
  decimal?: string
  className?: string
  threshold?: number
  easing?: (t: number) => number
  once?: boolean
}

export default function CountUpAnimated({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  decimal = ".",
  className,
  threshold = 0.1,
  easing = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Default easeOutExpo
  once = true,
}: CountUpAnimatedProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  // Format number with separators and decimals
  const formatNumber = (num: number) => {
    const fixedNum = num.toFixed(decimals)
    const [intPart, decimalPart] = fixedNum.split(".")

    // Add thousand separators to integer part
    const formattedIntPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

    // Combine with decimal part if exists
    return decimalPart !== undefined ? `${formattedIntPart}${decimal}${decimalPart}` : formattedIntPart
  }

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip if already animated and once is true
    if (once && hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
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

  // Animation effect
  useEffect(() => {
    if (!isVisible) {
      if (!once) setCount(start)
      return
    }

    startTimeRef.current = null

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easing(progress)

      const currentCount = start + (end - start) * easedProgress
      setCount(currentCount)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [start, end, duration, isVisible, easing, once])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
