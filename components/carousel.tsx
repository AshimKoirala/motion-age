"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

type CarouselProps = {
  items: {
    id: string
    title: string
    description: string
    image: string
    link: string
    linkText: string
    isHero?: boolean
  }[]
  autoPlay?: boolean
  interval?: number
  pauseOnHover?: boolean
}

export default function Carousel({ items, autoPlay = true, interval = 2500, pauseOnHover = true }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Touch handling
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToNext = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 700) // Match this with the CSS transition duration
  }, [items.length, isTransitioning])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 700) // Match this with the CSS transition duration
  }, [items.length, isTransitioning])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 700)
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

  // Progress bar animation
  const progressBarWidth = `${((currentIndex + 1) / items.length) * 100}%`

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-2xl"
      // onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      // onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured content carousel"
    >
      {/* Carousel container */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full" aria-live="polite">
        {items.map((item, index) => {
          const isCurrentSlide = index === currentIndex
          const isNextSlide = index === (currentIndex + 1) % items.length
          const isPrevSlide = index === (currentIndex - 1 + items.length) % items.length

          return (
            <div
              key={index}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                isCurrentSlide
                  ? "opacity-100 z-10 translate-x-0"
                  : isNextSlide
                    ? "opacity-0 z-0 translate-x-full"
                    : isPrevSlide
                      ? "opacity-0 z-0 -translate-x-full"
                      : "opacity-0 z-0",
              )}
              aria-hidden={!isCurrentSlide}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}: ${item.title}`}
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover scale-110 transition-transform duration-[15s] ease-in-out"
                  style={{
                    transform: isCurrentSlide ? "scale(1)" : "scale(1.1)",
                  }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 animate-fadeIn">
                {item.isHero ? (
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 opacity-0 animate-slideUp">
                      {item.title.split(" ").map((word, i) =>
                        i === 3 ? (
                          <span key={i} className="text-[#0db0fd]">
                            {word}{" "}
                          </span>
                        ) : (
                          <span key={i}>{word} </span>
                        ),
                      )}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-slideUp animation-delay-200">
                      {item.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slideUp animation-delay-400">
                      <Button size="lg" className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                      <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-white/20">
                        <Link href="/services">Our Services</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 opacity-0 animate-slideUp">
                      {item.title}
                    </h2>
                    <p className="text-white/90 max-w-2xl mb-8 opacity-0 animate-slideUp animation-delay-200">
                      {item.description}
                    </p>
                    <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 opacity-0 animate-slideUp animation-delay-400">
                      <Link href={item.link}>{item.linkText}</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0db0fd] focus:ring-offset-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0db0fd] focus:ring-offset-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0db0fd] focus:ring-offset-2",
              index === currentIndex ? "bg-[#0db0fd] w-10" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-20">
        <div
          className="h-full bg-[#0db0fd] transition-all duration-1000 ease-linear"
          style={{ width: progressBarWidth }}
        ></div>
      </div>

      {/* Pause/Play indicator (only shows when hovered) */}
      {/* {isPaused && (
        <div className="absolute top-4 right-4 z-20 bg-black/30 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          Paused
        </div>
      )} */}

      {/* Slide counter */}
      {/* <div className="absolute top-4 left-4 z-20 bg-black/30 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
        {currentIndex + 1} / {items.length}
      </div> */}
    </div>
  )
}
