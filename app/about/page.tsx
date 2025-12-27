import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Your Omaha Dog Sitter | Trusted In-Home Care",
  description:
    "Learn about your local Omaha dog sitter, care approach, and what to expect from professional in-home dog sitting.",
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
  openGraph: {
    title: "About Omaha Dog Sitting",
    description:
      "Meet your local Omaha dog sitter and learn how in-home care works.",
    url: "https://yourdomain.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Omaha Dog Sitting
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Welcome! I provide professional, reliable dog sitting services in Omaha.
          </p>
          <p className="text-gray-700 mb-4">
            Your dog stays comfortable in their own home while receiving personalized care and attention.
          </p>
        </div>
      </div>
    </div>
  );
}
