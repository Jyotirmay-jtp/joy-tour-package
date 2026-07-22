"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plane, Landmark, PawPrint, Mountain, Waves, Castle, Heart, TreePine, PlaneTakeoff, ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const days = [
  { id: 1,image: "/images/packages/arrival.webp", icon: Plane, title: "Arrive Delhi", place: "New Delhi", subtitle: "Overnight Delhi", travel: "Airport → Hotel", highlights: ["Greeted by our executive on arrival", "Escort to hotel & tour briefing", "Travel vouchers and documents handed over"], tone: "primary" },
  { id: 2,image: "/images/packages/jama_masjid.webp",  icon: Landmark, title: "Delhi Sightseeing", place: "New Delhi", subtitle: "Overnight Delhi", travel: "Full day · City transfers", highlights: ["Jama Masjid", "Rickshaw ride through Chandni Chowk", "Raj Ghat", "Humayun's Tomb", "Qutub Minar"], tone: "accent" },
  { id: 3,image: "/images/packages/bandhavgarh.webp",  icon: PlaneTakeoff, title: "Delhi → Jabalpur → Bandhavgarh", place: "Bandhavgarh", subtitle: "Overnight Bandhavgarh", travel: "Flight + drive · 175 km, ~4 hrs", highlights: ["Morning flight to Jabalpur", "Scenic drive to Bandhavgarh National Park"], tone: "primary" },
  { id: 4,image: "/images/packages/bandhavgarh2.webp",  icon: PawPrint, title: "Bandhavgarh Wildlife Safari", place: "Bandhavgarh", subtitle: "Overnight Bandhavgarh", travel: "Jeep safari", highlights: ["Among India's best parks for tiger sightings", "Leopards, sloth bears & Indian bison", "200+ bird species including crested serpent eagle"], tone: "accent" },
  { id: 5,image: "/images/packages/bandhavgarh3.webp",  icon: PawPrint, title: "Bandhavgarh Wildlife Safari", place: "Bandhavgarh", subtitle: "Overnight Bandhavgarh", travel: "Jeep safari", highlights: ["Second day of tiger-territory exploration", "Deer, langurs & diverse birdlife"], tone: "primary" },
  { id: 6,image: "/images/packages/khajuraho.webp",  icon: Landmark, title: "Drive to Khajuraho", place: "Khajuraho", subtitle: "Overnight Khajuraho", travel: "Drive · 230 km, ~6 hrs", highlights: ["Khajuraho Group of Monuments (UNESCO site)", "Kandariya Mahadev Temple", "Lakshman Temple & Chaturbhuj Temple", "Dhubela Museum, Kalinjar Fort"], tone: "accent" },
  { id: 7, image: "/images/packages/raneh_falls.webp", icon: Waves, title: "Day Trip to Panna", place: "Panna", subtitle: "Overnight Khajuraho", travel: "Drive · 45 km, ~1 hr", highlights: ["Pandav Waterfalls & Raneh Falls", "Ken Gharial Sanctuary", "Ancient caves", "Evening wildlife safari"], tone: "primary" },
  { id: 8,image: "/images/packages/orchha.webp",  icon: TreePine, title: "Panna Safari or Drive to Orchha", place: "Orchha", subtitle: "Overnight Orchha", travel: "Optional safari, then drive · 175 km, ~3 hrs", highlights: ["Optional second Panna safari", "Raja Mahal & Jahangir Mahal", "Shree Ram Raja Mandir", "Panchmukhi Hanuman Temple", "Stroll along the Betwa River"], tone: "accent" },
  { id: 9,image: "/images/packages/taj_mahal.webp",  icon: Heart, title: "Drive to Agra + Half-Day Sightseeing", place: "Agra", subtitle: "Overnight Agra", travel: "Drive · 260 km, ~4 hrs", highlights: ["Check-in after lunch", "Half-day tour of the city", "Visit the Taj Mahal"], tone: "primary" },
  { id: 10,image: "/images/packages/chand_baori.webp",  icon: Castle, title: "Drive to Ranthambore", place: "Ranthambore", subtitle: "Via Fatehpur Sikri & Chand Baori · Overnight Ranthambore", travel: "Full day drive, with stops", highlights: ["Fatehpur Sikri — Akbar's former capital", "Lunch break enroute", "Chand Baori stepwell (Abhaneri)", "Arrive Ranthambore through rural landscape", "Optional Ranthambore Fort visit"], tone: "accent" },
  { id: 11,image: "/images/packages/safari.webp",  icon: PawPrint, title: "Safaris in Ranthambore", place: "Ranthambore", subtitle: "Morning and evening safaris · Overnight Ranthambore", travel: "2 safaris, ~4 hrs each", highlights: ["Royal Bengal tiger territory", "Deer, antelope, sloth bear, crocodile", "300+ species of birds"], tone: "primary" },
  { id: 12,image: "/images/packages/departure.webp",  icon: Mountain, title: "Drive to Jaipur", place: "Jaipur", subtitle: "Overnight Jaipur", travel: "Checkout after breakfast, drive to Jaipur", highlights: ["Checkout Ranthambore", "Drive to the Pink City", "Check-in hotel"], tone: "accent" },
  { id: 13,image: "/images/packages/jaipur.webp",  icon: Landmark, title: "Full Day Jaipur Sightseeing", place: "Jaipur, the Pink City", subtitle: "Overnight Jaipur", travel: "Full day · City transfers", highlights: ["Amber Palace (car, elephant or on foot)", "Local shopping — jewellery, block print, blue pottery", "City Palace Museum", "Jantar Mantar observatory"], tone: "primary" },
  { id: 14,image: "/images/packages/departure.webp",  icon: PlaneTakeoff, title: "Return to Delhi", place: "New Delhi", subtitle: "Onward journey", travel: "Drive back to Delhi", highlights: ["Breakfast", "Drive back to Delhi", "Connect to your next embarkment"], tone: "accent" },
];

