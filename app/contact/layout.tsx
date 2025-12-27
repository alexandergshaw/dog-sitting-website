import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Dog Sitter in Omaha | Request Availability",
  description:
    "Request availability for professional in-home dog sitting in Omaha. Personalized care and daily updates for your dog.",
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
  openGraph: {
    title: "Book a Dog Sitter in Omaha",
    description:
      "Request availability for trusted in-home dog sitting in Omaha.",
    url: "https://yourdomain.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
