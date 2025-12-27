import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Request Received | Omaha Dog Sitting",
  description:
    "Your dog sitting request has been received. We’ll follow up shortly to confirm availability.",
  alternates: {
    canonical: "https://yourdomain.com/thanks",
  },
  robots: {
    index: false,
    follow: false,
  },
};
export default function ThanksPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Request Received!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for your interest in dog sitting services. I'll review your request and follow up shortly to confirm availability.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}