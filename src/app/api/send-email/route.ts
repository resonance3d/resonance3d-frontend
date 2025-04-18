import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Log the incoming request body for debugging
    const body = await req.json();
    console.log('Received body:', body);  // Log for debugging

    if (!body || !body.firstName || !body.lastName || !body.email || !body.company || !body.message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { firstName, lastName, email, company, message } = body;

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,  // SSL port
      secure: true,  // Use secure connection (SSL)
      auth: {
        user: 'info@resonance3d.com', // Email from .env.local
        pass: 'Ranjan@9934', // Password from .env.local
      },
      debug: true,  // Enable debugging for detailed logs

    });

    // Compose the email
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <info@resonance3d.com>`, // Use the Zoho email as sender
      to: 'info@resonance3d.com',
      subject: `New Inquiry from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
      html: `
        <h3>New Inquiry Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
