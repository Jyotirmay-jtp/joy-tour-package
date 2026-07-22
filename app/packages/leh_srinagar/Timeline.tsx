"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plane, Landmark, Mountain, Compass, Waves, Tent, Church, PlaneTakeoff, ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const days = [
  { id: 1, image: "/images/packages/arrival.webp", icon: Plane, title: "Arrive Leh", place: "Leh", subtitle: "Acclimatization day · Overnight Leh", travel: "Airport → Hotel", highlights: ["Arrival transfer from Kushok Bakula Rinpoche Airport", "Rest & hydrate to acclimatize (Leh sits at 3,500m)", "Try local Ladakhi food — thukpa, skyu, momos, khambir", "Sip traditional gur gur cha (Tibetan butter tea)"], tone: "primary" },
  { id: 2,image: "/images/packages/hemis_d2.webp", icon: Landmark, title: "Leh – Hemis – Leh", place: "Leh Valley", subtitle: "Overnight Leh", travel: "Drive · ~35 km / 50 min each way", highlights: ["Stok Palace", "Stakna Monastery", "Thiksey Monastery", "Shey Palace", "Hemis Monastery"], tone: "accent" },
  { id: 3,image: "/images/packages/hunder_d3.webp", icon: Mountain, title: "Leh – Khardung La – Diskit – Hunder", place: "Nubra Valley", subtitle: "Overnight Hunder", travel: "Drive · ~126 km / 3.5 hrs", highlights: ["Cross Khardung La — world's highest driveable pass", "Diskit Monastery", "Camel ride on Hunder's sand dunes", "Scenic Nubra Valley landscapes"], tone: "primary" },
  { id: 4,image: "/images/packages/khardungla_pass.webp", icon: Compass, title: "Hunder – Sumur – Khardung La – Leh", place: "Nubra Valley → Leh", subtitle: "Overnight Leh", travel: "Full day drive via Sumur", highlights: ["Explore Sumur village", "Re-cross Khardung La", "Return to Leh by evening"], tone: "accent" },
  { id: 5,image: "/images/packages/pangong_lake.webp", icon: Waves, title: "Leh – Pangong Lake – Leh", place: "Pangong Tso", subtitle: "Overnight Leh", travel: "Drive · ~222 km / 5 hrs each way", highlights: ["Highest saltwater lake in the world", "Ever-changing blue, green & red waters", "Famous '3 Idiots' filming location", "Migratory bird breeding ground"], tone: "primary" },
  { id: 6,image: "/images/packages/lamayuru_monastery.webp", icon: Tent, title: "Leh – Kargil via Alchi & Lamayuru", place: "Kargil", subtitle: "Overnight Kargil", travel: "Drive · ~215 km / 4.5 hrs", highlights: ["Gurudwara Pathar Sahib", "Magnetic Hill — cars appear to defy gravity", "Basgo & Likir Monasteries", "Alchi Monastery", "Lamayuru's moonscape village"], tone: "accent" },
  { id: 7,image: "/images/packages/zojila.webp", icon: Church, title: "Kargil – Srinagar via Zojila & Sonmarg", place: "Srinagar", subtitle: "Overnight Srinagar", travel: "Drive · ~202 km / 5 hrs", highlights: ["Cross Zojila Pass into Kashmir Valley", "Mughal Gardens", "Shikara ride on Dal Lake", "Optional overnight houseboat stay"], tone: "primary" },
  { id: 8,image: "/images/packages/departure.webp", icon: PlaneTakeoff, title: "Departure from Srinagar", place: "Srinagar", subtitle: "Onward journey", travel: "Hotel → Airport", highlights: ["Breakfast at hotel", "Transfer to Srinagar Airport", "Connect to your onward flight"], tone: "accent" },
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
        <h2 className="mt-3 font-serif text-4xl text-[#1B1B1B] sm:text-5xl">Eight days, five destinations, one Himalayan story</h2>
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