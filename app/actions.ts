"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      const errors = validatedFields.error.errors.map((err) => err.message).join(", ")
      return { success: false, error: errors }
    }

    const { name, email, subject, message } = validatedFields.data

    // Verify environment variables exist
    // if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    //   console.error("Email configuration missing")
    //   return { success: false, error: "Email service is not configured properly." }
    // }

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Email configuration missing")
  return { success: false, error: "Email service is not configured properly." }
}


    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify connection
    await transporter.verify()

    // Email to admin (you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email from env
      subject: `New Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    // Send email to admin
    await transporter.sendMail(adminMailOptions)

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      text: `
        Hi ${name},
        
        Thank you for contacting us. We have received your message and will get back to you soon.
        
        Your Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Contacting Us</h2>
          <p>Hi ${name},</p>
          <p>We have received your message and will get back to you soon.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    }

    // Send confirmation email to user
    await transporter.sendMail(userMailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email. Please try again later." }
  }
}