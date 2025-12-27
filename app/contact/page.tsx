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

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">
        Request Dog Sitting Availability
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Share a few details below and I’ll follow up shortly to confirm
        availability.
      </p>

      <form
        action="/api/book"
        method="POST"
        acceptCharset="UTF-8"
        className="mt-10 space-y-6"
      >
        {/* Honeypot field – humans won’t see this */}
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="block font-medium">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="dates" className="block font-medium">
            Dates Needed
          </label>
          <input
            id="dates"
            name="dates"
            placeholder="Example: March 14–18"
            required
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="details" className="block font-medium">
            Dog & Care Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            placeholder="Breed, age, routine, medications, etc."
            required
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded font-medium"
        >
          Request Booking
        </button>
      </form>
    </main>
  );
}

