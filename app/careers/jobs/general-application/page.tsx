"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload } from 'lucide-react'
import { submitGeneralApplication } from "@/lib/actions"
import AnimatedElement from "@/components/animated-element"
import { useToast } from "@/hooks/use-toast"

export default function GeneralApplicationPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    coverLetter: "",
    portfolio: "",
    resumeFile: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFile: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Call the server action to submit the application
      await submitGeneralApplication({
        ...formData,
      })

      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll be in touch soon!",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        department: "",
        experience: "",
        coverLetter: "",
        portfolio: "",
        resumeFile: null,
      })

      // Redirect to success page
      router.push("/careers/jobs/application-success")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers/jobs" className="inline-flex items-center text-[#0db0fd] mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Openings
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">General Application</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Don't see a specific position that matches your skills? Submit a general application and we'll consider you for future opportunities that align with your experience and interests.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement animation="fade-up">
              <Card className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
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
                          value={formData.email}
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
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="border-input focus:border-[#0db0fd]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio URL (Optional)</Label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className="border-input focus:border-[#0db0fd]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department of Interest</Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) => handleSelectChange("department", value)}
                          required
                        >
                          <SelectTrigger className="border-input focus:border-[#0db0fd]">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => handleSelectChange("experience", value)}
                          required
                        >
                          <SelectTrigger className="border-input focus:border-[#0db0fd]">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-input focus:border-[#0db0fd]"
                        placeholder="Tell us about yourself, your skills, and what type of role you're looking for..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resumeFile">Upload Resume (PDF, DOC, or DOCX)</Label>
                      <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                        <input
                          type="file"
                          id="resumeFile"
                          name="resumeFile"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="hidden"
                        />
                        <label htmlFor="resumeFile" className="cursor-pointer flex flex-col items-center">
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <span className="text-sm font-medium">
                            {formData.resumeFile ? formData.resumeFile.name : "Click to upload your resume"}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1">
                            {formData.resumeFile ? `${(formData.resumeFile.size / 1024 / 1024).toFixed(2)} MB` : "Max 5MB"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-[#0db0fd] hover:bg-[#0db0fd]/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting Application..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're looking for talented individuals who are passionate about what they do
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovative Environment",
                description: "Work on cutting-edge projects using the latest technologies and methodologies.",
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning and advancement paths for every team member.",
              },
              {
                title: "Collaborative Culture",
                description: "Join a supportive team that values diverse perspectives and ideas.",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible schedules and policies that support your wellbeing and personal life.",
              },
              {
                title: "Competitive Compensation",
                description: "Attractive salary packages and comprehensive benefits.",
              },
              {
                title: "Meaningful Work",
                description: "Make a real impact with projects that matter to clients and users.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
