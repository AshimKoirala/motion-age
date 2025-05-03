"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
  showAfter?: number // Show button after scrolling this many pixels
  position?: "bottom-right" | "bottom-left" | "bottom-center"
  className?: string
}

export default function ScrollToTop({ showAfter = 300, position = "bottom-right", className }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Position classes based on the position prop
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
  }

  // Check scroll position and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
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

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed z-50 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0db0fd] focus:ring-offset-2",
        positionClasses[position],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        "bg-[#0db0fd] text-white hover:bg-[#0db0fd]/90",
        className,
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Scroll to top</span>
    </button>
  )
}
