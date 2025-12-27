// app/api/book/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  // Honeypot check
  if (formData.get("company")) {
    return new NextResponse("OK", { status: 200 });
  }

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const dates = formData.get("dates")?.toString().trim();
  const details = formData.get("details")?.toString().trim();

  if (!name || !email || !dates || !details) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  // Integration point (explicit, not magical)
  // Examples:
  // - send email via Resend, Postmark, SES
  // - send webhook to Notion / Slack
  // - write to database
  //
  // Controlled via env vars so local/dev/prod behave cleanly

  const ENABLE_LOGGING = process.env.LOG_BOOKINGS === "true";

  if (ENABLE_LOGGING) {
    console.log("New booking request:", {
      name,
      email,
      dates,
      details,
    });
  }

  return NextResponse.redirect(
    new URL("/thanks", req.url),
    { status: 303 }
  );
}
