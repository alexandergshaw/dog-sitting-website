import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend('re_JoDbdqu4_GeSzBqroU36pLB2La2Szk1nJ');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, dates, details, company } = body;

    // Check honeypot field - if filled, it's likely a bot
    if (company) {
      return Response.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !dates || !details) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'alexandergshaw@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}