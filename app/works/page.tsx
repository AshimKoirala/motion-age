"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import StaggeredAnimation from "@/components/staggered-animation"
import ParallaxElement from "@/components/parallax-element"
import ImageReveal from "@/components/image-reveal"
import TextGradient from "@/components/text-gradient"

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" },
    { id: "design", name: "Graphic Design" },
    { id: "marketing", name: "Digital Marketing" },
    { id: "video", name: "Video Production" },
  ]

  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      category: "web",
      client: "Fashion Forward",
      description:
        "A fully responsive e-commerce platform with advanced filtering, secure payments, and customer accounts.",
      image: "/placeholder.svg?height=600&width=600&text=Project 1",
      featured: true,
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      category: "app",
      client: "FitLife",
      description:
        "A mobile app that helps users track workouts, set goals, and monitor their fitness progress over time.",
      image: "/placeholder.svg?height=600&width=600&text=Project 2",
      featured: false,
    },
    {
      id: "brand-identity",
      title: "Brand Identity Redesign",
      category: "design",
      client: "Urban Cafe",
      description: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines.",
      image: "/placeholder.svg?height=600&width=600&text=Project 3",
      featured: false,
    },
    {
      id: "seo-overhaul",
      title: "SEO Performance Overhaul",
      category: "marketing",
      client: "Legal Advisors",
      description: "Comprehensive SEO strategy that increased organic traffic by 200% and improved search rankings.",
      image: "/placeholder.svg?height=600&width=600&text=Project 4",
      featured: false,
    },
    {
      id: "product-video",
      title: "Product Launch Video",
      category: "video",
      client: "TechNova",
      description:
        "Engaging product launch video that showcased features and benefits, resulting in a successful launch.",
      image: "/placeholder.svg?height=600&width=600&text=Project 5",
      featured: false,
    },
    {
      id: "marketing-campaign",
      title: "Marketing Campaign",
      category: "marketing",
      client: "EcoLiving",
      description:
        "Multi-channel marketing campaign that increased brand awareness and drove a 150% increase in leads.",
      image: "/placeholder.svg?height=600&width=600&text=Project 6",
      featured: false,
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "web",
      client: "Taste of Italy",
      description: "Modern, responsive website with online ordering, reservations, and menu management system.",
      image: "/placeholder.svg?height=600&width=600&text=Project 7",
      featured: false,
    },
    {
      id: "travel-app",
      title: "Travel Planning App",
      category: "app",
      client: "Wanderlust",
      description: "Mobile app that helps users plan trips, discover attractions, and share their travel experiences.",
      image: "/placeholder.svg?height=600&width=600&text=Project 8",
      featured: false,
    },
    {
      id: "packaging-design",
      title: "Product Packaging Design",
      category: "design",
      client: "Organic Essentials",
      description: "Eye-catching packaging design that improved shelf presence and aligned with brand values.",
      image: "/placeholder.svg?height=600&width=600&text=Project 9",
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)
  const featuredProject = projects.find((project) => project.featured)

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
              Our <TextGradient text="Work" gradientColors={["#0db0fd", "#0d8fd0", "#0a6fa3", "#0db0fd"]} />
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Explore our portfolio of successful projects across various industries
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${
                  activeFilter === category.id ? "bg-[#0db0fd] hover:bg-[#0db0fd]/90" : "hover:bg-[#0db0fd]/10"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </AnimatedElement>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={150}
          >
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all border-0"
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <ImageReveal
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    revealDirection={Math.random() > 0.5 ? "left" : "right"}
                    revealDelay={Math.random() * 200}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-sm text-[#0db0fd] font-medium mb-1">
                      {categories.find((cat) => cat.id === project.category)?.name}
                    </span>
                    <h3 className="font-bold text-xl text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4">Client: {project.client}</p>
                    {/* <Link
                      href={`/works/${project.id}`}
                      className="inline-flex items-center text-white font-medium text-sm"
                    >
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link> */}
                  </div>
                </div>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Featured Case Study */}
      {/* {featuredProject && (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Case Study</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                An in-depth look at one of our most successful projects
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedElement animation="fade-right">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                  <ImageReveal
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    revealDirection="left"
                    className="w-full h-full"
                  />
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h3>
                <p className="text-[#0db0fd] mb-4">Client: {featuredProject.client}</p>
                <p className="text-lg text-muted-foreground mb-6">{featuredProject.description}</p>
                <p className="text-lg text-muted-foreground mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
                <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 animate-pulse">
                  <Link href={`/works/${featuredProject.id}`}>View Full Case Study</Link>
                </Button>
              </AnimatedElement>
            </div>
          </div>
        </section>
      )} */}

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </AnimatedElement>

          <StaggeredAnimation animation="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={200}>
            {[
              {
                quote:
                  "Motion Age transformed our online presence with a website that perfectly captures our brand. Their attention to detail and ongoing support have been exceptional.",
                name: "Sarah Johnson",
                role: "CEO",
                company: "Fashion Forward",
                image: "/placeholder.svg?height=100&width=100&text=Sarah",
              },
              {
                quote:
                  "The app Motion Age built for us exceeded all expectations. User-friendly, fast, and with all the features we needed. Our customers love it!",
                name: "Michael Chen",
                role: "Founder",
                company: "FitLife",
                image: "/placeholder.svg?height=100&width=100&text=Michael",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-4xl text-[#0db0fd]">"</div>
                  <p className="text-lg mb-8 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#0db0fd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              { number: 95, suffix: "%", label: "Client Satisfaction Rate" },
              { number: 200, suffix: "+", label: "Completed Projects" },
              { number: 15, suffix: "+", label: "Industry Awards" },
            ].map((stat, index) => (
              <AnimatedElement key={index} animation="zoom-in" delay={index * 200} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-float">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-muted-foreground mb-10">
              Let's discuss how we can help bring your vision to life with our expertise and creativity.
            </p>
            <Button size="lg" className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 animate-pulse">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
