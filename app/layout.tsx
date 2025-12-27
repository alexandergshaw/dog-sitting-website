import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trusted Dog Sitting in Omaha",
    template: "%s | Omaha Dog Sitting",
  },
  description:
    "Reliable in-home dog sitting with daily updates. Serving Omaha and nearby areas.",
  openGraph: {
    title: "Trusted Dog Sitting in Omaha",
    description:
      "Professional, in-home dog sitting with daily photo updates.",
    url: "https://yourdomain.com",
    siteName: "Omaha Dog Sitting",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
