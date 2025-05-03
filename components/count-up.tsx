"use client"

import { useState, useEffect } from "react"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
}

export default function CountUp({ end, start = 0, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Set up Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(document.getElementById("stats-section") || document.body)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      const currentCount = progress * (end - start) + start

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [start, end, duration, isInView])

  return <>{count.toFixed(decimals)}</>
}
