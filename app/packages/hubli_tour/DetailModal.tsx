"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";


const details = [
  {
    day: "Day 1",
    title: "ARRIVE AT DELHI AIRPORT. OVERNIGHT DELHI.",
    text: `International flights usually arrive late in evening or at night, so we would recommend to consider arriving a day earlier to recuperate and relax from jetlag and it also serves as an insurance against international flight delays and cancellations, besides an additional night's stay can also be added at the time of the booking.

on arrival, you will be greeted by our executive and will be escorted to your respective hotel and your tour plans will be briefed to you there only, mostly, your necessary documents and travel vouchers will be handed over to you along with the interstate tickets.`,
  },

  {
    day: "Day 2",
    title: "DELHI SIGHT SEEING AND OVERNIGHT DELHI.",
    text: `Today your tour guide will take you for exploration of country's capital city, which is said to have been founded and destroyed and again habited more than seven times in the last 5000 years. your tour will be started with visit of Jama masjid, a 17th century mosque built by the Mughal emperor Shahjahan, who also commissioned the construction of the famous landmark of India, the Taj Mahal. The mosque also consists a large courtyard where 20000 devotees could pray at a time. 
    
    Then, you will also taste the experience of rikshaw ride in the narrow by lanes of Chandni chowk, founded by Shahjahan's daughter, and is famous for spices, wedding dresses for bride and dry fruits. Here the way he drives the rikshaw is really a skill to cherish and are suggested to keep your hand in the boundaries of hand rest to avoid scratch from other overtaking rikshaws. 
    
    Then, next stop will be Rajghat, the cremation site of mahatma Gandhi where eternal flame is burning at his final resting place and is surrounded by lush green lawns. Then you will be driven to Humayun's tomb, which is also known as dormitory of the Mughals, considering the large number of tombs of Mughal emperors and their many relatives built there. The beautiful tomb is the first example of double dome and Charbagh (Islamic design of laying gardens) in india. It is said that the tomb was built by Humayun's second wife hazi Begum for her husband with the help of Persian craftsmen in 16th century. 
    
    Now, you will proceed to the last attraction of your tour in Delhi, the Qutub Minar, a five storied minaret built in 13th century by the kings of slave dynasty to commemorate the arrival of Islam in India after Mohammed Ghori from Ghor defeated the then Hindu ruler Prithviraj Chauhan in 2nd battle of Tarain in 1192. In the campus they have many tombs, mosques etc. as well and later you will be driven back to the hotel. 
    
    Overnight hotel, New Delhi.`,
  },

  {
    day: "Day 3",
    title: "Delhi to Agra (240 kms) and half-day sightseeing. Overnight hotel Agra.",
    text: `After breakfast proceed for a 4-hour drive to Agra, check-in in the hotel after lunch, late in the afternoon, proceed for a half day tour of the city, including Taj Mahal the world-famous monument for eternal love built in 17th century in white marble and this majestic structure stands 2 meter taller than Qutub Minar, is indeed a perfect example of Persian symmetry. 
    
    The only thing which offsets the symmetry of this great building is the tomb of its founder itself as he planned to himself buried elsewhere, rest of the details I'm leaving for the guide to reveal as would really not like to give spoiler as this is no doubt the best monument of north India and is now a UNESCO protected monument in world heritage list. After visit return back to the hotel, overnight hotel Agra.`,
  },

  {
    day: "Day 4",
    title: "AFTER BREAKFAST CHECKOUT AND DRIVE BACK TO DELHI. OVERNIGHT DELHI.",
    text: `After the Red Fort visit you will be driven to Delhi. Overnight Delhi.`,
  },

  {
    day: "Day 5",
    title: "DELHI – AURANGABAD BY FLIGHT.",
    text: `After breakfast you will proceed to airport to board flight for Aurangabad. Here you will visit the famous Ajanta and Ellora caves. These monuments are world's most remarkable achievements of mankind are UNESCO world heritage sites. Overnight hotel, Aurangabad.`,
  },

    {
    day: "Day 6",
    title: "AURANGABAD-AJANTA-AURANGABAD",
    text: `After breakfast, proceed to Ajanta, which is around 100 km away. The excavations, sculptures, and paintings here were created by local craftsmen and Buddhist monks around the 2nd century BC. The sculptures were carved into hard rock using ingenious tools, while the paintings were made using colours derived from natural sources.

The quality of the art and paintings is truly unique and cannot be seen anywhere else in the world.

Overnight stay in Aurangabad.`,
  },

  {
    day: "Day 7",
    title: "AURANGABAD-ELLORA CAVES-AURANGABAD",
    text: `After breakfast, you will be assisted with check-out and taken on a tour to Ellora, which is located around 22 km away, in the opposite direction from Ajanta. Here, you will explore the monasteries and beautifully sculpted cave temples. Among the total of 34 caves, each seems to surpass the others in its architectural brilliance. These caves were built between 600 AD and 1000 AD and are dedicated to Hinduism, Buddhism, and Jainism.

The magnificent Kailash Temple, Cave No. 16, is especially remarkable for its intricate carvings and grand scale. It is believed that six generations of craftsmen worked continuously for nearly 130 years to complete this extraordinary temple, dedicated to Lord Shiva, one of the three principal deities of Hinduism.

According to Hindu beliefs, the three principal deities are Brahma, the Creator of the universe, Vishnu, the Preserver of the universe, and Shiva, the Destroyer, whose role signifies the end of one age and the beginning of the next. It is also believed that Lord Vishnu has already taken nine incarnations to protect mankind, while the tenth incarnation is still awaited.

Later, board your flight to Mumbai. Overnight stay in Mumbai.`,
  },

  {
    day: "Day 8",
    title: "Mumbai-Hubli-Hampi",
    text: `Today, you will be driven to Mumbai Airport to board your flight to Hubli. Upon arrival, drive to Hampi, the last capital of the Vijayanagara Empire. Hampi is believed to be a 2,000-year-old civilization, although its present-day monuments date from the 14th to the 17th century. The destination is renowned for its unique landscape, remarkable architecture, and breathtaking scenery.

Over the next two days, you will explore a series of magnificent monuments and temples, several of which are recognized as UNESCO World Heritage Sites. The landscape is scattered with gigantic boulders that blend seamlessly with the surrounding granite hills, creating a surreal setting. The fascinating legends associated with these monuments make the experience even more memorable.

At the height of the Vijayanagara Empire, Hampi is believed to have been home to nearly one million people, with an equally impressive army assigned to protect this prosperous kingdom. The bustling market once extended across an area of nearly thirty square kilometres. Such was the efficiency of the kingdom's law and order that traders from across Asia and Europe gathered here to buy and sell a wide variety of goods, including spices, precious gems, and silk. Although much of its former grandeur has faded over time, the magnificent ruins continue to tell the story of one of India's greatest empires.

Your sightseeing begins with a visit to the Virupaksha Temple, one of the oldest and most significant structures in Hampi. Dedicated to Lord Shiva, this ancient temple remains an active place of worship. Its magnificent carvings and towering gopuram stand out prominently against the surrounding monuments.

Next, visit the King's Balance, an impressive structure consisting of two massive stone pillars connected by a horizontal beam. In ancient times, kings were ceremonially weighed here against gold, silver, grains, and other valuables, which were then distributed among the needy on special occasions.

Continue to the Pushkarni Tank, a beautifully designed stepped water tank that showcases the exceptional engineering skills of the local artisans. It served as a reliable water source and provided shelter and refreshment for travellers.

Visit the House of Victory, built to commemorate a decisive military triumph of the Vijayanagara rulers. Adorned with intricate carvings and sculptures, the monument stands as a lasting testament to the empire's glorious past, even though much of its original splendour has weathered with time.

Proceed to the Elephant Stables, a magnificent row of majestic chambers connected through graceful arches. These impressive structures once housed the royal elephants of the Vijayanagara Empire.

Later, visit the Malyavanta Raghunatha Swamy Temple, situated atop a hill and built in the traditional South Indian architectural style. The temple offers spectacular panoramic views of the surrounding landscape, making it one of the most scenic locations in Hampi.

You may also visit the renowned Vitthala Temple, dedicated to Lord Vishnu. The temple is famous for its extraordinary Hall of Musical Pillars and the iconic Stone Chariot, both of which are among the finest examples of Vijayanagara architecture.

Overnight stay in Hampi.`,
  },

  {
    day: "Day 9",
    title: "HAMPI VISIT",
    text: `Hampi Visit.`,
  },

  {
    day: "Day 10",
    title: "Hubli-Delhi/Mumbai",
    text: `Today you will be driven to Hubli airport to board flight to Delhi/Mumbai.

Arrival transfer in Delhi/Mumbai from airport to hotel.

Our services ends here.`,
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