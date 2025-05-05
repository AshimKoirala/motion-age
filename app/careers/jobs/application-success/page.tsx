import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function ApplicationSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-3xl">
      <div className="flex justify-center mb-8">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Application Submitted Successfully!</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Thank you for your interest in joining our team. We've received your application and will review it shortly.
        You'll receive a confirmation email with more details.
      </p>
      <p className="text-muted-foreground mb-12">
        Our team will carefully review your application and reach out to you if your qualifications match our needs.
        This process typically takes 1-2 weeks.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">
          <Link href="/careers/jobs">View More Job Openings</Link>
        </Button>
        <Button variant="outline" className="border-[#0db0fd] text-[#0db0fd] hover:bg-[#0db0fd]/10">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
