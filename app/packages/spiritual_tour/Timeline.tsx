"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plane, Landmark, PlaneTakeoff, Waves, Church, Flame, Mountain, ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const days = [
  { id: 1, image: "/images/packages/arrival.webp", icon: Plane, title: "Arrive Delhi Airport", place: "New Delhi", subtitle: "Overnight Delhi", travel: "Airport → Hotel", highlights: ["Greeted by our executive", "Escort to hotel", "Tour briefing & travel vouchers handed over"], tone: "primary" },
  { id: 2, image: "/images/packages/jama_masjid.webp", icon: Landmark, title: "Delhi Sightseeing", place: "New Delhi", subtitle: "Overnight Delhi", travel: "Full day · City transfers", highlights: ["Jama Masjid", "Rickshaw ride through Chandni Chowk", "Raj Ghat", "Humayun's Tomb", "Qutub Minar"], tone: "accent" },
  { id: 3, image: "/images/packages/bhubaneswar_d3.webp", icon: PlaneTakeoff, title: "Delhi → Bhubaneswar → Puri", place: "Jagannath Puri", subtitle: "Overnight Puri", travel: "Flight + drive · 70 km", highlights: ["Flight to Bhubaneswar", "Drive to Shri Jagannath Puri"], tone: "primary" },
  { id: 4, image: "/images/packages/jagganath.webp", icon: Church, title: "Shri Jagannath Ji Temple", place: "Puri", subtitle: "Overnight Puri", travel: "Full day · City transfers", highlights: ["Jagannath Temple — one of India's four holiest sites", "Puri & Swargdwar beach", "Gundicha Temple", "Chilika Lake"], tone: "accent" },
  { id: 5, image: "/images/packages/sun_temple.webp", icon: PlaneTakeoff, title: "Konark → Bhubaneswar → Varanasi", place: "Varanasi", subtitle: "Overnight Varanasi", travel: "Drive + flight", highlights: ["Konark Sun Temple", "Flight to Varanasi", "India's oldest continuously inhabited city"], tone: "primary" },
  { id: 6, image: "/images/packages/varanasi.webp", icon: Waves, title: "Varanasi Ghats Tour", place: "Varanasi", subtitle: "Overnight Varanasi", travel: "Full day · Dawn & evening cruises", highlights: ["Sunrise boat ride on the Ganges", "Old bazaars & riverside rituals", "Evening Ganga Aarti at Dashashwamedh Ghat"], tone: "accent" },
  { id: 7, image: "/images/packages/sarnath.webp", icon: Church, title: "Sarnath → Ayodhya Ji", place: "Ayodhya", subtitle: "Overnight Ayodhya", travel: "Drive", highlights: ["Sarnath — Buddha's first sermon site", "Dhamekh Stupa & archaeological museum", "Drive to Ayodhya Ji"], tone: "primary" },
  { id: 8, image: "/images/packages/ayodhaya_d8.webp", icon: Church, title: "Shree Ayodhya Ji", place: "Ayodhya", subtitle: "Overnight Ayodhya", travel: "Full day · Temple circuit", highlights: ["Shree Ram Janam Bhoomi Temple", "Hanuman Garhi & Saryu Ghat", "Kanak Bhawan"], tone: "accent" },
  { id: 9, image: "/images/packages/ayodhya_d9.webp", icon: Church, title: "Shree Ayodhya Ji", place: "Ayodhya", subtitle: "Overnight Ayodhya", travel: "Full day · Temple circuit", highlights: ["Nageshwara Temple & Dashrath Bhawan", "Sita Ki Rasoi", "Guptar Ghat"], tone: "primary" },
  { id: 10, image: "/images/packages/departure.webp", icon: PlaneTakeoff, title: "Ayodhya → Delhi → Mathura", place: "Mathura", subtitle: "Overnight Mathura", travel: "Flight + drive · 185 km", highlights: ["Flight to Delhi", "Drive to Mathura"], tone: "accent" },
  { id: 11, image: "/images/packages/prem_mandir.webp", icon: Church, title: "Mathura Temple Circuit", place: "Mathura", subtitle: "Overnight Mathura", travel: "Full day · Temple visits", highlights: ["Shree Krishna Janmasthan", "Vishram Ghat & Dwarkadhish Temple", "Prem Mandir & Banke Bihari Ji Temple"], tone: "primary" },
  { id: 12, image: "/images/packages/vrindavan.webp", icon: Church, title: "Mathura & Vrindavan", place: "Vrindavan", subtitle: "Overnight Mathura", travel: "Drive · 15 km", highlights: ["Radha Raman & Radha Vallabh temples", "Nand Yashoda Bhawan, Gokul Dham", "Chaar Dham, Vrindavan"], tone: "accent" },
  { id: 13, image: "/images/packages/taj_mahal.webp", icon: Landmark, title: "Mathura → Agra → Delhi", place: "New Delhi", subtitle: "Overnight Delhi", travel: "Drive · 60 km + 240 km", highlights: ["Visit the Taj Mahal", "Drive back to Delhi"], tone: "primary" },
  { id: 14, image: "/images/packages/har_ki_pauri.webp", icon: Waves, title: "Delhi → Haridwar", place: "Haridwar", subtitle: "Overnight Haridwar", travel: "Drive · 240 km, ~4 hrs", highlights: ["Evening Ganga Aarti at Har Ki Pauri"], tone: "accent" },
  { id: 15, image: "/images/packages/rafting.webp", icon: Mountain, title: "Haridwar & Rishikesh", place: "Rishikesh", subtitle: "Overnight Haridwar", travel: "Drive · 25 km", highlights: ["Triveni Ghat & Ram Jhoola", "Neelkanth Mahadev Temple", "Rafting, Lakshman Jhoola & Muni Ki Reti"], tone: "primary" },
  { id: 16,  image: "/images/packages/arrival.webp",icon: PlaneTakeoff, title: "Haridwar → Delhi → Indore", place: "Indore", subtitle: "Overnight Indore", travel: "Drive + flight · 250 km", highlights: ["Drive to Delhi", "Flight to Indore"], tone: "accent" },
  { id: 17, image: "/images/packages/mahakaleshwar.webp", icon: Flame, title: "Mahakaleshwar & Omkareshwar", place: "Indore", subtitle: "Overnight Indore", travel: "Drive · 60 km & 80 km", highlights: ["Mahakaleshwar Jyotirlinga, Ujjain", "Bhasma Aarti", "Omkareshwar Jyotirlinga on the Narmada"], tone: "primary" },
  { id: 18, image: "/images/packages/departure.webp", icon: PlaneTakeoff, title: "Indore → Jamnagar → Dwarka", place: "Dwarka", subtitle: "Overnight Dwarka", travel: "Flight + drive · 141 km", highlights: ["Flight to Jamnagar", "Drive to Dwarka"], tone: "accent" },
  { id: 19, image: "/images/packages/dwarka.webp", icon: Church, title: "Dwarka Temple Circuit", place: "Dwarka", subtitle: "Overnight Dwarka", travel: "Full day · Temple visits + ferry", highlights: ["Dwarkadhish Temple", "Bet Dwarka island by ferry", "Rukmini Ji Temple & Nageshwar Jyotirlinga"], tone: "primary" },
  { id: 20, image: "/images/packages/somnath.webp", icon: Flame, title: "Dwarka → Somnath", place: "Somnath", subtitle: "Overnight Somnath", travel: "Drive · 240 km, ~4.5 hrs", highlights: ["First among the twelve Jyotirlingas", "Built by the Moon God, Chandra Dev"], tone: "accent" },
  { id: 21, image: "/images/packages/somnath_lakeside.webp", icon: Flame, title: "Full Day Somnath", place: "Somnath", subtitle: "Overnight Somnath", travel: "Full day at leisure", highlights: ["Temple darshan & seaside evening aarti"], tone: "primary" },
  { id: 22, image: "/images/packages/departure.webp", icon: PlaneTakeoff, title: "Somnath → Rajkot → Delhi", place: "New Delhi", subtitle: "Onward journey", travel: "Drive · 200 km + flight", highlights: ["Drive to Rajkot", "Flight to Delhi", "Arrival transfer"], tone: "accent" },
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
        <h2 className="mt-3 font-serif text-4xl text-[#1B1B1B] sm:text-5xl">Twenty-two days, a nation of pilgrimage</h2>
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