import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Zap } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import StaggeredAnimation from "@/components/staggered-animation"
import ParallaxElement from "@/components/parallax-element"
import CountUpAnimated from "@/components/count-up-animated"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <ParallaxElement speed={0.2} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        </ParallaxElement>
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About <span className="text-[#0db0fd]">Motion Age</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              We're a team of passionate digital experts committed to helping businesses thrive in the digital age.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fade-right">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/motion3d.jpg?height=1000&width=1000&text=Our Story"
                  alt="Motion Age Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2015, Motion Age began with a simple mission: to help businesses navigate the rapidly
                  evolving digital landscape with innovative solutions that drive real results.
                </p>
                <p>
                  What started as a small web development agency has grown into a full-service digital solutions
                  provider, offering everything from web and app development to graphic design, video editing, and SEO
                  optimization.
                </p>
                <p>
                  Our journey has been defined by our commitment to excellence, our passion for innovation, and our
                  dedication to our clients' success. We believe that great technology should be accessible to
                  businesses of all sizes, and we work tirelessly to make that vision a reality.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="zoom-in"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={150}
          >
            {[
              {
                icon: <Zap className="h-10 w-10 text-[#0db0fd]" />,
                title: "Innovation",
                description: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#0db0fd]" />,
                title: "Collaboration",
                description: "We work closely with our clients, treating their goals as our own.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#0db0fd]" />,
                title: "Excellence",
                description: "We hold ourselves to the highest standards in everything we do.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#0db0fd]" />,
                title: "Reliability",
                description: "We deliver on our promises, on time and within budget.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center border-2 border-transparent hover:border-[#0db0fd] transition-all"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 animate-float">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind Motion Age
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={100}
          >
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in digital technology, Alex leads our team with vision and expertise.",
              },
              {
                name: "Sarah Chen",
                role: "Creative Director",
                bio: "Sarah brings creative concepts to life with her exceptional design skills and artistic vision.",
              },
              {
                name: "Michael Rodriguez",
                role: "Lead Developer",
                bio: "Michael's technical expertise ensures our web and app solutions are robust, scalable, and innovative.",
              },
              // {
              //   name: "Emily Patel",
              //   role: "SEO Specialist",
              //   bio: "Emily's data-driven approach to SEO helps our clients achieve outstanding visibility and traffic growth.",
              // },
              {
                name: "David Kim",
                role: "Video Production Lead",
                bio: "David's storytelling ability and technical skills create compelling video content that engages audiences.",
              },
              // {
              //   name: "Jessica Taylor",
              //   role: "Project Manager",
              //   bio: "Jessica ensures our projects run smoothly, on time, and exceed client expectations.",
              // },
              // {
              //   name: "Robert Wilson",
              //   role: "UX Designer",
              //   bio: "Robert creates intuitive, user-centered designs that enhance the overall user experience.",
              // },
              // {
              //   name: "Olivia Martinez",
              //   role: "Client Success Manager",
              //   bio: "Olivia works closely with our clients to ensure their needs are met and their goals are achieved.",
              // },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-transparent hover:border-[#0db0fd] transition-all"
              >
                <div className="aspect-square bg-muted relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=${member.name}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#0db0fd] mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#0db0fd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {[
              { number: 8, suffix: "+", label: "Years of Experience" },
              { number: 200, suffix: "+", label: "Completed Projects" },
              { number: 50, suffix: "+", label: "Happy Clients" },
              { number: 15, suffix: "", label: "Team Members" },
            ].map((stat, index) => (
              <AnimatedElement key={index} animation="zoom-in" delay={index * 200} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-float">
                  <CountUpAnimated end={stat.number} suffix={stat.suffix} duration={2000} />
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work With Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help your business succeed in the digital age.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 animate-pulse">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
