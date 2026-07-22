"use client";
import { Clock, MapPin, Users, Coffee, Utensils, Car, Droplets, Wine, IndianRupee, ShieldCheck, Compass, Sparkles, Headphones, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, Navbar, IconGrid, CTA, Footer, WhatsAppButton } from "@/components/shared";
import { LazyVideo } from "@/components/LazyVideo";

function Hero() {
  const infoCards = [
    { icon: Clock, label: "Duration", value: "3–4 Hours" },
    { icon: MapPin, label: "Location", value: "Old City, Jaipur" },
    { icon: Users, label: "Style", value: "Guided Heritage Walk" },
    { icon: IndianRupee, label: "Cost", value: "₹3,000 per person" },
  ];
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden rounded-b-[48px] px-6 pb-16 pt-32 sm:px-10">


     <LazyVideo mobileSrc="/videos/culinary_mobile.mp4" desktopSrc="/videos/culinary.mp4" poster="/images/hero-poster.webp" />


      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-30 mx-auto w-full max-w-6xl">
        <motion.p {...fadeUp} className="text-sm font-medium text-white/70">Home / Experiences / Culinary Tour</motion.p>
        <motion.span {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
          Half-Day Experience
        </motion.span>
        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 font-serif text-5xl leading-[1.05] text-white sm:text-7xl">
          Heritage Walk & Culinary Tour
        </motion.h1>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="mt-2 font-serif text-2xl text-[#F5E7D3] sm:text-3xl">
          In the Bazaars of the Pink City, Jaipur
        </motion.p>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-6 max-w-xl text-white/75">
          Walk the old-city lanes and taste Jaipur's best vegetarian street food, brewed tea, and local specialties — the soul of the city, one bite at a time.
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
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

function AboutTour() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626]">The Experience</p>
        <h2 className="mt-3 font-serif text-4xl text-[#1B1B1B] sm:text-5xl">Taste the soul of Jaipur</h2>
        <p className="mx-auto mt-5 max-w-xl text-[#1B1B1B]/65">
          Seeing the sights isn't enough — this walk takes you through the old city's by-lanes to the local outlets that Jaipur itself relies on for quality, freshness and flavour. Every stop is 100% vegetarian, prepared with great hygiene, from morning chai to the main course.
        </p>
      </motion.div>
    </section>
  );
}

function Inclusions() {
  const included = ["Morning tea/coffee with local fast food", "All snacks, beverages and lunch through the walk", "Conveyance within the old city", "Water bottles"];
  const excluded = ["Pickup and drop", "Alcoholic drinks"];
  return (
    <section className="px-6 pb-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        <motion.div {...fadeUp} className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(27,27,27,0.15)] sm:p-8">
          <h3 className="font-serif text-2xl text-[#1B1B1B]">What's Included</h3>
          <ul className="mt-5 space-y-3">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#1B1B1B]/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3D7A66]" strokeWidth={2} /> {i}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(27,27,27,0.15)] sm:p-8">
          <h3 className="font-serif text-2xl text-[#1B1B1B]">What's Not</h3>
          <ul className="mt-5 space-y-3">
            {excluded.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#1B1B1B]/80">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" strokeWidth={2} /> {i}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default function CulinaryTourPage() {
  const highlights = [
    { icon: Coffee, label: "Chai & Fast Food" }, { icon: Utensils, label: "Vegetarian Delicacies" }, { icon: MapPin, label: "Old City Bazaars" },
    { icon: Droplets, label: "Hygienic Preparation" }, { icon: Car, label: "Local Conveyance" }, { icon: Users, label: "Expert Local Guide" },
  ];
  const whyUs = [
    { icon: ShieldCheck, label: "25+ Years Experience" }, { icon: Compass, label: "Local Experts" }, { icon: Sparkles, label: "Authentic Experiences" },
    { icon: MapPin, label: "Personalized Itineraries" }, { icon: Wine, label: "Curated Food Stops" }, { icon: Headphones, label: "24×7 Support" },
  ];
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <Hero />
      <AboutTour />
      <IconGrid eyebrow="On The Walk" title="What you'll experience" items={highlights} />
      <Inclusions />
      <IconGrid eyebrow="Why Travel With Us" title="Trusted, local, personal" items={whyUs} variant="dark" />
      <CTA heading="Ready to taste the real Jaipur?" sub="Join our heritage walk and culinary tour through the old city's bazaars, crafted exclusively for you." />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}