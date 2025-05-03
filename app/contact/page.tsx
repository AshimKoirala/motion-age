"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import StaggeredAnimation from "@/components/staggered-animation"
import AnimatedBackground from "@/components/animated-background"
import TextGradient from "@/components/text-gradient"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-2 md:py-20 overflow-hidden">
        <AnimatedBackground
          className="absolute inset-0"
          particleColor="#0db0fd"
          particleCount={30}
          particleSize={2}
          particleOpacity={0.2}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
        </AnimatedBackground>
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Get in <TextGradient text="Touch" />
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              We'd love to hear from you. Reach out to discuss your project or ask any questions.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <AnimatedElement animation="fade-right">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us using any of the following methods. We're here to help and will respond as soon as
                  possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0db0fd]/10 p-3 rounded-full animate-pulse">
                      <MapPin className="h-6 w-6 text-[#0db0fd]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Our Location</h3>
                      <p className="text-muted-foreground">Nawa prabhat marg</p>
                      <p className="text-muted-foreground">Narephate,Kathmandu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0db0fd]/10 p-3 rounded-full animate-pulse">
                      <Phone className="h-6 w-6 text-[#0db0fd]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone Number</h3>
                      <p className="text-muted-foreground">+977 9812340170</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0db0fd]/10 p-3 rounded-full animate-pulse">
                      <Mail className="h-6 w-6 text-[#0db0fd]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email Address</h3>
                      <p className="text-muted-foreground">info@motionage.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0db0fd]/10 p-3 rounded-full animate-pulse">
                      <Clock className="h-6 w-6 text-[#0db0fd]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">Sunday - Friday: 10am - 6pm</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedElement animation="fade-left">
                <Card className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                          <Send className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll get back to you as soon as possible.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="border-input focus:border-[#0db0fd]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="border-input focus:border-[#0db0fd]"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className="border-input focus:border-[#0db0fd]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formState.subject}
                              onChange={handleChange}
                              required
                              className="border-input focus:border-[#0db0fd]"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Your Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="border-input focus:border-[#0db0fd]"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="bg-[#0db0fd] hover:bg-[#0db0fd]/90 w-full md:w-auto animate-pulse"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-[400px] w-full">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.484062708888!2d85.35080219999999!3d27.671430099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4abcd08f73093d5b%3A0xd1c7468aa91ae070!2sMotion%20age!5e0!3m2!1sen!2snp!4v1745989679898!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about working with us
            </p>
          </AnimatedElement>

          <StaggeredAnimation
            animation="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            staggerDelay={100}
          >
            {[
              {
                question: "What is your typical process for new projects?",
                answer:
                  "Our process typically begins with a discovery call to understand your needs, followed by a proposal and timeline. Once approved, we move into design, development, testing, and launch phases, with regular check-ins throughout.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex app could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally.",
              },
              {
                question: "What information do you need to provide a quote?",
                answer:
                  "To provide an accurate quote, we typically need to understand your project goals, desired features and functionality, timeline expectations, and any specific design requirements. The more details you can provide, the more accurate our estimate will be.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
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
                Schedule a Consultation
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
