"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const details = [
  {
    day: "Day 1",
    title: "Arrive at Delhi Airport. Overnight Delhi.",
    text: `International flights usually arrive late in evening or at night, so we would recommend to consider arriving a day earlier to recuperate and relax from jetlag and it also serves as an insurance against international flight delays and cancellations, besides an additional night's stay can also be added at the time of the booking.

On arrival, you will be greeted by our executive and will be escorted to your respective hotel and your tour plans will be briefed to you there only. Your necessary documents and travel vouchers will be handed over to you along with the interstate tickets.`,
  },
  {
    day: "Day 2",
    title: "Delhi Sightseeing. Overnight Delhi.",
    text: `Today your tour guide will take you for exploration of the country's capital city, which is said to have been founded and destroyed and again inhabited more than seven times in the last 5000 years.

Your tour will start with Jama Masjid, a 17th century mosque built by Mughal emperor Shahjahan. The mosque also consists of a large courtyard where 20,000 devotees could pray at a time.

Then enjoy a rickshaw ride through the narrow lanes of Chandni Chowk, founded by Shahjahan's daughter and famous for spices, wedding dresses and dry fruits. Guests are advised to keep their hands inside the rickshaw to avoid scratches from passing vehicles.

Next visit Raj Ghat, the cremation site of Mahatma Gandhi where the eternal flame burns at his final resting place.

Continue to Humayun's Tomb, also known as the dormitory of the Mughals, built by Hazi Begum in the 16th century with the help of Persian craftsmen. It is India's first example of a double dome and Charbagh garden design.

Later visit Qutub Minar, a five-storeyed minaret built in the 13th century. The complex also houses many tombs and mosques. Return to the hotel. Overnight hotel, New Delhi.`,
  },
  {
    day: "Day 3",
    title: "Delhi to Agra (240 kms) and Half-Day Sightseeing. Overnight Agra.",
    text: `After breakfast proceed for a 4-hour drive to Agra. Check in to the hotel after lunch.

Later in the afternoon proceed for a half-day city tour including the Taj Mahal, the world-famous monument of eternal love built in white marble during the 17th century. This majestic structure stands 2 metres taller than Qutub Minar and is a perfect example of Persian symmetry. Today it is a UNESCO World Heritage Site.

After the visit return back to the hotel. Overnight hotel, Agra.`,
  },
  {
    day: "Day 4",
    title: "Drive to Ranthambore.",
    text: `After breakfast you will be driven to Fatehpur Sikri. The fort was built in the 16th century and was the seat of the kingdom before the capital shifted.

Continue to Fatehpur Sikri, from where Mughal emperor Akbar ruled for fifteen years before moving back due to water shortage. Hence, the place is also known as the Ghost City.

After lunch visit Abha Neri and the famous Chand Baori, a 10th century stepwell whose depth is equivalent to a modern 7-storey building.

Continue your drive through the rural landscape to Ranthambore. Royal Bengal Tigers are the main attraction along with deer, antelopes, sloth bears, crocodiles, leopards and over 300 species of birds.

The park covers around 400 square kilometres and was declared a sanctuary in 1972 under Project Tiger. Safaris are operated by the Forest Department with trained naturalists and drivers.

Guests usually enjoy two to three safaris. Those interested may also visit Ranthambore Fort, built in 944 AD, reached by climbing around 300 steps. The fort also houses an ancient temple and visitors are advised to stay away from the aggressive langoors.

Overnight hotel, Ranthambore.`,
  },
  {
    day: "Day 5",
    title: "Morning & Evening Safaris in Ranthambore.",
    text: `Morning and evening jungle safaris in Ranthambore National Park.

Enjoy the opportunity to spot Royal Bengal Tigers along with a variety of wildlife including deer, antelopes, crocodiles, leopards and numerous bird species.

Overnight hotel, Ranthambore.`,
  },
  {
    day: "Day 6",
    title: "Drive to Jaipur. Overnight Jaipur.",
    text: `After breakfast checkout and drive to Jaipur.

On arrival in Jaipur, check in to the hotel.

Overnight hotel, Jaipur.`,
  },
  {
    day: "Day 7",
    title: "Full Day Sightseeing Tour of Jaipur.",
    text: `After breakfast proceed for a full-day excursion of the Pink City.

Begin with Amber Palace, which can be reached by car, elephant or on foot. It remained the capital of Jaipur's rulers until 1727.

Later enjoy some free time for refreshments and shopping. Jaipur is famous for jewellery, block printing, rugs, blue pottery and traditional handicrafts.

Continue to the City Palace Museum, which houses royal artefacts including the throne, chandeliers, carpets, paintings and mural frescoes. The museum is still managed by the royal family.

Nearby visit Jantar Mantar, an astronomical observatory consisting of around 18 instruments used for calculating time, zodiac signs, solar altitude and other astronomical observations.

Return to the hotel. Overnight hotel, Jaipur.`,
  },
  {
    day: "Day 8",
    title: "Drive Back to Delhi.",
    text: `After breakfast the driver will take you back to Delhi to connect to your next embarkment.

End of our services.`,
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
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 sm:p-10"
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

              <div className="space-y-8">
                {details.map((d) => (
                  <div key={d.day}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">
                      {d.day}
                    </p>

                    <h4 className="mt-1 font-serif text-lg text-[#1B1B1B]">
                      {d.title}
                    </h4>

                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#555]">
                      {d.text}
                    </p>
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