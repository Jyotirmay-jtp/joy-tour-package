"use client";
import { motion } from "framer-motion";
import { Compass, Car, Home as HomeIcon, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { fadeUp, Navbar, IconGrid, CTA, Footer } from "@/components/shared";
import { PackageCard } from "@/components/PackageCard";
import { WhatsAppButton } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import { LazyVideo } from "@/components/LazyVideo";

const packages = [
  { image: "/images/packages/taj_mahal.webp",title: "Golden Triangle", badge: "6D/5N", href: "/packages/golden_triangle", desc: "Explore Delhi, Agra and Jaipur featuring the Taj Mahal, Amber Fort and vibrant heritage streets." },
  { image: "/images/packages/safari.webp",title: "Golden Triangle + Ranthambore", badge: "Wildlife", href: "/packages/golden_triangle+ranthambore", desc: "Add a tiger safari to the classic circuit through Delhi, Agra and Jaipur." },
  { image: "/images/packages/kochi.webp",title: "Golden Triangle + South India", badge: "Grand Tour", href: "/packages/golden_triangle+south_india", desc: "Pair Rajasthan's heritage with South India's temples and backwaters." },
  { image: "/images/packages/temple.webp",title: "Hubli Tour", badge: "Offbeat", href: "/packages/hubli_tour", desc: "A quieter side of Karnataka, away from the usual circuits." },
  { image: "/images/packages/pangong_lake.webp",title: "Leh & Srinagar", badge: "Himalayas", href: "/packages/leh_srinagar", desc: "High-altitude passes, alpine lakes and Kashmir's houseboats." },
  { image: "/images/packages/bandhavgarh3.webp",title: "Bandhavgarh Tour", badge: "Wildlife", href: "/packages/bandhavgarh_tour", desc: "Track tigers through one of India's richest national parks." },
  { image: "/images/packages/mehrangarh.webp",title: "Golden Triangle + Udaipur/Jodhpur", badge: "Heritage", href: "/packages/golden_triangle+udaipur_jodhpur", desc: "Extend into Rajasthan's lake palaces and blue city." },
  { image: "/images/packages/prem_mandir.webp",title: "Spiritual Tour", badge: "Pilgrimage", href: "/packages/spiritual_tour", desc: "Temples, ghats and rituals across India's sacred circuit." },
  { image: "/images/packages/monastery.webp",title: "Nepal Tour", badge: "Cross-Border", href: "/packages/nepal_tour", desc: "Himalayan peaks, Kathmandu's temples and Pokhara's lakes." },
  { image: "/images/packages/culinary.webp",title: "Culinary Tour", badge: "Food", href: "/packages/culinary_tour", desc: "Street food, royal kitchens and regional flavors across India." },
  { image: "/images/packages/family_dinner.webp",title: "Family Dinner", badge: "Signature", href: "/packages/family_dinner", desc: "A private, curated dining evening with local hosts." },
];

const whyUs = [
  { icon: Sparkles, label: "Personalized Tours" },
  { icon: Compass, label: "Experienced Local Guides" },
  { icon: Car, label: "Luxury Transport" },
  { icon: HomeIcon, label: "Handpicked Hotels" },
  { icon: ShieldCheck, label: "24×7 Assistance" },
  { icon: Wallet, label: "Best Value" },
];


function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden  px-6 pb-16 pt-32 sm:px-10">
      
      <LazyVideo  src="/videos/hero.mp4" poster="/images/hero-poster.webp" />
      
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
          <Link href="#packages">
            <button className="rounded-full bg-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#991B1B]">
              Explore Packages
            </button>
          </Link>
          <Link href="/contact">
            <button className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}








function PackagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] px-6 py-24 sm:px-10">
      <div className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-[#B91C1C]/20 blur-3xl" />
<div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#4A3B47]/20 blur-3xl" />


<svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 1000 500" fill="none">
  <path d="M50 400C250 380 400 200 650 150C800 120 900 90 950 60" stroke="#1B1B1B" strokeWidth="1.5" strokeDasharray="6 8" />
  <circle cx="950" cy="60" r="4" fill="#B91C1C" />
</svg>


      <div className="relative mx-auto max-w-6xl">
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



function About() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">About Us</p>
        <h2 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-5xl">Company Profile</h2>
        <div className="mx-auto mt-8 space-y-5 text-left text-[#555] leading-7">
          <p>
            Joy Tours of India is a leading travel operator. A team of dedicated, experienced and
            dynamic people who are committed to providing the best services. We not only give you the
            best from our side but also feel ourselves at your place and prepare the best proposal that
            can suit your requirements.
          </p>
          <p>
            The name is quite known among travelers who are regular visitors to this beautiful land,
            Rajasthan. You may find many others providing the same services, but we are different —
            because we assure every client, through our dedicated services, that we maintain quality.
            Quality, which spells itself and can be experienced with us. We make sure that every client
            becomes an ambassador of goodwill for us.
          </p>
          <p>
            We are the most trusted travel company, established in 2018 in Rajasthan, offering the best
            of both worlds in service: local contact and knowledge that keeps us in touch with our
            clients' desires, combined with the strength of our offices across Rajasthan, to offer the
            best service at the best price for all your travel needs.
          </p>
        </div>
      </div>
    </section>
  );
}


const galleryImages = ["/images/gallery/g11.webp",
  "/images/gallery/g19.webp",
  "/images/gallery/g3.webp",
  "/images/gallery/g4.webp",
  "/images/gallery/g26.webp",
  "/images/gallery/g17.webp",
  ];

function GalleryPreview() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Gallery</p>
          <h2 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-5xl">Moments From The Road</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((src, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-3xl ${i === 0 ? "col-span-2 row-span-2 h-full min-h-[16rem]" : "h-40 sm:h-48"}`}>
              <Image src={src} alt="Joy Tours of India" fill className="object-cover transition duration-500 hover:scale-105" />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/gallery" className="rounded-full border border-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
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


