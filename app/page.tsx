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
    <main className="overflow-x-hidden">
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
              "ratingValue": "5.0",
              "reviewCount": "47"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Fully Insured & Pet CPR Certified
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
              Trusted In-Home Dog Sitting{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                in Omaha, NE
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-6 max-w-3xl mx-auto">
              Professional, insured pet sitting with daily photo updates.
              Your dog stays comfortable at home. You travel stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-base text-slate-600 mb-10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="font-medium">Dundee, Aksarben, Midtown, West Omaha</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-4">
                <a href="tel:+14025550123" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  (402) 555-0123
                </a>
                <a href="mailto:contact@yourdomain.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Request Availability
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border border-slate-200"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative -mt-16 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-slate-600 font-medium">Insured & Bonded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-sm text-slate-600 font-medium">Pet CPR Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5.0★</div>
                <div className="text-sm text-slate-600 font-medium">47+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Why Choose In-Home Dog Sitting in Omaha?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              As a local Omaha pet sitter, I understand that your dog is family. In-home dog sitting and overnight pet care 
              means your furry friend stays in their familiar environment—no stressful kennel stays or disrupted routines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Comfort of Home</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your dog stays in their familiar environment with their favorite toys and bed, reducing stress and anxiety while you're away.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Daily Photo Updates</h3>
                <p className="text-slate-600 leading-relaxed">
                  Receive photos and text messages about your dog's activities, meals, and bathroom breaks while you're traveling or at work.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Insured & Background Checked</h3>
                <p className="text-slate-600 leading-relaxed">
                  Professional care you can trust with full liability insurance, bonding, and Pet CPR/First Aid certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Serving Greater Omaha & Surrounding Communities
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Professional dog sitting and pet care services available throughout the metro area
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Dundee</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Aksarben Village</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Midtown Omaha</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">West Omaha</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Benson</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Blackstone</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">La Vista</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Papillion</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Ralston</span>
            <span className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200">Elkhorn</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Dog Sitting Services Tailored to Your Pet's Needs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From overnight dog sitting to quick drop-in visits for potty breaks and feeding, I provide flexible pet care 
              that accommodates your schedule and your dog's routine. All breeds and sizes welcome!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Overnight Dog Sitting</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Full evening and morning care at your home including walks, feeding, playtime, and bedtime companionship. Perfect for vacations and business trips.
                </p>
              </div>
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Drop-In Pet Visits</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  30-minute visits perfect for mid-day potty breaks, feeding, and playtime while you're at work or away for the day.
                </p>
              </div>
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Extended Care Packages</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Multi-day or weekly care for longer trips with consistent daily routines, medication administration, and plenty of photos.
                </p>
              </div>
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              What Omaha Pet Parents Are Saying
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <p className="text-slate-600">5.0 rating from 47 happy pet parents</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                "Best dog sitter in Omaha! My golden retriever Max was so happy and well-cared for. The daily photo updates were amazing while I was on vacation."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah M.</p>
                  <p className="text-sm text-slate-600">Dundee</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                "Reliable and professional pet sitting service! Our rescue dog has anxiety, but she was so comfortable with the overnight care. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Mike & Jennifer T.</p>
                  <p className="text-sm text-slate-600">Aksarben</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                "We've tried several dog walkers and pet sitters in West Omaha, and this is by far the best. Our lab mix gets so excited when she arrives!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Robert K.</p>
                  <p className="text-sm text-slate-600">West Omaha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions About Dog Sitting in Omaha
            </h2>
          </div>
          
          <div className="space-y-4">
            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-slate-900">
                  How much does dog sitting cost in Omaha?
                </h3>
                <svg className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Dog sitting rates vary based on the type of service (overnight stays, drop-in visits, or extended care) and your dog's specific needs. 
                Contact me for a personalized quote. I offer transparent pricing with no hidden fees.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-slate-900">
                  Do you provide dog sitting for all breeds and sizes?
                </h3>
                <svg className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes! I welcome all breeds and sizes, from tiny Chihuahuas to large Great Danes. I have experience with puppies, senior dogs, 
                and dogs with special needs including medication administration and mobility assistance.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-slate-900">
                  Are you available for last-minute or emergency pet sitting?
                </h3>
                <svg className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                I understand that emergencies happen! While I recommend booking in advance, I do my best to accommodate last-minute requests 
                when my schedule allows. Give me a call at (402) 555-0123 to check availability.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-slate-900">
                  What areas of Omaha do you serve?
                </h3>
                <svg className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                I provide dog sitting services throughout Omaha including Dundee, Aksarben Village, Midtown, West Omaha, Benson, Blackstone, 
                and surrounding communities like La Vista, Papillion, Ralston, and Elkhorn. Contact me to confirm service in your specific neighborhood.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-slate-900">
                  Will you send updates while I'm away?
                </h3>
                <svg className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Absolutely! I send daily photo and text updates so you can see how your pup is doing. You'll receive reports on walks, meals, 
                bathroom breaks, playtime, and any funny moments I capture. Stay connected with your dog no matter where you are!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Local Omaha Dog Walking & Exercise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              As part of overnight stays and drop-in visits, I love taking dogs to explore Omaha's great outdoor spaces. 
              Weather permitting, we might visit nearby parks like Elmwood Park, Memorial Park, or neighborhood trails. 
              For dogs who prefer backyard playtime, I'll keep them active and engaged with fetch, training games, or simply lounging 
              in the sunshine. Every dog gets personalized attention based on their energy level, age, and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Book Your Dog's Next Stay in Omaha?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your dog's routine, special needs, and check availability for your dates. 
            I'm here to provide reliable, loving care while you're away.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-blue-600 bg-white rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-200"
          >
            Request Availability Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/90">
            <a href="tel:+14025550123" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (402) 555-0123
            </a>
            <span className="text-white/40">•</span>
            <a href="mailto:contact@yourdomain.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              contact@yourdomain.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
