import { Metadata } from "next";

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

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Pricing
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Transparent, upfront pricing for professional dog sitting services in Omaha.
        </p>
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
