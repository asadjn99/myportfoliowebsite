"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  const { name, email, subject, message } = formData;

  // 1. Setup Transporter
  // Make sure EMAIL_USER and EMAIL_PASS are in your .env.local file
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // --- DESIGNING THE EMAIL ---

    const emailSubject = `[Portfolio] ${subject}`;

    // 2. Professional HTML Body
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
          .email-wrapper { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          
          /* Header */
          .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; }
          .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; }

          /* Content */
          .content { padding: 40px 30px; color: #333333; }
          .info-group { margin-bottom: 24px; }
          .label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #8b5cf6; margin-bottom: 6px; letter-spacing: 1px; }
          .value { font-size: 16px; color: #1f2937; line-height: 1.5; font-weight: 500; }
          .message-card { background-color: #f8fafc; border-left: 4px solid #8b5cf6; padding: 20px; border-radius: 4px; margin-top: 10px; font-size: 16px; line-height: 1.6; color: #4b5563; }

          /* Footer */
          .footer { background-color: #1f2937; padding: 30px; text-align: center; color: #9ca3af; font-size: 13px; }
          .footer a { color: #8b5cf6; text-decoration: none; }
          
          /* Button styling for reply */
          .reply-link { display: inline-block; margin-top: 5px; color: #6366f1; text-decoration: none; font-weight: 600; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          
          <div class="header">
            <h1>New Submission</h1>
            <p>Received from your Portfolio Contact Form</p>
          </div>

          <div class="content">
            
            <div class="info-group">
              <span class="label">Sender Name</span>
              <div class="value">${name}</div>
            </div>

            <div class="info-group">
              <span class="label">Sender Email</span>
              <div class="value">
                <a href="mailto:${email}" style="color: #1f2937; text-decoration: none;">${email}</a>
              </div>
            </div>

            <div class="info-group">
              <span class="label">Subject</span>
              <div class="value">${subject}</div>
            </div>

            <div class="info-group">
              <span class="label">Message Content</span>
              <div class="message-card">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

          </div>

          <div class="footer">
            <p>This message was sent securely from your <strong> Portfolio</strong>.</p>
            <p style="margin-top: 10px; opacity: 0.6;">&copy; ${new Date().getFullYear()} asadjn99</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 3. Send the Email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email, // by click the email kam 6 email ke mata raghly ye hghi ta direct email kege
      subject: emailSubject,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}