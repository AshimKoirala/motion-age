"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollToTopWithProgressProps {
  showAfter?: number
  position?: "bottom-right" | "bottom-left" | "bottom-center"
  className?: string
  size?: number
  strokeWidth?: number
}

export default function ScrollToTopWithProgress({
  showAfter = 300,
  position = "bottom-right",
  className,
  size = 50,
  strokeWidth = 3,
}: ScrollToTopWithProgressProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Position classes based on the position prop
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
  }

  // Calculate scroll progress and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY

      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      setScrollProgress(scrollPercentage)

      // Show/hide button based on scroll position
      if (window.scrollY > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // Initial check
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [showAfter])

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Calculate SVG parameters for the progress circle
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0db0fd] focus:ring-offset-2 rounded-full",
        positionClasses[position],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className,
      )}
      aria-label="Scroll to top"
      style={{ width: size, height: size }}
    >
      {/* SVG Progress Circle */}
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="rgba(13, 176, 253, 0.2)"
          fill="#ffffff"
          className="drop-shadow-md"
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#0db0fd"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* Arrow icon */}
        <foreignObject x="0" y="0" width={size} height={size}>
          <div className="h-full w-full flex items-center justify-center">
            <ArrowUp className="h-5 w-5 text-[#0db0fd]" />
          </div>
        </foreignObject>
      </svg>

      <span className="sr-only">Scroll to top</span>
    </button>
  )
}
