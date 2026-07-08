"use client";
import { motion } from "framer-motion";
import { Compass, Car, Home as HomeIcon, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { fadeUp, Navbar, IconGrid, CTA, Footer } from "@/components/shared";
import { PackageCard } from "@/components/PackageCard";

const packages = [
  { title: "Golden Triangle", badge: "6D/5N", href: "/packages/golden_triangle", desc: "Explore Delhi, Agra and Jaipur featuring the Taj Mahal, Amber Fort and vibrant heritage streets." },
  { title: "Golden Triangle + Ranthambore", badge: "Wildlife", href: "/packages/golden_triangle+ranthambore", desc: "Add a tiger safari to the classic circuit through Delhi, Agra and Jaipur." },
  { title: "Golden Triangle + South India", badge: "Grand Tour", href: "/packages/golden_triangle+south_india", desc: "Pair Rajasthan's heritage with South India's temples and backwaters." },
  { title: "Hubli Tour", badge: "Offbeat", href: "/packages/hubli_tour", desc: "A quieter side of Karnataka, away from the usual circuits." },
  { title: "Leh & Srinagar", badge: "Himalayas", href: "/packages/leh_srinagar", desc: "High-altitude passes, alpine lakes and Kashmir's houseboats." },
  { title: "Bandhavgarh Tour", badge: "Wildlife", href: "/packages/bandhavgarh_tour", desc: "Track tigers through one of India's richest national parks." },
  { title: "Golden Triangle + Udaipur/Jodhpur", badge: "Heritage", href: "/packages/golden_triangle+udaipur_jodhpur", desc: "Extend into Rajasthan's lake palaces and blue city." },
  { title: "Spiritual Tour", badge: "Pilgrimage", href: "/packages/spiritual_tour", desc: "Temples, ghats and rituals across India's sacred circuit." },
  { title: "Nepal Tour", badge: "Cross-Border", href: "/packages/nepal_tour", desc: "Himalayan peaks, Kathmandu's temples and Pokhara's lakes." },
  { title: "Culinary Tour", badge: "Food", href: "/packages/culinary_tour", desc: "Street food, royal kitchens and regional flavors across India." },
  { title: "Family Dinner", badge: "Signature", href: "/packages/family_dinner", desc: "A private, curated dining evening with local hosts." },
];

const whyUs = [
  { icon: Sparkles, label: "Personalized Tours" },
  { icon: Compass, label: "Experienced Local Guides" },
  { icon: Car, label: "Luxury Transport" },
  { icon: HomeIcon, label: "Handpicked Hotels" },
  { icon: ShieldCheck, label: "24×7 Assistance" },
  { icon: Wallet, label: "Best Value" },
];

const galleryImages = Array.from({ length: 6 });

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden rounded-b-[48px] px-6 pb-16 pt-32 sm:px-10">
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 z-0 h-full w-full object-cover">
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-30 mx-auto w-full max-w-6xl">
        <motion.h1 {...fadeUp} className="font-serif text-5xl leading-[1.05] text-white sm:text-7xl">
          Luxury India Tours
        </motion.h1>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 max-w-xl text-white/75">
          Experience handcrafted journeys through India's most iconic destinations with personalized
          itineraries, expert local guides and unforgettable experiences.
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-10 flex gap-4">
          <button className="rounded-full bg-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#991B1B]">
            Explore Packages
          </button>
          <button className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="bg-[#FAFAF7] px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Our Packages</p>
          <h2 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-5xl">Explore Our Tours</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => <PackageCard key={p.title} {...p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Gallery</p>
          <h2 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-5xl">Moments From The Road</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((_, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={`overflow-hidden rounded-3xl bg-gradient-to-br from-[#991B1B] to-[#1B1B1B] ${i === 0 ? "col-span-2 row-span-2 h-full min-h-[16rem]" : "h-40 sm:h-48"}`} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="rounded-full border border-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <Hero />
      <PackagesSection />
      <IconGrid eyebrow="Why Choose Us" title="Trusted, local, personal" items={whyUs} />
      <GalleryPreview />
      <CTA heading="Ready for your next journey?" sub="Let us create your perfect Indian experience." />
      <Footer />
    </main>
  );
}