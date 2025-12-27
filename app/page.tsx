import { Metadata } from "next";
import { getReviews, getStats } from "@/lib/csv-reader";

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


export default async function Home() {
  const reviews = await getReviews();
  const stats = await getStats();
  // Show first 3 reviews that have comments
  const displayReviews = reviews.filter(r => r.comment).slice(0, 3);
  return (
    <main className="min-h-screen bg-white">
      {/* Schema.org Local Business JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PetService",
            "name": "Omaha Dog Sitting",
            "description": "Professional in-home dog sitting services in Omaha, NE. Overnight care, drop-in visits, and personalized attention for your dog.",
            "url": "https://yourdomain.com",
            "telephone": "+1-402-555-0123",
            "email": "contact@yourdomain.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Omaha",
              "addressRegion": "NE",
              "addressCountry": "US"
            },
            "areaServed": [
              { "@type": "City", "name": "Omaha" },
              { "@type": "City", "name": "La Vista" },
              { "@type": "City", "name": "Papillion" },
              { "@type": "City", "name": "Ralston" }
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": stats.rating.toString(),
              "reviewCount": stats.total_reviews.toString()
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 animate-fade-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Fully Insured & Pet CPR Certified</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Your Dog's Home
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
              Away From Home
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
            Professional in-home dog sitting in Omaha with daily updates, personalized care, and complete peace of mind.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="font-semibold">{stats.rating} Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <span className="font-semibold">{stats.total_dogs}+ Happy Dogs</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span className="font-semibold">{stats.years_experience}+ Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <span className="font-semibold">{stats.repeat_clients} Repeat Customers</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="group w-full sm:w-auto px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Availability
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white/30 backdrop-blur-sm text-lg font-bold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View Services
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-base">
            <a href="tel:+14025550123" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (402) 555-0123
            </a>
            <div className="hidden sm:block w-px h-5 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Serving Greater Omaha Area
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Professional Dog Sitting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your furry friend deserves the best care. Here's what makes in-home pet sitting special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Comfort</h3>
              <p className="text-gray-600 leading-relaxed">
                Your dog stays in their familiar environment with their favorite toys, bed, and routine—no stressful kennel stays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive photos and messages about walks, meals, and playtime so you stay connected while you're away.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully insured, background checked, and Pet CPR certified for your complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Tailored Dog Sitting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From overnight care to quick drop-ins, flexible pet sitting that fits your schedule and your dog's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Overnight Sitting</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Full evening and morning care including walks, feeding, playtime, and companionship. Perfect for vacations and business trips.
              </p>
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:gap-3 transition-all group">
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Drop-In Visits</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                30-minute visits for mid-day potty breaks, feeding, and playtime. Ideal for busy workdays or short trips.
              </p>
              <a href="/services" className="inline-flex items-center text-purple-600 font-semibold hover:gap-3 transition-all group">
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Extended Care</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Multi-day or weekly care for longer trips. Consistent routines, medication administration, and daily photo updates.
              </p>
              <a href="/services" className="inline-flex items-center text-indigo-600 font-semibold hover:gap-3 transition-all group">
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Loved by Omaha Pet Parents
            </h2>
            <p className="text-xl text-gray-600">
              {stats.rating} rating from {stats.total_reviews} happy families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayReviews.map((review, index) => {
              const colors = [
                'from-blue-500 to-indigo-600',
                'from-purple-500 to-pink-600',
                'from-indigo-500 to-blue-600'
              ];
              const initials = review.owner_name.split(' ').map(n => n[0]).join('');
              
              return (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{review.owner_name}</p>
                      <p className="text-sm text-gray-600">{review.dog_name}'s Owner</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Serving Greater Omaha
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Professional dog sitting throughout the metro area
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Dundee</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Aksarben</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Midtown</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">West Omaha</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Benson</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Blackstone</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">La Vista</span>
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Papillion</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
            Let's chat about your dog's needs and check availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform"
            >
              Request Availability
            </a>
            <a
              href="tel:+14025550123"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-2xl hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
          <div className="text-white/80">
            <p className="text-lg">Questions? Email contact@yourdomain.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
