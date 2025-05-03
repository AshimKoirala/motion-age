import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Laptop,
  Palette,
  Search,
  Video,
  Database,
  BarChart,
  MousePointer,
  FileText,
  CheckCircle,
  Users,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react"
import Carousel from "@/components/carousel"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import AnimatedElement from "@/components/animated-element"
import StaggeredAnimation from "@/components/staggered-animation"
import TypewriterText from "@/components/typewriter-text"
// import CountUpAnimated from "@/components/count-up-animated"
import ParallaxElement from "@/components/parallax-element"
import { blogPosts } from "@/lib/blog-data";


export default function Home() {
  // Hero and services carousel data
  const carouselItems = [
    {
      id: "hero",
      title: "Bringing Your Digital Vision to Life",
      description:
        "Motion Age is your partner in digital transformation. We create stunning websites, powerful apps, and engaging content that drives results.",
      image: "/banner1.jpeg?height=1080&width=1920&text=Motion Age",
      link: "/services",
      linkText: "Our Services",
      isHero: true,
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites that engage visitors and drive conversions with responsive designs and modern technologies.",
      image: "/webdev.jpg?height=1000&width=1600&text=Web Development",
      link: "/services#web-development",
      linkText: "Learn More",
    },
    {
      id: "app-development",
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
      image: "/appdev.jpg?height=1000&width=1600&text=App Development",
      link: "/services#app-development",
      linkText: "Learn More",
    },
    {
      id: "system-software-development",
      title: "System/Software Development",
      description:
        "Custom software solutions that streamline operations and boost productivity for businesses of all sizes.",
      image: "/system.jpg?height=1000&width=1600&text=Software Development",
      link: "/services#system-software-development",
      linkText: "Learn More",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Visual storytelling that captures your brand essence and communicates your message effectively.",
      image: "/graphicdesign.jpg?height=1000&width=1600&text=Graphic Design",
      link: "/services#graphic-design",
      linkText: "Learn More",
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Professional video content for all platforms that tells your story and keeps viewers engaged.",
      image: "/videoediting.jpg?height=1000&width=1600&text=Video Editing",
      link: "/services#video-editing",
      linkText: "Learn More",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Comprehensive strategies to grow your online presence and reach your target audience effectively.",
      image: "/digitalmarketing.jpg?height=1000&width=1600&text=Digital Marketing",
      link: "/services#digital-marketing",
      linkText: "Learn More",
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Improve visibility and drive organic traffic with strategic search engine optimization techniques.",
      image: "/seo.jpg?height=1000&width=1600&text=SEO Optimization",
      link: "/services#seo-optimization",
      linkText: "Learn More",
    },
    {
      id: "pay-per-click",
      title: "Pay Per Click",
      description: "Targeted advertising campaigns that deliver immediate results and maximize your ROI.",
      image: "/payperclick.jpg?height=1000&width=1600&text=Pay Per Click",
      link: "/services#pay-per-click",
      linkText: "Learn More",
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description: "Engaging, SEO-friendly content that connects with your audience and drives engagement.",
      image: "/contentwriting.jpg?height=1000&width=1600&text=Content Writing",
      link: "/services#content-writing",
      linkText: "Learn More",
    },
  ]

  // Client logos
  const clientLogos = [
    { name: "Client 1", logo: "/placeholder.svg?height=100&width=200&text=Client 1" },
    { name: "Client 2", logo: "/placeholder.svg?height=100&width=200&text=Client 2" },
    { name: "Client 3", logo: "/placeholder.svg?height=100&width=200&text=Client 3" },
    { name: "Client 4", logo: "/placeholder.svg?height=100&width=200&text=Client 4" },
    { name: "Client 5", logo: "/placeholder.svg?height=100&width=200&text=Client 5" },
    { name: "Client 6", logo: "/placeholder.svg?height=100&width=200&text=Client 6" },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations",
      role: "CEO",
      quote:
        "Motion Age transformed our online presence. Their web development team created a site that perfectly captures our brand and has significantly increased our conversions. The attention to detail and ongoing support have been exceptional.",
      image: "/placeholder.svg?height=200&width=200&text=Sarah",
    },
    {
      name: "Michael Chen",
      company: "GreenStart App",
      role: "Founder",
      quote:
        "The app Motion Age built for us exceeded all expectations. User-friendly, fast, and with all the features we needed. Our customers love it! Their team was responsive throughout the entire development process.",
      image: "/placeholder.svg?height=200&width=200&text=Michael",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Solutions",
      role: "Marketing Director",
      quote:
        "Their graphic design work is outstanding. Motion Age created a visual identity that perfectly represents our brand values and resonates with our audience. We've seen a significant increase in engagement since launching our new brand.",
      image: "/placeholder.svg?height=200&width=200&text=Emily",
    },
    {
      name: "David Wilson",
      company: "Global Retail",
      role: "E-commerce Manager",
      quote:
        "The SEO optimization services from Motion Age have transformed our online visibility. Our organic traffic has increased by 200% in just six months, and we're seeing much higher conversion rates. Highly recommended!",
      image: "/placeholder.svg?height=200&width=200&text=David",
    },
  ]

