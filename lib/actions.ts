"use server"

import { revalidatePath } from "next/cache"

// Type definitions for form data
interface JobApplicationData {
  jobId: string
  jobTitle: string
  fullName: string
  email: string
  phone: string
  coverLetter: string
  portfolio?: string
  resumeFile: File | null
}

interface GeneralApplicationData {
  fullName: string
  email: string
  phone: string
  department: string
  experience: string
  coverLetter: string
  portfolio?: string
  resumeFile: File | null
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Function to send email (this would be replaced with actual email sending logic)
async function sendEmail(to: string, subject: string, body: string) {
  // In a real implementation, you would use a service like SendGrid, Mailgun, etc.
  console.log(`Sending email to: ${to}`)
  console.log(`Subject: ${subject}`)
  console.log(`Body: ${body}`)

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // For demonstration purposes, we'll just return success
  return { success: true }
}

// Submit job application
export async function submitJobApplication(data: JobApplicationData) {
  try {
    // Validate the data
    if (!data.fullName || !data.email || !data.phone || !data.coverLetter) {
      throw new Error("Missing required fields")
    }

    // In a real implementation, you would:
    // 1. Upload the resume file to storage (e.g., AWS S3, Vercel Blob)
    // 2. Store the application data in a database
    // 3. Send notification emails

    // Prepare email content
    const emailSubject = `New Job Application: ${data.jobTitle}`
    const emailBody = `
      New job application received:
      
      Position: ${data.jobTitle}
      Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      Portfolio: ${data.portfolio || "Not provided"}
      
      Cover Letter:
      ${data.coverLetter}
      
      Resume: ${data.resumeFile ? "Attached" : "Not provided"}
    `

    // Send email notification
    await sendEmail("info@motionage.com", emailSubject, emailBody)

    // Revalidate the jobs page
    revalidatePath("/careers/jobs")

    return { success: true }
  } catch (error) {
    console.error("Error submitting job application:", error)
    throw new Error("Failed to submit application")
  }
}

// Submit general application
export async function submitGeneralApplication(data: GeneralApplicationData) {
  try {
    // Validate the data
    if (!data.fullName || !data.email || !data.phone || !data.coverLetter || !data.department || !data.experience) {
      throw new Error("Missing required fields")
    }

    // Prepare email content
    const emailSubject = `New General Application: ${data.department} Department`
    const emailBody = `
      New general application received:
      
      Department: ${data.department}
      Experience: ${data.experience}
      Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      Portfolio: ${data.portfolio || "Not provided"}
      
      Cover Letter:
      ${data.coverLetter}
      
      Resume: ${data.resumeFile ? "Attached" : "Not provided"}
    `

    // Send email notification
    await sendEmail("info@motionage.com", emailSubject, emailBody)

    // Revalidate the jobs page
    revalidatePath("/careers/jobs")

    return { success: true }
  } catch (error) {
    console.error("Error submitting general application:", error)
    throw new Error("Failed to submit application")
  }
}

// Submit contact form
export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error("Missing required fields")
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission: ${data.subject}`
    const emailBody = `
      New contact form submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || "Not provided"}
      Subject: ${data.subject}
      
      Message:
      ${data.message}
    `

    // Send email notification
    await sendEmail("info@motionage.com", emailSubject, emailBody)

    // Revalidate the contact page
    revalidatePath("/contact")

    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    throw new Error("Failed to submit contact form")
  }
}
