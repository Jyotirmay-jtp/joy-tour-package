"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const details = [
  {
    day: "Day 1",
    title: "Arrive at Delhi Airport. Overnight Delhi.",
    text: `International flights usually arrive late in evening or at night, so we would recommend to consider arriving a day earlier to recuperate and relax from jetlag and it also serves as an insurance against international flight delays and cancellations, besides an additional night's stay can also be added at the time of the booking.

On arrival, you will be greeted by our executive and will be escorted to your respective hotel and your tour plans will be briefed to you there only. Mostly, your necessary documents and travel vouchers will be handed over to you along with the interstate tickets.`,
  },
  {
    day: "Day 2",
    title: "Delhi Sightseeing. Overnight Delhi.",
    text: `Today your tour guide will take you for exploration of country's capital city, which is said to have been founded and destroyed and again habited more than seven times in the last 5000 years.

Your tour will be started with visit of Jama Masjid, a 17th century mosque built by the Mughal emperor Shahjahan, who also commissioned the construction of the famous landmark of India, the Taj Mahal. The mosque also consists of a large courtyard where 20,000 devotees could pray at a time.

Then, you will also taste the experience of rickshaw ride in the narrow by-lanes of Chandni Chowk, founded by Shahjahan's daughter, and is famous for spices, wedding dresses for bride and dry fruits. Here the way he drives the rickshaw is really a skill to cherish and are suggested to keep your hand in the boundaries of hand rest to avoid scratch from other overtaking rickshaws.

Then, next stop will be Raj Ghat, the cremation site of Mahatma Gandhi where eternal flame is burning at his final resting place and is surrounded by lush green lawns.

Then you will be driven to Humayun's Tomb, which is also known as dormitory of the Mughals, considering the large number of tombs of Mughal emperors and their many relatives built there. The beautiful tomb is the first example of double dome and Charbagh (Islamic design of laying gardens) in India. It is said that the tomb was built by Humayun's second wife Hazi Begum for her husband with the help of Persian craftsmen in the 16th century.

Now, you will proceed to the last attraction of your tour in Delhi, the Qutub Minar, a five storied minaret built in the 13th century by the kings of the Slave Dynasty to commemorate the arrival of Islam in India after Mohammed Ghori from Ghor defeated the then Hindu ruler Prithviraj Chauhan in the Second Battle of Tarain in 1192.

In the campus they have many tombs, mosques etc. as well and later you will be driven back to the hotel.

Overnight hotel, New Delhi.`,
  },

  {
    day: "Day 3",
    title: "Delhi – Kathmandu. Overnight Kathmandu.",
    text: `Drive to the airport to board your flight to Kathmandu.

On arrival, you will be assisted and driven to your hotel.

Overnight Kathmandu.`,
  },
  {
    day: "Day 4",
    title: "Kathmandu Sightseeing.",
    text: `After breakfast proceed for the tour of the city and visit Durbar Square, Boudhnath Stupa, Pashupatinath Temple, the holy Bagmati River, Patan City, Swayambhu Nath Pagoda and also enjoy a walk in Thamel, the main bazaar of Kathmandu.`,
  },
  {
    day: "Day 5",
    title: "Kathmandu – Nagarkot.",
    text: `Drive to Nagarkot (27 kms / 1 hour).

It is famous for hiking, paragliding, nature trails, sunrise and sunset points and panoramic views of Mount Everest.`,
  },
  {
    day: "Day 6",
    title: "Nagarkot – Chitwan.",
    text: `Drive to Chitwan (205 kms / 6 hours).

Enjoy traditional Tharu music and rafting at Narayani River.

Overnight Chitwan.`,
  },
  {
    day: "Day 7",
    title: "Chitwan National Park Safari.",
    text: `Enjoy safaris in Chitwan National Park, famous for one-horned rhinoceros and different species of birds.`,
  },
  {
    day: "Day 8",
    title: "Chitwan Safari.",
    text: `Enjoy another exciting wildlife safari in Chitwan National Park.`,
  },
  {
    day: "Day 9",
    title: "Chitwan – Pokhara.",
    text: `Drive to Pokhara (130 kms / 5 hours).

Pokhara is famous for its natural beauty, lakes and the Annapurna Himalayan Range having a height of 6000 meters. Paragliding and boating could also be organized here.

Overnight Pokhara.`,
  },
  {
    day: "Day 10",
    title: "Pokhara Sightseeing.",
    text: `Visit Peace Pagoda and Davis Falls along with the monuments you could not complete the previous day.

Also visit Seti River Gorge, Old Pokhara and Bindhyabasini Temple.

Overnight Pokhara.`,
  },
  {
    day: "Day 11",
    title: "Pokhara – Kathmandu.",
    text: `Drive to Kathmandu (200 kms / 6 hours).

Visit the local bazaar of Dhulikhel with its traditional Newari architecture, the Kali Temple and the Namo Buddha Monastery.`,
  },
  {
    day: "Day 12",
    title: "Departure.",
    text: `Drive to the international airport to board your onward flight.

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