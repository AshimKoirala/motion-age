"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Clock, DollarSign, MapPin, Upload } from 'lucide-react'
import { jobOpenings } from "@/lib/job-data"
import { submitJobApplication } from "@/lib/actions"
import AnimatedElement from "@/components/animated-element"
import { useToast } from "@/hooks/use-toast"
import { toast } from "@/components/ui/use-toast"

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    portfolio: "",
    resumeFile: null as File | null,
  })
  const [jobId, setJobId] = useState<string | null>(null)

  useEffect(() => {
    const fetchParams = async () => {
      const unwrappedParams = await params
      setJobId(unwrappedParams.id)
    }

    fetchParams()
  }, [params])
// If jobId hasn't been set yet, show loading or fallback UI
  if (!jobId) {
    return <div>Loading...</div>
  }

    // Find the job with the matching ID
  const job = jobOpenings.find((job) => job.id === jobId)


  // If no job is found, show a message
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-8">The job posting you're looking for doesn't exist or has been removed.</p>
        <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">
          <Link href="/careers/jobs">View All Job Openings</Link>
        </Button>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
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
      await submitJobApplication({
        jobId: job.id,
        jobTitle: job.title,
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
        coverLetter: "",
        portfolio: "",
        resumeFile: null,
      })

      // Redirect to success page or stay on the same page
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
          <Link href="/careers" className="inline-flex items-center text-[#0db0fd] mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Openings
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className="bg-[#0db0fd]/10 text-[#0db0fd] border-none">
                {job.type}
              </Badge>
              <Badge variant="outline" className="bg-accent border-none">
                {job.department}
              </Badge>
              <span className="flex items-center text-muted-foreground text-sm">
                <Clock className="mr-1 h-4 w-4" />
                Posted {job.posted}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{job.title}</h1>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#0db0fd]" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-[#0db0fd]" />
                <span>{job.salary}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedElement animation="fade-up">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <h2>Job Description</h2>
                  <p>{job.description}</p>

                  <h2>Key Responsibilities</h2>
                  <ul>
                    {job.responsibilities?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2>Requirements</h2>
                  <ul>
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>

                  <h2>Benefits</h2>
                  <ul>
                    {job.benefits?.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedElement animation="fade-left">
                <Card className="sticky top-24 border-2 border-transparent hover:border-[#0db0fd] transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Job Summary</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Department</p>
                        <p>{job.department}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Employment Type</p>
                        <p>{job.type}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p>{job.location}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Salary Range</p>
                        <p>{job.salary}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Posted</p>
                        <p>{job.posted}</p>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-[#0db0fd] hover:bg-[#0db0fd]/90"
                      onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Apply for this Position</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to apply for the {job.title} position
            </p>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto">
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
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
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
          </div>
        </div>
      </section>

      {/* Similar Jobs */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Similar Positions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore other opportunities that might interest you
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {jobOpenings
              .filter((j) => j.id !== job.id && j.department === job.department)
              .slice(0, 3)
              .map((similarJob) => (
                <Card key={similarJob.id} className="border-2 border-transparent hover:border-[#0db0fd] transition-all">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="bg-[#0db0fd]/10 text-[#0db0fd] border-none mb-4">
                      {similarJob.type}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{similarJob.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{similarJob.description}</p>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <MapPin className="h-4 w-4 text-[#0db0fd]" />
                      <span>{similarJob.location}</span>
                    </div>
                    <Button className="w-full bg-[#0db0fd] hover:bg-[#0db0fd]/90">
                      <Link href={`/careers/jobs/${similarJob.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}
