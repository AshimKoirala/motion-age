"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Code, Laptop, Palette, Search, Video, Database, BarChart, MousePointer, FileText } from "lucide-react"
import { useSearchParams } from "next/navigation"
import AnimatedElement from "@/components/animated-element"
import StaggeredAnimation from "@/components/staggered-animation"
import ParallaxElement from "@/components/parallax-element"

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const serviceRefs = {
    "web-development": useRef<HTMLElement>(null),
    "app-development": useRef<HTMLElement>(null),
    "graphic-design": useRef<HTMLElement>(null),
    "video-editing": useRef<HTMLElement>(null),
    "seo-optimization": useRef<HTMLElement>(null),
    "system-software-development": useRef<HTMLElement>(null),
    "digital-marketing": useRef<HTMLElement>(null),
    "pay-per-click": useRef<HTMLElement>(null),
    "content-writing": useRef<HTMLElement>(null),
  }

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash && serviceRefs[hash as keyof typeof serviceRefs]?.current) {
      setTimeout(() => {
        serviceRefs[hash as keyof typeof serviceRefs].current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [searchParams])

  const services = [
    {
      id: "web-development",
      icon: <Laptop className="h-10 w-10 text-[#0db0fd]" />,
      title: "Web Development",
      description: "Custom websites that engage visitors and drive conversions",
      features: [
        "Responsive design for all devices",
        "E-commerce solutions",
        "Content management systems",
        "Custom web applications",
        "Website maintenance and support",
        "Performance optimization",
      ],
      image: "/webdev.jpg?height=600&width=800&text=Web Development",
    },
    {
      id: "app-development",
      icon: <Code className="h-10 w-10 text-[#0db0fd]" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "App testing and quality assurance",
        "App store submission",
        "Ongoing maintenance and updates",
      ],
      image: "/appdev.jpg?height=600&width=800&text=App Development",
    },
    {
      id: "system-software-development",
      icon: <Database className="h-10 w-10 text-[#0db0fd]" />,
      title: "System/Software Development",
      description: "Custom software solutions to streamline your business operations",
      features: [
        "Enterprise software development",
        "Cloud-based solutions",
        "Database design and management",
        "API development and integration",
        "Legacy system modernization",
        "DevOps and continuous integration",
      ],
      image: "/system.jpg?height=600&width=800&text=Software Development",
    },
    {
      id: "graphic-design",
      icon: <Palette className="h-10 w-10 text-[#0db0fd]" />,
      title: "Graphic Design",
      description: "Visual storytelling that captures your brand essence",
      features: [
        "Logo design and brand identity",
        "Marketing materials",
        "Social media graphics",
        "Packaging design",
        "Infographics and data visualization",
        "Print design",
      ],
      image: "/graphicdesign.jpg?height=600&width=800&text=Graphic Design",
    },
    {
      id: "video-editing",
      icon: <Video className="h-10 w-10 text-[#0db0fd]" />,
      title: "Video Editing",
      description: "Professional video content for all platforms",
      features: [
        "Commercial and promotional videos",
        "Social media content",
        "Motion graphics and animation",
        "Product demonstrations",
        "Event coverage",
        "Video optimization for different platforms",
      ],
      image: "/videoediting.jpg?height=600&width=800&text=Video Editing",
    },
    {
      id: "digital-marketing",
      icon: <BarChart className="h-10 w-10 text-[#0db0fd]" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence",
      features: [
        "Marketing strategy development",
        "Social media marketing",
        "Email marketing campaigns",
        "Content marketing",
        "Analytics and performance tracking",
        "Conversion rate optimization",
      ],
      image: "/digitalmarketing.jpg?height=600&width=800&text=Digital Marketing",
    },
    {
      id: "seo-optimization",
      icon: <Search className="h-10 w-10 text-[#0db0fd]" />,
      title: "SEO Optimization",
      description: "Improve visibility and drive organic traffic",
      features: [
        "Keyword research and strategy",
        "On-page and off-page optimization",
        "Content strategy",
        "Technical SEO",
        "Local SEO",
        "Analytics and reporting",
      ],
      image: "/seo.jpg?height=600&width=800&text=SEO Optimization",
    },
    {
      id: "pay-per-click",
      icon: <MousePointer className="h-10 w-10 text-[#0db0fd]" />,
      title: "Pay Per Click",
      description: "Targeted advertising campaigns that deliver immediate results",
      features: [
        "Google Ads management",
        "Social media advertising",
        "Display advertising",
        "Remarketing campaigns",
        "Ad copywriting and design",
        "Budget optimization and ROI tracking",
      ],
      image: "/payperclick.jpg?height=600&width=800&text=Pay Per Click",
    },
    {
      id: "content-writing",
      icon: <FileText className="h-10 w-10 text-[#0db0fd]" />,
      title: "Content Writing",
      description: "Engaging, SEO-friendly content that connects with your audience",
      features: [
        "Blog posts and articles",
        "Website copy",
        "Product descriptions",
        "Email newsletters",
        "White papers and case studies",
        "Social media content",
      ],
      image: "/contentwriting.jpg?height=600&width=800&text=Content Writing",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-20 overflow-hidden">
        <ParallaxElement speed={0.2} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        </ParallaxElement>
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our <span className="text-[#0db0fd]">Services</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            staggerDelay={100}
          >
            {services.map((service) => (
              <Card key={service.id} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardHeader>
                  <div className="bg-[#0db0fd]/10 p-3 rounded-full w-fit mb-4 animate-pulse">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`#${service.id}`}
                    className="text-[#0db0fd] font-medium"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(service.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          ref={serviceRefs[service.id as keyof typeof serviceRefs]}
          className={`py-20 ${index % 2 === 1 ? "bg-accent" : ""}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <AnimatedElement
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={index % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="animate-pulse">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="bg-[#0db0fd]/10 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#0db0fd]" />
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 animate-pulse">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </AnimatedElement>
              <AnimatedElement
                animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                className={index % 2 === 1 ? "lg:col-start-1" : ""}
              >
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with you to deliver exceptional results
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="zoom-in"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={150}
          >
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth consultation.",
              },
              {
                number: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy tailored to your specific needs and objectives.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Our team executes the strategy with precision, keeping you informed every step of the way.",
              },
              {
                number: "04",
                title: "Refinement",
                description:
                  "We continuously monitor, test, and refine our work to ensure optimal performance and results.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardHeader>
                  <div className="text-4xl font-bold text-[#0db0fd]/50 mb-2 animate-float">{step.number}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about our services
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            staggerDelay={100}
          >
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex app could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We offer flexible pricing options including project-based, hourly, and retainer models. Each project is unique, so we provide custom quotes based on your specific requirements.",
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally.",
              },
              {
                question: "How do you handle revisions and feedback?",
                answer:
                  "Client feedback is integral to our process. We include revision rounds in our project plans and maintain open communication throughout to ensure your satisfaction.",
              },
              {
                question: "Can you work with my existing brand guidelines?",
                answer:
                  "Absolutely. We can work with your existing brand guidelines or help you develop new ones if needed.",
              },
              {
                question: "Do you provide training for content management systems?",
                answer:
                  "Yes, we provide comprehensive training for any CMS or tools we implement, ensuring your team can confidently manage your digital assets.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0db0fd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-white/90">
              Contact us today to discuss your project and how we can help you achieve your goals.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="bg-white text-[#0db0fd] hover:bg-white/90 animate-pulse">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
