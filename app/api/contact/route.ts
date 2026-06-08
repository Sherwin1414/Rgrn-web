import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Phase 5: Send email via Resend
    // For now, just acknowledge the message
    console.log('Contact form submission:', { name, email, phone, subject, message });

    // TODO: Integrate with Resend API
    // const response = await resend.emails.send({
    //   from: 'Contact Form <noreply@eternalrest.com>',
    //   to: 'info@eternalrest.com',
    //   subject: `New Contact: ${subject}`,
    //   html: `...email template...`,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
