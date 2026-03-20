import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, inquiryType, message, type } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the company
    const mailOptionsCompany = {
      from: `"Kings Highways Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New ${type === 'wholesale' ? 'Wholesale' : 'Contact'} Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Phone: ${phone || 'N/A'}
        Inquiry Type: ${inquiryType || 'General'}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #2563EB;">New ${type === 'wholesale' ? 'Wholesale' : 'Contact'} Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Confirmation email to the user
    const mailOptionsUser = {
      from: `"Kings Highways Distributors" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Confirmation: We've received your message`,
      text: `
        Hello ${name},

        Thank you for contacting Kings Highways Distributors. We have received your inquiry and our team will get back to you shortly.

        Inquiry Details:
        Type: ${inquiryType || 'General'}
        Message: ${message}

        Best regards,
        Kings Highways Distributors Team
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #2563EB;">Thank You for Reaching Out!</h2>
          <p>Hello ${name},</p>
          <p>We've received your inquiry and our team will review it within 24 business hours.</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
            <p style="margin: 10px 0 0 0;"><strong>Message:</strong></p>
            <p style="margin: 5px 0 0 0; color: #666;">${message}</p>
          </div>
          <p>Best regards,<br /><strong>Kings Highways Distributors Team</strong></p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsCompany),
      transporter.sendMail(mailOptionsUser),
    ]);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails' },
      { status: 500 }
    );
  }
}
