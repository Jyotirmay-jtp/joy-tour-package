"use client";
import { Clock, MapPin, Compass, Car, Users, Sparkles, ShieldCheck, Headphones, Camera, PawPrint, TreePine, ShoppingBag, Waves, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, Navbar, IconGrid, CTA, Footer, WhatsAppButton } from "@/components/shared";
import Timeline from "./Timeline";
import DetailModal from "./DetailModal";
import { i } from "framer-motion/client";
import { LazyVideo } from "@/components/LazyVideo";

function Hero() {
  const infoCards = [
    { icon: Clock, label: "Duration", value: "13 Nights / 14 Days" },
    { icon: MapPin, label: "Destinations", value: "Delhi · Bandhavgarh · Khajuraho · Orchha · Agra · Ranthambore · Jaipur" },
    { icon: Compass, label: "Private Tour", value: "Just for you" },
    { icon: Sparkles, label: "Customizable", value: "Shape every day" },
    { icon: Car, label: "Luxury Transport", value: "AC vehicle, driver included" },
  ];
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden rounded-b-[48px] px-6 pb-16 pt-32 sm:px-10">
      <LazyVideo mobileSrc="/videos/bandhavgarh_mobile.mp4" desktopSrc="/videos/bandhavgarh.mp4" poster="/images/hero-poster.webp" />
      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-30 mx-auto w-full max-w-6xl">
        <motion.p {...fadeUp} className="text-sm font-medium text-white/70">Home / Packages / Bandhavgarh</motion.p>
        <motion.span {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
          13 Nights · 14 Days
        </motion.span>
        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 font-serif text-5xl leading-[1.05] text-white sm:text-7xl">
          Bandhavgarh Wildlife & Heritage Tour
        </motion.h1>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="mt-2 font-serif text-2xl text-[#F5E7D3] sm:text-3xl">
          Delhi · Jabalpur · Bandhavgarh · Khajuraho · Orchha · Agra · Ranthambore · Jaipur
        </motion.p>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-6 max-w-xl text-white/75">
          Tiger safaris, UNESCO temples, Mughal monuments and royal forts — a grand circuit through the wild heart and golden triangle of India.
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur transition hover:-translate-y-1">
              <Icon className="h-5 w-5 text-[#1B1B1B]" strokeWidth={1.75} />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[#1B1B1B]/50">{label}</p>
              <p className="mt-0.5 text-sm font-medium text-[#1B1B1B]">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function QuickOverview() {
  const cities = ["Delhi", "Bandhavgarh", "Khajuraho", "Orchha", "Agra", "Ranthambore", "Jaipur"];
  const highlights = ["Bandhavgarh Tiger Safari", "Khajuraho Temples", "Taj Mahal", "Chand Baori", "Amber Palace"];
  return (
    <section className="px-6 py-10 sm:px-10">
      <motion.div {...fadeUp} className="mx-auto grid max-w-6xl gap-4 rounded-[32px] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(27,27,27,0.15)] sm:grid-cols-4 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Duration</p>
          <p className="mt-2 font-serif text-2xl text-[#1B1B1B]">13 Nights / 14 Days</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Cities</p>
          <div className="mt-2 flex flex-wrap gap-2">{cities.map((c) => <span key={c} className="rounded-full bg-[#F5E7D3] px-3 py-1 text-sm text-[#1B1B1B]">{c}</span>)}</div>
        </div>
        <div className="sm:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Highlights</p>
          <div className="mt-2 flex flex-wrap gap-2">{highlights.map((h) => <span key={h} className="rounded-full bg-[#DC2626]/10 px-3 py-1 text-sm text-[#B91C1C]">{h}</span>)}</div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Best Time</p>
          <p className="mt-2 font-serif text-2xl text-[#1B1B1B]">October – March</p>
        </div>
      </motion.div>
    </section>
  );
}

export default function BandhavgarhPage() {
  const included = [
    { icon: Car, label: "Private Transport" }, { icon: MapPin, label: "Hotel Stay" }, { icon: Users, label: "Professional Guide" },
    { icon: Compass, label: "Airport Transfers" }, { icon: Camera, label: "Sightseeing" }, { icon: Headphones, label: "Personal Assistance" },
  ];
  const optional = [
    { icon: PawPrint, label: "Extra Jeep Safaris" }, { icon: Waves, label: "Panna Waterfall Excursion" }, { icon: TreePine, label: "Ranthambore Fort Visit" },
    { icon: Landmark, label: "Elephant Ride at Amber Palace" }, { icon: ShoppingBag, label: "Jaipur Shopping Tour" }, { icon: Car, label: "Luxury Car Upgrade" },
  ];
  const whyUs = [
    { icon: ShieldCheck, label: "25+ Years Experience" }, { icon: Compass, label: "Local Experts" }, { icon: Sparkles, label: "Flexible Tours" },
    { icon: MapPin, label: "Personalized Itineraries" }, { icon: Car, label: "Luxury Vehicles" }, { icon: Headphones, label: "24×7 Support" },
  ];
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <Hero />
      <QuickOverview />
      <Timeline />
      <DetailModal />
      <IconGrid eyebrow="What's Included" title="Everything's taken care of" items={included} />
      <IconGrid eyebrow="Optional Experiences" title="Make it uniquely yours" items={optional} variant="dark" />
      <IconGrid eyebrow="Why Travel With Us" title="Trusted, local, personal" items={whyUs} />
      <CTA heading="Ready to experience Bandhavgarh?" sub="Let us create a personalized journey through Delhi, Bandhavgarh, Khajuraho, Orchha, Agra, Ranthambore and Jaipur, crafted exclusively for you." />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}