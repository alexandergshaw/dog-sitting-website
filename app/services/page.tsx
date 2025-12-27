import { Metadata } from "next";
import { getStats } from "@/lib/csv-reader";

export const metadata: Metadata = {
  title: "Dog Sitting Services in Omaha | In-Home & Overnight Care",
  description:
    "Professional dog sitting services in Omaha including overnight stays, drop-in visits, and in-home care tailored to your dog’s routine.",
  alternates: {
    canonical: "https://yourdomain.com/services",
  },
  openGraph: {
    title: "Dog Sitting Services in Omaha",
    description:
      "Overnight, drop-in, and in-home dog sitting services in Omaha.",
    url: "https://yourdomain.com/services",
    type: "website",
  },
};
export default async function ServicesPage() {
  const stats = await getStats();
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Dog Sitting Services
        </h1>
        <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl mx-auto">
          Professional, reliable dog sitting services in Omaha tailored to your dog's needs.
        </p>
        <p className="text-center text-blue-600 font-semibold mb-12">
          Trusted by {stats.happy_families}+ families • {stats.rating}★ rated
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Overnight Stays</h2>
            <p className="text-gray-600">
              Your dog stays comfortable at home while you're away. Full evening and morning care with walks, feeding, and playtime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Drop-In Visits</h2>
            <p className="text-gray-600">
              Quick check-ins perfect for busy days. 30-minute visits include walks, feeding, and fresh water.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Extended Care</h2>
            <p className="text-gray-600">
              Multi-day or weekly care for longer trips. Consistent routine and daily photo updates to keep you connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}