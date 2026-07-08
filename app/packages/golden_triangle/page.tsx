"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Clock,
  MapPin,
  Compass,
  Car,
  Users,
  Sparkles,
  ShieldCheck,
  Headphones,
  Camera,
  Utensils,
  Sailboat,
  ShoppingBag,
  Ship,
  Gem,
  ArrowRight,
} from "lucide-react";
import DayTimeline from "./GoldenTriangle";



const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// ---------------------------------------------------------------------------
// NAVBAR
// ---------------------------------------------------------------------------
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Packages", "Gallery", "FAQs", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-serif text-xl text-white drop-shadow">Joy Tours of India</span>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium text-white/90 drop-shadow transition hover:text-white"
            >
              {l}
            </a>
          ))}
          <a
            href="#plan"
            className="rounded-full bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#DC2626]/30 transition hover:bg-[#B91C1C]"
          >
            Plan My Trip
          </a>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#1B1B1B]/95 p-8 md:hidden">
          <button className="mb-10 text-white" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <a key={l} href="#" className="font-serif text-2xl text-white">
                {l}
              </a>
            ))}
            <a
              href="#plan"
              className="mt-4 rounded-full bg-[#DC2626] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Plan My Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
function Hero() {

  
  
  const infoCards = [
    { icon: Clock, label: "Duration", value: "6 Days / 5 Nights" },
    { icon: MapPin, label: "Destinations", value: "Delhi · Agra · Jaipur" },
    { icon: Compass, label: "Private Tour", value: "Just for you" },
    { icon: Sparkles, label: "Customizable", value: "Shape every day" },
    { icon: Car, label: "Luxury Transport", value: "AC vehicle, driver included" },
  ];

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden rounded-b-[48px] px-6 pb-16 pt-32 sm:px-10">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 z-0 h-full w-full object-cover"
  >
    <source src="/videos/banner.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 z-10 bg-black/45" />

  {/* Gradient Overlay */}
<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
  {/* Decorative Glow */}


  {/* Content */}
  <div className="relative z-30 mx-auto w-full max-w-6xl">
        <motion.p
          {...fadeUp}
          className="text-sm font-medium text-white/70"
        >
          Home / Packages / Golden Triangle
        </motion.p>

        <motion.span
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
        >
          6 Days · 5 Nights
        </motion.span>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 font-serif text-5xl leading-[1.05] text-white sm:text-7xl"
        >
          Golden Triangle Tour
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-2 font-serif text-2xl text-[#F5E7D3] sm:text-3xl"
        >
          Delhi · Agra · Jaipur
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-6 max-w-xl text-white/75"
        >
          Discover India's three most iconic cities through history, culture, architecture
          and unforgettable experiences.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5"
        >
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur transition hover:-translate-y-1"
            >
              <Icon className="h-5 w-5 text-[#1B1B1B]" strokeWidth={1.75} />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[#1B1B1B]/50">
                {label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-[#1B1B1B]">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// QUICK OVERVIEW
// ---------------------------------------------------------------------------
function QuickOverview() {
  const cities = ["Delhi", "Agra", "Jaipur"];
  const highlights = ["Taj Mahal", "Amber Fort", "Jama Masjid", "Qutub Minar", "Fatehpur Sikri"];

  return (
    <section className="px-6 py-10 sm:px-10">
      <motion.div
        {...fadeUp}
        className="mx-auto grid max-w-6xl gap-4 rounded-[32px] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(27,27,27,0.15)] sm:grid-cols-4 sm:p-8"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Duration</p>
          <p className="mt-2 font-serif text-2xl text-[#1B1B1B]">6 Days / 5 Nights</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Cities</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {cities.map((c) => (
              <span
                key={c}
                className="rounded-full bg-[#F5E7D3] px-3 py-1 text-sm text-[#1B1B1B]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="sm:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Highlights</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-[#DC2626]/10 px-3 py-1 text-sm text-[#B91C1C]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1B]">Best Time</p>
          <p className="mt-2 font-serif text-2xl text-[#1B1B1B]">October – March</p>
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// INCLUDED / OPTIONAL / WHY US
// ---------------------------------------------------------------------------
function IconGrid({
  eyebrow,
  title,
  items,
  variant = "light",
}: {
  eyebrow: string;
  title: string;
  items: { icon: any; label: string }[];
  variant?: "light" | "dark" | "luxury";
}) {
  const dark = variant === "dark";
  const luxury = variant === "luxury";

  return (
    <section
      className={`px-6 py-24 sm:px-10 ${
        dark ? "bg-[#1B1B1B]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            {eyebrow}
          </p>

          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl ${
              dark ? "text-white" : "text-[#2C2C2C]"
            }`}
          >
            {title}
          </h2>

          {!dark && (
            <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-[#B91C1C]/20" />
          )}
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={`group rounded-3xl p-6 text-center transition-all duration-300
              ${
                dark
                  ? "bg-white/5 ring-1 ring-white/10 hover:-translate-y-2 hover:bg-white/10"
                  : "border border-[#ECECEC] bg-white shadow-sm hover:-translate-y-2 hover:border-[#B91C1C]/25 hover:shadow-xl"
              }`}
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300
                ${
                  dark
                    ? "bg-gradient-to-br from-[#991B1B] to-[#DC2626]"
                    : "bg-[#B91C1C]/10 group-hover:bg-[#B91C1C]"
                }`}
              >
                <Icon
                  className={`h-6 w-6 transition-all duration-300
                  ${
                    dark
                      ? "text-white"
                      : "text-[#B91C1C] group-hover:text-white"
                  }`}
                  strokeWidth={1.8}
                />
              </div>

              <p
                className={`mt-5 text-sm font-medium leading-6 ${
                  dark ? "text-white/90" : "text-[#444]"
                }`}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------
function CTA() {
  return (
    <section id="plan" className="bg-[#FAFAF7] px-6 py-24 sm:px-10">
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-5xl rounded-[40px] border border-[#ECECEC] bg-white px-8 py-20 text-center shadow-[0_25px_60px_-25px_rgba(0,0,0,0.12)] sm:px-16"
      >
        <h2 className="font-serif text-4xl text-[#2C2C2C] sm:text-5xl">
          Ready to experience the Golden Triangle?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#666]">
          Let us create a personalized journey through Delhi, Agra and Jaipur,
          crafted exclusively for you.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#991B1B]">
            Plan My Journey
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="rounded-full border border-[#B91C1C] bg-white px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}
// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-serif text-lg text-[#1B1B1B]">Joy Tours of India</span>
        <p className="text-sm text-[#1B1B1B]/50">
          © {new Date().getFullYear()} Joy Tours of India. Crafted journeys across Rajasthan and beyond.
        </p>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------
export default function GoldenTrianglePage() {
  const included = [
    { icon: Car, label: "Private Transport" },
    { icon: MapPin, label: "Hotel Stay" },
    { icon: Users, label: "Professional Guide" },
    { icon: Compass, label: "Airport Transfers" },
    { icon: Camera, label: "Sightseeing" },
    { icon: Headphones, label: "Personal Assistance" },
  ];

  const optional = [
    { icon: Sailboat, label: "Camel Safari" },
    { icon: Gem, label: "Elephant Ride" },
    { icon: Utensils, label: "Local Food Tour" },
    { icon: Car, label: "Luxury Car Upgrade" },
    { icon: ShoppingBag, label: "Shopping Tour" },
    { icon: Ship, label: "Boat Cruise" },
  ];

  const whyUs = [
    { icon: ShieldCheck, label: "25+ Years Experience" },
    { icon: Compass, label: "Local Experts" },
    { icon: Sparkles, label: "Flexible Tours" },
    { icon: MapPin, label: "Personalized Itineraries" },
    { icon: Car, label: "Luxury Vehicles" },
    { icon: Headphones, label: "24×7 Support" },
  ];

  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <Hero />
      <QuickOverview />
      <DayTimeline />
      <IconGrid eyebrow="What's Included" title="Everything's taken care of" items={included} />
      <IconGrid
        eyebrow="Optional Experiences"
        title="Make it uniquely yours"
        items={optional}
        variant="dark"
      />
      <IconGrid eyebrow="Why Travel With Us" title="Trusted, local, personal" items={whyUs} />
      <CTA />
      <Footer />
    </main>
  );
}
