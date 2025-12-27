'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      dates: formData.get('dates') as string,
      details: formData.get('details') as string,
      company: formData.get('company') as string, // honeypot
    };

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Redirect to thank you page on success
      router.push('/thanks');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">
        Request Dog Sitting Availability
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Share a few details below and I'll follow up shortly to confirm
        availability.
      </p>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* Honeypot field – humans won't see this */}
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
            disabled={isSubmitting}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Request Booking'
          )}
        </button>
      </form>
    </main>
  );
}
