import { Metadata } from "next";
import { getStats } from "@/lib/csv-reader";

export const metadata: Metadata = {
  title: "Dog Sitting Rates in Omaha | Transparent Pricing",
  description:
    "Upfront pricing for dog sitting in Omaha. View rates for overnight stays, drop-in visits, and extended care with no surprises.",
  alternates: {
    canonical: "https://yourdomain.com/pricing",
  },
  openGraph: {
    title: "Dog Sitting Rates in Omaha",
    description:
      "Clear, transparent pricing for professional dog sitting in Omaha.",
    url: "https://yourdomain.com/pricing",
    type: "website",
  },
};

export default async function PricingPage() {
  const stats = await getStats();
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Pricing
        </h1>
        <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl mx-auto">
          Transparent, upfront pricing for professional dog sitting services in Omaha.
        </p>
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            {stats.rating} rating from {stats.total_reviews} reviews
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Overnight Stay</h2>
            <p className="text-gray-600 mb-4">Full night care at your home</p>
            <p className="text-3xl font-bold text-blue-600">Contact for rates</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Drop-In Visits</h2>
            <p className="text-gray-600 mb-4">30-minute care visits</p>
            <p className="text-3xl font-bold text-blue-600">Contact for rates</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Extended Care</h2>
            <p className="text-gray-600 mb-4">Multiple days or weeks</p>
            <p className="text-3xl font-bold text-blue-600">Contact for rates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
