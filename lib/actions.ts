'use server'

import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'

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

// Email sender using Nodemailer with optional attachment
async function sendEmailWithAttachment({
  to,
  subject,
  body,
  attachment,
}: {
  to: string
  subject: string
  body: string
  attachment?: File | null
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const attachments = attachment
    ? [
        {
          filename: attachment.name,
          content: Buffer.from(await attachment.arrayBuffer()),
        },
      ]
    : []

  await transporter.sendMail({
    from: `"Career Bot" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    text: body,
    attachments,
  })

  return { success: true }
}

// Submit job application
export async function submitJobApplication(data: JobApplicationData) {
  try {
    if (!data.fullName || !data.email || !data.phone || !data.coverLetter) {
      throw new Error('Missing required fields')
    }

    const emailSubject = `New Job Application: ${data.jobTitle}`
    const emailBody = `
New job application received:

Position: ${data.jobTitle}
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Portfolio: ${data.portfolio || 'Not provided'}

Cover Letter:
${data.coverLetter}

Resume: ${data.resumeFile ? 'Attached' : 'Not provided'}
    `

    await sendEmailWithAttachment({
      to: 'info@motionage.com',
      subject: emailSubject,
      body: emailBody,
      attachment: data.resumeFile,
    })

    revalidatePath('/careers/jobs')
    return { success: true }
  } catch (error) {
    console.error('Error submitting job application:', error)
    throw new Error('Failed to submit application')
  }
}

// Submit general application
export async function submitGeneralApplication(data: GeneralApplicationData) {
  try {
    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.coverLetter ||
      !data.department ||
      !data.experience
    ) {
      throw new Error('Missing required fields')
    }

    const emailSubject = `New General Application: ${data.department} Department`
    const emailBody = `
New general application received:

Department: ${data.department}
Experience: ${data.experience}
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Portfolio: ${data.portfolio || 'Not provided'}

Cover Letter:
${data.coverLetter}

Resume: ${data.resumeFile ? 'Attached' : 'Not provided'}
    `

    await sendEmailWithAttachment({
      to: 'info@motionage.com',
      subject: emailSubject,
      body: emailBody,
      attachment: data.resumeFile,
    })

    revalidatePath('/careers/jobs')
    return { success: true }
  } catch (error) {
    console.error('Error submitting general application:', error)
    throw new Error('Failed to submit application')
  }
}

// Submit contact form
export async function submitContactForm(data: ContactFormData) {
  try {
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields')
    }

    const emailSubject = `New Contact Form Submission: ${data.subject}`
    const emailBody = `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
    `

    await sendEmailWithAttachment({
      to: 'motionage1@gmail.com',
      subject: emailSubject,
      body: emailBody,
    })

    revalidatePath('/contact')
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit contact form')
  }
}
