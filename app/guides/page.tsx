"use client";
import Image from "next/image";
import { Navbar, Footer, WhatsAppButton } from "@/components/shared";

export default function GuidesPage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <section className="px-6 pb-20 pt-40 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Our People</p>
          <h1 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-6xl">Tourist Guides</h1>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6 rounded-[32px] border border-[#ECECEC] bg-white p-8 text-[#444] leading-7 sm:p-12">
          <p>
            India is a land of extraordinary diversity, where every region offers its own traditions,
            architecture, languages, and cultural heritage. From the majestic forts of Rajasthan and the
            temples of South India to the Mughal monuments of North India, every destination has a unique
            story waiting to be discovered.
          </p>
          <p>
            At Joy Tours India, we believe that a great guide transforms a sightseeing tour into an
            unforgettable cultural experience. That's why we provide government-approved, licensed tourist
            guides who are highly knowledgeable and deeply connected to the regions they represent. Often
            referred to as the "Cultural Ambassadors of India," our guides help you understand not only the
            history of a place but also its traditions, local customs, and hidden stories.
          </p>
          <p>
            Whether you're visiting India for the first time or returning to explore more, our guides help
            you make the most of your journey by recommending the attractions that match your interests
            while ensuring your time is spent efficiently.
          </p>
          <p>
            For longer journeys, we also provide experienced tour escorts who accompany you throughout your
            trip. From airport arrivals and hotel check-ins to coordinating transportation and assisting with
            local interactions, they ensure every part of your tour runs smoothly so you can simply relax and
            enjoy your experience.
          </p>
          <p>
            Our commitment is simple — to offer authentic local knowledge, personalized service, and
            memorable experiences that stay with you long after your journey ends.
          </p>
        </div>

        {/* optional guide photo */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[28px]">
          <div className="relative h-96">
            <Image src="/images/gallery/g26.webp" alt="Our guide with a guest" fill className="object-cover" />
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}