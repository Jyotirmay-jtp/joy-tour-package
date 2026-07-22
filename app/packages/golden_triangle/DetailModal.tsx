"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const details = [
  { day: "Day 1", title: "Arrive at Delhi Airport. Overnight Delhi.", text: `International flights usually arrive late in evening or at night, so we would recommend considering arriving a day earlier to recuperate and relax from jetlag — it also serves as insurance against international flight delays and cancellations. An additional night's stay can be added at the time of booking.\n\nOn arrival, you will be greeted by our executive and escorted to your hotel, where your tour plans will be briefed to you. Your necessary documents, travel vouchers and interstate tickets will be handed over there.` },
  { day: "Day 2", title: "Delhi Sightseeing. Overnight Delhi.", text: `Today your tour guide will take you exploring the country's capital, founded and rebuilt more than seven times in the last 5000 years. The tour begins with Jama Masjid, a 17th-century mosque built by Shahjahan, with a courtyard that could hold 20,000 devotees at prayer.\n\nNext, experience a rickshaw ride through the narrow lanes of Chandni Chowk — founded by Shahjahan's daughter, famous for spices, bridal wear and dry fruits.\n\nThen visit Raj Ghat, Mahatma Gandhi's cremation site with its eternal flame, followed by Humayun's Tomb — the "dormitory of the Mughals" and India's first example of a double dome and Charbagh garden design, built by his wife Haji Begum in the 16th century.\n\nThe day concludes at Qutub Minar, a 13th-century five-storey minaret built to commemorate the arrival of Islam in India, surrounded by tombs and mosques in its campus. Overnight hotel, New Delhi.` },
  { day: "Day 3", title: "Delhi to Agra (240 km) and half-day sightseeing. Overnight Agra.", text: `After breakfast, a 4-hour drive to Agra. Check in after lunch, then a half-day tour including the Taj Mahal — the world-famous 17th-century monument in white marble, standing 2 metres taller than Qutub Minar and a perfect example of Persian symmetry, broken only by the tomb of its own founder. Now a UNESCO World Heritage Site. Overnight hotel, Agra.` },
  { day: "Day 4", title: "Checkout and drive to Jaipur via Red Fort. Overnight Jaipur.", text: `Visit the fort, built in the 16th century and the kingdom's seat until the capital moved to Delhi. Continue to Fatehpur Sikri enroute — Akbar's capital for fifteen years before water shortages forced its abandonment, sometimes called the "ghost city."\n\nAfter lunch, visit Abhaneri's Chand Baori — a 10th-century stepwell as deep as a 7-storey building, with stairs on three sides once used to fetch water. On arrival in Jaipur, check in. Overnight hotel, Jaipur.` },
  { day: "Day 5", title: "Full day sightseeing tour of Jaipur.", text: `The day begins at Amber Palace — reachable by car, elephant or on foot — the old seat of Jaipur's rulers until 1727. Time for a refreshment break and local shopping: Jaipur is known for jewellers, block printing, rugs and blue pottery exported worldwide.\n\nThen the City Palace Museum, still run by the royal family, housing their throne, chandeliers, carpets and murals. Nearby, Jantar Mantar — an 18-instrument astronomical observatory used to calculate time, zodiac positions and solar angles. Overnight hotel, Jaipur.` },
  { day: "Day 6", title: "Drive back to Delhi to connect to your next embarkment.", text: `End of our services.` },
];

export default function DetailModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mt-4 flex justify-center">
        <button onClick={() => setOpen(true)}
          className="rounded-full border border-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white">
          View Detailed Description
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-8"
            onClick={() => setOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 sm:p-10"
              onClick={(e) => e.stopPropagation()}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-serif text-2xl text-[#1B1B1B] sm:text-3xl">Full Itinerary</h3>
                <button onClick={() => setOpen(false)} className="rounded-full bg-[#F5F5F5] p-2 transition hover:bg-[#ECECEC]">
                  <X className="h-5 w-5 text-[#1B1B1B]" />
                </button>
              </div>
              <div className="space-y-8">
                {details.map((d) => (
                  <div key={d.day}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">{d.day}</p>
                    <h4 className="mt-1 font-serif text-lg text-[#1B1B1B]">{d.title}</h4>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#555]">{d.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}