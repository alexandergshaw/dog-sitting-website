import { Metadata } from "next";
import { getStats } from "@/lib/csv-reader";

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

export default async function AboutPage() {
  const stats = await getStats();
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Omaha Dog Sitting
        </h1>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{stats.total_dogs}+</div>
            <div className="text-sm text-gray-600 font-medium">Dogs Watched</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{stats.years_experience}+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.rating}★</div>
            <div className="text-sm text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{stats.repeat_clients}%</div>
            <div className="text-sm text-gray-600 font-medium">Repeat Clients</div>
          </div>
        </div>
        
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
