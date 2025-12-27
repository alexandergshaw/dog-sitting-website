import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trusted In-Home Dog Sitting in Omaha, NE",
  description:
    "Reliable in-home dog sitting in Omaha, NE. Personalized care, daily updates, and a stress-free experience for you and your dog.",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Trusted In-Home Dog Sitting in Omaha, NE",
    description:
      "Reliable in-home dog sitting in Omaha with personalized care and daily updates.",
    url: "https://yourdomain.com",
    type: "website",
  },
};


export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">
        Trusted In-Home Dog Sitting in Omaha
      </h1>
      <p className="mt-4 text-lg">
        Reliable, insured dog sitting with daily updates.
        Your dog stays home. You travel stress-free.
      </p>
    </main>
  );
}
