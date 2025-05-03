"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type TestimonialProps = {
  testimonials: {
    name: string
    company: string
    role: string
    quote: string
    image: string
  }[]
  autoPlay?: boolean
  interval?: number
  pauseOnHover?: boolean
}

export default function TestimonialsCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
  pauseOnHover = true,
}: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Touch handling
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToNext = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }, [testimonials.length, isTransitioning])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }, [testimonials.length, isTransitioning])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return

    const intervalId = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoPlay, interval, goToNext, isPaused])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [goToNext, goToPrevious])

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current

    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 50

    if (touchDiff > minSwipeDistance) {
      // Swiped left, go to next slide
      goToNext()
    } else if (touchDiff < -minSwipeDistance) {
      // Swiped right, go to previous slide
      goToPrevious()
    }

    // Reset touch positions
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Testimonials carousel"
    >
      {/* Testimonials container */}
      <div className="relative bg-background rounded-xl shadow-lg p-8 md:p-12 overflow-hidden" aria-live="polite">
        <div className="absolute top-6 left-6 text-[#0db0fd]/20">
          <Quote className="h-24 w-24" />
        </div>

        {testimonials.map((testimonial, index) => {
          const isCurrentSlide = index === currentIndex

          return (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-in-out",
                isCurrentSlide ? "opacity-100 transform-none" : "opacity-0 absolute inset-0 translate-x-8",
              )}
              aria-hidden={!isCurrentSlide}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}: ${testimonial.name}`}
            >
              <div className="relative z-10">
                <p className="text-lg md:text-xl italic mb-8 text-muted-foreground">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-[#0db0fd]">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white shadow-lg hover:bg-gray-100 text-[#0db0fd] p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0db0fd]"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white shadow-lg hover:bg-gray-100 text-[#0db0fd] p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0db0fd]"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0db0fd]",
              index === currentIndex ? "bg-[#0db0fd] w-6" : "bg-[#0db0fd]/30 hover:bg-[#0db0fd]/50",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