const toneMap = {
  primary: { bg: "from-[#1B1B1B] to-[#000000]", ring: "ring-[#1B1B1B]/30", glow: "shadow-[0_0_0_1px_rgba(61,122,102,0.15),0_20px_50px_-15px_rgba(61,122,102,0.35)]", chip: "bg-[#1B1B1B] text-white", text: "text-[#3D7A66]" },
  accent: { bg: "from-[#DC2626] to-[#B91C1C]", ring: "ring-[#DC2626]/30", glow: "shadow-[0_0_0_1px_rgba(242,140,82,0.18),0_20px_50px_-15px_rgba(242,140,82,0.4)]", chip: "bg-[#DC2626] text-white", text: "text-[#DC2626]" },
};

function DayCard({ day, index }: { day: (typeof days)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = day.icon;
  const tone = toneMap[day.tone as "primary" | "accent"];
  const isLeft = index % 2 === 0;

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
      <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${tone.bg} text-white font-serif text-lg shadow-lg ring-4 ring-[#FAFAF7]`}>
          {String(day.id).padStart(2, "0")}
        </div>
      </div>
      <div className="w-full md:w-[46%]">
        <motion.div layout className={`overflow-hidden rounded-[28px] bg-white ring-1 ${tone.ring} ${tone.glow} transition-shadow duration-300`}>
          <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center gap-4 p-5 text-left sm:p-6">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tone.bg} text-white md:hidden`}>
              <span className="font-serif text-sm">{String(day.id).padStart(2, "0")}</span>
            </div>
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5E7D3] md:flex">
              <Icon className={`h-5 w-5 ${tone.text}`} strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#1B1B1B]/45">Day {String(day.id).padStart(2, "0")} · {day.place}</p>
              <h3 className="mt-0.5 font-serif text-xl text-[#1B1B1B] sm:text-2xl">{day.title}</h3>
              <p className="mt-1 text-sm text-[#1B1B1B]/60">{day.subtitle}</p>
            </div>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tone.chip}`}>
              <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                <div className="px-5 pb-6 sm:px-6">

                 <div className="relative mb-5 h-48 overflow-hidden rounded-2xl sm:h-56">
                                  <Image src={day.image} alt={day.title} fill className="object-cover transition duration-500 hover:scale-105" />
                                </div>

                  <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-[#1B1B1B]/55">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {day.travel}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {day.place}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {day.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-[#1B1B1B]/80">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${tone.bg}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const planeY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const planeRotate = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 90, 90, 180]);

  return (
    <section className="relative bg-[#FAFAF7] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626]">The Route</p>
        <h2 className="mt-3 font-serif text-4xl text-[#1B1B1B] sm:text-5xl">Fourteen days, eight destinations, one story</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#1B1B1B]/60">Tap a day to unfold it — where you'll go, what you'll see, and how you'll get there.</p>
      </div>
      <div ref={containerRef} className="relative mx-auto mt-20 max-w-4xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
          <div className="h-full w-full" style={{ backgroundImage: "repeating-linear-gradient(to bottom, rgba(61,122,102,0.35) 0, rgba(61,122,102,0.35) 6px, transparent 6px, transparent 14px)" }} />
          <motion.div style={{ top: planeY }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div style={{ rotate: planeRotate }} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DC2626] shadow-[0_6px_20px_-4px_rgba(242,140,82,0.6)]">
              <Plane className="h-4 w-4 text-white" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </div>
        <div className="space-y-10 md:space-y-16">
          {days.map((day, i) => <DayCard key={day.id} day={day} index={i} />)}
        </div>
      </div>
    </section>
  );
}