"use client";
import { Navbar, Footer, WhatsAppButton } from "@/components/shared";

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <section className="px-6 pb-20 pt-40 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Company Profile</p>
          <h1 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-6xl">About Joy Tours of India</h1>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6 rounded-[32px] border border-[#ECECEC] bg-white p-8 text-[#444] leading-7 sm:p-12">
  <p>
    Joy Tours of India is based in Jaipur — the capital of Rajasthan, India's largest state, home to over
    85 million people, with the city itself home to around 4.5 million.
  </p>
  <p>
    Our founder's journey in tourism began in the year 2000, working across back-office operations, field
    assistance and tour operations in Jaipur and Delhi. For 15 years, he worked as a personal escort and tour
    guide — gaining deep insight into what guests truly need and expect from a journey through India.
  </p>
  <p>
    In 2023, that experience became Joy Tours of India: a small, highly professional team built on one
    philosophy — guest satisfaction comes first, always ahead of profit. With long-standing experience in the
    industry, we understand the challenges travel can bring, and we maintain liaison offices across major
    Indian cities to keep operations smooth wherever you go.
  </p>
  <p>
    We know your time is your most valuable asset, so every tour is designed carefully to cover the key
    highlights and make the most of it. Our core service is car rentals — from regular sedans to luxury
    vehicles — but we go far beyond that: professional tour guides, hotel bookings, elephant and camel
    safaris, jeep safaris, and boat cruises. In short, we can design and manage your complete tour, anywhere
    in India.
  </p>
  <p>
    To craft your perfect itinerary, we just need a few details: your preferred car type, hotel category,
    areas of interest (cultural, heritage, modern lifestyle, or local experiences), number of nights, and
    budget. From there, we build a personalized plan that's comfortable, meaningful, and truly unforgettable.
  </p>
  <p className="text-center font-serif text-xl italic text-[#B91C1C]">
    "Travel is not about miles covered, but about moments cherished."
  </p>
</div>

    <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
  <div className="rounded-2xl border border-[#ECECEC] bg-white p-6">
    <p className="text-xs font-semibold uppercase tracking-wide text-[#B91C1C]">Contact</p>
    <p className="mt-3 text-sm text-[#444]">📍 101, Vaishali Marg, Vaishali Nagar, Jaipur – 302021</p>
    <p className="mt-2 text-sm text-[#444]">📞 +91-9352744747</p>
    <p className="mt-2 text-sm text-[#444]">✉️ info@joytoursofindia.com</p>
  </div>
  <div className="overflow-hidden rounded-2xl border border-[#ECECEC]">
    <iframe
  src="https://www.google.com/maps?q=101,+Vaishali+Marg,+Nemi+Nagar+Extension,+Block+A,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021&output=embed"
  className="h-full w-full min-h-[220px]"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
  </div>
</div>


      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}