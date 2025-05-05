import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, DollarSign, Heart, MapPin, Smile, Star, Users } from "lucide-react"
import { jobOpenings } from "@/lib/job-data"

export default function CareersPage() {
  const steps = [
  {
    title: "Application Review",
    description:
      "Our hiring team reviews your application and resume to assess your qualifications and experience.",
    duration: "1–2 weeks",
  },
  {
    title: "Initial Interview",
    description:
      "A video or phone call with our hiring manager to discuss your background, skills, and interest in the role.",
    duration: "30–45 minutes",
  },
  {
    title: "Technical Assessment",
    description:
      "Depending on the role, you may be asked to complete a skills assessment or technical challenge.",
    duration: "Varies by position",
  },
  {
    title: "Team Interview",
    description:
      "Meet with potential team members and stakeholders to assess team fit and dive deeper into your experience.",
    duration: "1–2 hours",
  },
  {
    title: "Final Decision",
    description:
      "We'll make a decision and extend an offer to the selected candidate, followed by onboarding details.",
    duration: "1 week",
  },
];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-2 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Join Our <span className="text-[#0db0fd]">Team</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Build your career at Motion Age and help shape the digital future
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Join Motion Age?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a workplace. We're a community of passionate individuals dedicated to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-10 w-10 text-[#0db0fd]" />,
                title: "Professional Growth",
                description:
                  "Continuous learning opportunities, mentorship programs, and career advancement paths for all team members.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#0db0fd]" />,
                title: "Collaborative Culture",
                description:
                  "Work alongside talented professionals in a supportive environment that values teamwork and innovation.",
              },
              {
                icon: <Smile className="h-10 w-10 text-[#0db0fd]" />,
                title: "Work-Life Balance",
                description:
                  "Flexible work arrangements, generous PTO, and policies designed to support your wellbeing and happiness.",
              },
              {
                icon: <Heart className="h-10 w-10 text-[#0db0fd]" />,
                title: "Comprehensive Benefits",
                description:
                  "Competitive salary, health insurance, retirement plans, and additional perks to support you and your family.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      {/* <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Motion Age, we believe that great work comes from happy, motivated people. Our culture is built on
                these core principles:
              </p>
              <div className="space-y-4">
                {[
                  "Innovation and creativity in everything we do",
                  "Respect for diverse perspectives and ideas",
                  "Commitment to excellence and continuous improvement",
                  "Work-life balance that supports overall wellbeing",
                  "Open communication and transparency",
                  "Celebration of achievements, both big and small",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#0db0fd]/10 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-[#0db0fd]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-muted relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Team Event"
                  alt="Team event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square bg-muted relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Office Space"
                  alt="Office space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square bg-muted relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Collaboration"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square bg-muted relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Team Building"
                  alt="Team building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our available positions and find your perfect role
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-[#0db0fd]/10 text-[#0db0fd] border-none">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-[#0db0fd]" />
                        <span>{job.location}</span>
                      </div>
                       {/* <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-[#0db0fd]" />
                        <span>{job.salary}</span>
                      </div>  */}
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-[#0db0fd]" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 w-full">
                        <Link href={`/careers/jobs/${job.id}`}>View Details & Apply</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Don't see a position that matches your skills?</p>
            <Button variant="outline" size="lg">
              <Link href="/careers/jobs/general-application">Submit a General Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Application Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            What to expect when you apply to join our team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 md:pl-0">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#0db0fd]/30" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-12">
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Left content (even index) */}
                  <div className={`w-full md:w-1/2 md:pr-8 ${index % 2 === 1 ? "md:order-2 md:pl-8" : ""}`}>
                    <div className="mb-4 md:mb-0 text-left md:text-right">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground mt-2">{step.description}</p>
                      <div className="mt-2 text-sm font-medium text-[#0db0fd]">{step.duration}</div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0db0fd] flex items-center justify-center z-10">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


      {/* Employee Testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Life at Motion Age</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Kim",
                role: "Senior Developer",
                years: "3 years at Motion Age",
                quote:
                  "Working at Motion Age has been the highlight of my career. The collaborative environment and challenging projects have helped me grow both professionally and personally.",
                image: "/placeholder.svg?height=200&width=200&text=David",
              },
              {
                name: "Jessica Taylor",
                role: "Project Manager",
                years: "2 years at Motion Age",
                quote:
                  "I love the culture here. Everyone is passionate about their work and supportive of each other. The work-life balance is excellent, and I feel valued as an employee.",
                image: "/placeholder.svg?height=200&width=200&text=Jessica",
              },
              {
                name: "Robert Wilson",
                role: "UX Designer",
                years: "4 years at Motion Age",
                quote:
                  "Motion Age has given me the opportunity to work on diverse projects with creative freedom. The leadership team truly cares about our growth and wellbeing.",
                image: "/placeholder.svg?height=200&width=200&text=Robert",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden relative mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-[#0db0fd]">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.years}</p>
                  </div>
                  <p className="italic text-center">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about working at Motion Age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is the interview process like?",
                answer:
                  "Our interview process typically includes an initial application review, a phone or video screening, a skills assessment relevant to the role, and a final interview with the team. The entire process usually takes 2-3 weeks.",
              },
              {
                question: "Do you offer remote work options?",
                answer:
                  "Yes, we offer flexible work arrangements including remote, hybrid, and in-office options depending on the role and team needs. We believe in focusing on results rather than location.",
              },
              {
                question: "What is your company culture like?",
                answer:
                  "Our culture is collaborative, innovative, and supportive. We value work-life balance, diversity of thought, and creating an environment where everyone feels welcome and can do their best work.",
              },
              {
                question: "Do you hire entry-level candidates or interns?",
                answer:
                  "Yes, we have entry-level positions and internship programs throughout the year. We believe in nurturing talent and providing opportunities for those early in their careers to learn and grow.",
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0db0fd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Join Our Team?</h2>
            <p className="mt-4 text-lg text-white/90">
              Explore our current openings and take the next step in your career journey.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="bg-white text-[#0db0fd] hover:bg-white/90">
                <Link href="#current-openings">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