// Helper function to get random blog posts
function getRandomBlogPosts(count = 3) {
  // Create a copy of the blog posts array to avoid modifying the original
  const shuffled = [...blogPosts].sort(() => 0.5 - Math.random())
  // Return the first 'count' items
  return shuffled.slice(0, count)
}

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden">
        <Carousel items={carouselItems} />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Motion Age</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional digital solutions
            </p>
          </AnimatedElement>

          <StaggeredAnimation animation="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-[#0db0fd]" />,
                title: "Expertise",
                description: "Our team of specialists brings years of experience across all digital disciplines.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#0db0fd]" />,
                title: "Client-Focused",
                description: "We prioritize your goals and work collaboratively to achieve the best results.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-[#0db0fd]" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control ensure flawless execution of every project.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#0db0fd]" />,
                title: "Timely Delivery",
                description: "We respect deadlines and deliver projects on time without compromising quality.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-[#0db0fd] transition-all hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="bg-[#0db0fd]/10 p-3 rounded-full w-fit mb-4 animate-pulse">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              <TypewriterText
                text="Comprehensive digital solutions to help your business thrive in the modern age"
                speed={30}
                delay={500}
              />
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="zoom-in"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={100}
          >
            {[
              {
                icon: <Laptop className="h-6 w-6 text-[#0db0fd]" />,
                title: "Web Development",
                description: "Custom websites that engage visitors and drive conversions",
                link: "/services#web-development",
              },
              {
                icon: <Code className="h-6 w-6 text-[#0db0fd]" />,
                title: "App Development",
                description: "Native and cross-platform mobile applications",
                link: "/services#app-development",
              },
              {
                icon: <Database className="h-6 w-6 text-[#0db0fd]" />,
                title: "System/Software Dev",
                description: "Custom software solutions for your business needs",
                link: "/services#system-software-development",
              },
              {
                icon: <Palette className="h-6 w-6 text-[#0db0fd]" />,
                title: "Graphic Design",
                description: "Visual storytelling that captures your brand essence",
                link: "/services#graphic-design",
              },
              {
                icon: <Video className="h-6 w-6 text-[#0db0fd]" />,
                title: "Video Editing",
                description: "Professional video content for all platforms",
                link: "/services#video-editing",
              },
              {
                icon: <BarChart className="h-6 w-6 text-[#0db0fd]" />,
                title: "Digital Marketing",
                description: "Strategies to grow your online presence",
                link: "/services#digital-marketing",
              },
              {
                icon: <Search className="h-6 w-6 text-[#0db0fd]" />,
                title: "SEO Optimization",
                description: "Improve visibility and drive organic traffic",
                link: "/services#seo-optimization",
              },
              {
                icon: <MousePointer className="h-6 w-6 text-[#0db0fd]" />,
                title: "Pay Per Click",
                description: "Targeted advertising with immediate results",
                link: "/services#pay-per-click",
              },
              {
                icon: <FileText className="h-6 w-6 text-[#0db0fd]" />,
                title: "Content Writing",
                description: "Engaging content that connects with your audience",
                link: "/services#content-writing",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-transparent hover:border-[#0db0fd] transition-all group hover:shadow-lg"
              >
                <CardHeader>
                  <div className="bg-[#0db0fd]/10 p-3 rounded-full w-fit mb-4 group-hover:bg-[#0db0fd]/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={service.link}
                    className="text-[#0db0fd] font-medium inline-flex items-center group-hover:underline"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </StaggeredAnimation>

          <AnimatedElement animation="fade-up" delay={500} className="mt-12 text-center">
            <Button size="lg" className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 animate-pulse">
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with you to deliver exceptional results
            </p>
          </AnimatedElement>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#0db0fd]/30"></div>

            {/* Process steps */}
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
              <AnimatedElement
                key={index}
                animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                delay={index * 200}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 mb-4 md:mb-0 md:pr-8">
                    <div className={`md:text-right ${index % 2 === 1 ? "md:order-1 md:pl-8 md:pr-0" : ""}`}>
                      <div className="text-4xl font-bold text-[#0db0fd]/50 mb-2 animate-float">{step.number}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0db0fd] flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div
                    className={`md:w-1/2 md:pl-8 ${index % 2 === 1 ? "md:order-0 md:pl-0 md:pr-8 md:text-right" : ""}`}
                  ></div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#0db0fd]" id="stats-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {[
              { number: 8, suffix: "+", label: "Years of Experience" },
              { number: 200, suffix: "+", label: "Completed Projects" },
              { number: 50, suffix: "+", label: "Happy Clients" },
              { number: 15, suffix: "", label: "Team Members" },
            ].map((stat, index) => (
              <AnimatedElement key={index} animation="zoom-in" delay={index * 200} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center">
                  <CountUpAnimated end={stat.number} suffix={stat.suffix} duration={2000} className="animate-float" />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Work */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some of our recent projects
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={150}
          >
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                client: "Fashion Forward",
                image: "/placeholder.svg?height=600&width=600&text=Project 1",
              },
              {
                title: "Fitness Tracking App",
                category: "App Development",
                client: "FitLife",
                image: "/placeholder.svg?height=600&width=600&text=Project 2",
              },
              {
                title: "Brand Identity Redesign",
                category: "Graphic Design",
                client: "Urban Cafe",
                image: "/placeholder.svg?height=600&width=600&text=Project 3",
              },
              {
                title: "SEO Performance Overhaul",
                category: "SEO Optimization",
                client: "Legal Advisors",
                image: "/placeholder.svg?height=600&width=600&text=Project 4",
              },
              {
                title: "Product Launch Video",
                category: "Video Editing",
                client: "TechNova",
                image: "/placeholder.svg?height=600&width=600&text=Project 5",
              },
              {
                title: "Marketing Campaign",
                category: "Digital Marketing",
                client: "EcoLiving",
                image: "/placeholder.svg?height=600&width=600&text=Project 6",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-[#0db0fd] font-medium mb-1">{project.category}</span>
                  <h3 className="font-bold text-xl text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">Client: {project.client}</p>
                  {/* <Link
                    href={`/works/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-white font-medium text-sm"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link> */}
                </div>
              </div>
            ))}
          </StaggeredAnimation>

          <AnimatedElement animation="fade-up" delay={500} className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-[#0db0fd] text-[#0db0fd] hover:bg-[#0db0fd]/10">
              <Link href="/works">View All Projects</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-up">
            <TestimonialsCarousel testimonials={testimonials} />
          </AnimatedElement>
        </div>
      </section>

      {/* Clients/Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Clients</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies across industries
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="fade-up"
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            staggerDelay={100}
          >
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="w-32 h-20 md:w-40 md:h-24 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            staggerDelay={150}
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
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-[#0db0fd] transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>

          <AnimatedElement animation="fade-up" delay={500} className="mt-12 text-center">
            <Button variant="outline" className="border-[#0db0fd] text-[#0db0fd] hover:bg-[#0db0fd]/10">
              <Link href="/contact#faq">View All FAQs</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Latest from Our Blog</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and trends from our experts
            </p>
          </AnimatedElement>

          {/* Featured Blog Post */}
          <AnimatedElement animation="fade-up" className="mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <ParallaxElement speed={0.15} className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
                <Image
                  src={blogPosts[0].coverImage || "/placeholder.svg?height=600&width=1200&text=Featured Blog"}
                  alt={blogPosts[0].title}
                  width={1200}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </ParallaxElement>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#0db0fd] text-white px-3 py-1 rounded-full text-sm">Featured</span>
                  <span className="text-white/80 text-sm">{blogPosts[0].date}</span>
                  <span className="text-white/80 text-sm">•</span>
                  <span className="text-white/80 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">{blogPosts[0].title}</h3>
                <p className="text-white/90 mb-6 max-w-3xl">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative">
                    <Image
                      src={blogPosts[0].author.avatar || "/placeholder.svg?height=100&width=100"}
                      alt={blogPosts[0].author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-medium">{blogPosts[0].author.name}</div>
                  </div>
                </div>
                <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 animate-pulse">
                  <Link href={`/blog/${blogPosts[0].slug}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>

          {/* Blog Posts Grid */}
          <StaggeredAnimation animation="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
            {getRandomBlogPosts().map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden border-2 border-transparent hover:border-[#0db0fd] transition-all hover:shadow-lg"
              >
                <div className="aspect-video bg-muted relative">
                  <Image
                    src={post.coverImage || `/placeholder.svg?height=400&width=600&text=${post.category}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {index === 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      Trending
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-[#0db0fd]/10 text-[#0db0fd] px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden relative">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{post.author.name}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="text-[#0db0fd] font-medium inline-flex items-center">
                    Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </StaggeredAnimation>

          <AnimatedElement animation="fade-up" delay={500} className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-[#0db0fd] text-[#0db0fd] hover:bg-[#0db0fd]/10">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0db0fd] to-[#0d8fd0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Let's work together to bring your vision to life. Our team of experts is ready to help you achieve your
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#0db0fd] hover:bg-white/90 animate-pulse">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0db0fd] hover:bg-white/90 animate-pulse">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
