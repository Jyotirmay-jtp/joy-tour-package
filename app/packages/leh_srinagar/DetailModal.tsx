"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const details = [
  {
    day: "Day 1",
    title: "Arrival in Leh. Overnight Leh.",
    text: `Arrival transfer from Kushok Bakula Rinpoche Airport to Leh. Leh is at an elevation of 3500 metres above sea level so it is advisable to drink more water and avoid any kind of strenuous activity on the first day to get adaptable to the climate. Here you can try local Ladakhi food like thupka, skyu, mokmok, khambir and chhang (a barley beer) accompanied by the salty Tibetan butter tea, gur gur Cha.

Overnight Leh.`,
  },
  {
    day: "Day 2",
    title: "Leh – Hemis – Leh.",
    text: `Drive from Leh to Hemis and back. Enroute visit Stok, Stakna, Thiksey and Shey. (Leh to Hemis is around 35 kms / 50 minutes).

Today you will visit the famous cultural sites of the Indus Valley such as Thiksey Monastery, Shey and Stok Palaces.`,
  },
  {
    day: "Day 3",
    title: "Leh – Khardungla – Diskit – Hunder.",
    text: `Leh to Khardungla is 40 kms / 1 hour 20 minutes and Leh to Hunder is around 126 kms / 3 hours 30 minutes.

Khardungla is the world's highest driveable pass and you will also see Diskit Monastery and the Hunder sand dunes of Nubra Valley.

Overnight Hunder.`,
  },
  {
    day: "Day 4",
    title: "Hunder – Sumur – Khardungla – Leh.",
    text: `Drive from Hunder to Sumur and continue via Khardungla back to Leh.

Overnight Leh.`,
  },
  {
    day: "Day 5",
    title: "Leh – Pangong Lake – Leh.",
    text: `Leh to Pangong Lake is 222 kms or 5 hour drive.

Pangong is famous for its stunning blue, green and even red water that changes colours throughout the day and is surrounded by dramatic rugged mountains. It is the highest saltwater lake in the world and is a serene high-altitude destination in the Himalayas famous for the tranquil ambience.

Many iconic movies were shooted here including '3 Idiots' and it is also serving as a breeding ground for various migratory birds.

Overnight Leh.`,
  },
  {
    day: "Day 6",
    title: "Leh – Kargil via Alchi & Lamayuru.",
    text: `Drive from Leh to Kargil via Alchi and Lamayuru.

Leh to Kargil is 215 kms or 4 hours 30 minutes drive.

Today you can visit Gurudwara Pathar Sahib and at the mysterious Magnetic Hill you can even witness your car moving upward with the engine off defying gravity.

You can also visit Basgo, Likir Monastery, Alchi Monastery and Lamayuru, a picturesque village.

Overnight Kargil.`,
  },
  {
    day: "Day 7",
    title: "Kargil – Srinagar via Zojila & Sonmarg.",
    text: `Kargil to Srinagar is 202 kms or 5 hour drive.

Today you will see Zojila Pass which connects Ladakh and Kashmir Valley, and later in Srinagar you will see the famous Mughal Gardens, Dal Lake and should you wish, you can also spend a night at the local houseboat which is a lifetime experience.

Overnight Srinagar.`,
  },
  {
    day: "Day 8",
    title: "Departure from Srinagar.",
    text: `Today you will be driven to Srinagar Airport to board your connecting flight.

Here for Nubra Valley and Pangong Lake you will be needing an Inner Line Permit which can be obtained from Leh's Ladakh Autonomous Hill Development Council (LAHDC) and usually takes one working day. Our team in Leh can assist you in dealing with the local license work.

For it you can apply online as well and later the same is to be signed by the authorities in Leh. Our drivers here are quite local and well versed with the terrains and neighbourhood and owing to the altitude of the place should you wish you can also carry an oxygen cylinder which could be arranged beforehand.`,
  },
];

export default function DetailModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white"
        >
          View Detailed Description
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white p-6 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-serif text-2xl text-[#1B1B1B] sm:text-3xl">
                  Full Itinerary
                </h3>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#F5F5F5] p-2 transition hover:bg-[#ECECEC]"
                >
                  <X className="h-5 w-5 text-[#1B1B1B]" />
                </button>
              </div>

              <div className="space-y-10">
                {details.map((d) => (
                  <section
                    key={d.day}
                    className="border-b border-neutral-200 pb-8 last:border-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">
                      {d.day}
                    </p>

                    <h4 className="mt-2 font-serif text-xl text-[#1B1B1B]">
                      {d.title}
                    </h4>

                    <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#555]">
                      {d.text}
                    </p>
                  </section>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}