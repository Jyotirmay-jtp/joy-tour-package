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
    title: "DELHI SIGHT SEEING TOUR.",
    text: `Today, your tour guide will take you on an exploration of India's capital city, Delhi, which is believed to have been founded, destroyed, and rebuilt more than seven times over the past 5,000 years.

Your tour begins with a visit to the Jama Masjid, a magnificent 17th-century mosque built by the Mughal Emperor Shah Jahan, who also commissioned the construction of India's most iconic monument, the Taj Mahal. The mosque features a vast courtyard that can accommodate nearly 20,000 devotees at a time. You will then experience a traditional rickshaw ride through the narrow lanes of Chandni Chowk, a historic marketplace founded by Shah Jahan's daughter. The bustling market is famous for its spices, bridal wear, dry fruits, and vibrant atmosphere. The way the rickshaw drivers skillfully navigate the crowded streets is truly remarkable, and it is advisable to keep your hands within the armrests to avoid accidental scratches from passing rickshaws.

Next, visit Raj Ghat, the memorial and cremation site of Mahatma Gandhi. An eternal flame burns at his final resting place, surrounded by beautifully maintained green lawns that create a peaceful atmosphere.

Continue to Humayun's Tomb, often referred to as the "Dormitory of the Mughals" because it houses the tombs of several Mughal emperors and members of the royal family. Built in the 16th century by Humayun's second wife, Haji Begum, with the assistance of Persian craftsmen, it is considered the first monument in India to feature a double dome and the Charbagh style of Islamic garden design.

Your final stop in Delhi is the Qutub Minar, a five-storeyed minaret built in the 13th century by the rulers of the Slave Dynasty to commemorate the establishment of Islamic rule in India following Muhammad Ghori's victory over the Hindu ruler Prithviraj Chauhan in the Second Battle of Tarain in 1192. The Qutub complex also includes several historic tombs, mosques, and other remarkable monuments that add to its architectural significance.

After the sightseeing tour, you will be driven back to your hotel.

Overnight stay in New Delhi.`,
  },

  {
    day: "Day 3",
    title: "Delhi to Agra (240 kms) and half-day sightseeing.",
    text: `After breakfast, proceed on a 4-hour drive to Agra. Upon arrival, check in to your hotel and relax after lunch. Later in the afternoon, embark on a half-day tour of the city, including a visit to the world-famous Taj Mahal.

Built in the 17th century in pristine white marble as a symbol of eternal love, the Taj Mahal is one of the finest examples of Persian symmetry. This majestic structure stands nearly 2 metres taller than the Qutub Minar. The only feature that breaks its perfect symmetry is the tomb of its founder, who had originally planned to be buried elsewhere. The rest of its fascinating history is best revealed by your guide, as it would be a shame to spoil the experience. Undoubtedly, it is one of the greatest monuments in North India and is a UNESCO World Heritage Site.

After the visit, return to your hotel.

Overnight stay in Agra.`,
  },

  {
    day: "Day 4",
    title: "Agra to Jaipur via Fatehpur Sikri & Abhaneri",
    text: `After breakfast, check out from the hotel and drive to Jaipur after visiting the Red Fort. 
    
    The Red Fort was built in the 16th century and served as the seat of the Mughal Empire until the capital was shifted to Delhi. After exploring the fort, continue your journey towards Jaipur with a visit to Fatehpur Sikri en route.

Fatehpur Sikri was the capital of the Mughal Emperor Akbar for nearly fifteen years. However, due to a shortage of drinking water and irrigation challenges, the capital was eventually moved back to Agra. Because of its abandonment, the city is often referred to as the "Ghost City." The magnificent palaces, courtyards, and monuments here continue to reflect the grandeur of the Mughal era.

After lunch, you may also visit Abhaneri, a charming village renowned for its 10th-century stepwell, popularly known as Chand Baori. The depth of this remarkable stepwell is equivalent to a modern seven-storey building. Staircases on three sides of the well were once used by local residents to fetch water, although they are no longer accessible today.

Upon arrival in Jaipur, check in to your hotel.

Overnight stay in Jaipur.`,
  },

  {
    day: "Day 5",
    title: "Full day sight-seeing tour of Jaipur.",
    text: `After breakfast, proceed for a full-day excursion of the beautiful Pink City of Jaipur. Your tour begins with a visit to the magnificent Amber Palace, which can be reached by car, on foot, or by a traditional elephant ride. The elephant ride is considered safe, although you may choose to travel by car all the way to the entrance if you prefer. Amber Palace served as the old capital and the seat of the ancestors of the Jaipur royal family until 1727, when the capital was shifted to Jaipur.

After exploring the palace, you may take a short refreshment break. If you wish, you can also browse the local markets for souvenirs and traditional handicrafts. Jaipur is a shopper's paradise, renowned for its exquisite jewellery, block-printed textiles, blue pottery, handcrafted rugs, gemstones, and a variety of other artisanal products that are exported across the world.

Later, return to the old city to visit the City Palace Museum, which showcases an impressive collection of royal artefacts belonging to the Jaipur royal family. The museum features magnificent thrones, elegant chandeliers, antique carpets, miniature paintings, mural frescoes, royal costumes, and many other historical treasures. It continues to be managed by the royal family.

Adjacent to the City Palace is the Jantar Mantar, a remarkable astronomical observatory comprising around 18 scientific instruments. These instruments were designed for various purposes, including measuring time, determining zodiac positions, calculating the altitude of the sun, and studying the movement of celestial bodies.

After the sightseeing tour, return to your hotel.

Overnight stay in Jaipur.`,
  },

    {
    day: "Day 6",
    title: "Drive to Jodhpur.",
    text: `After enjoying your breakfast at the hotel, leave for Jodhpur, famously known as the "Sun City."

Upon arrival, check in to your hotel and relax for a while before beginning your sightseeing tour.

Later, embark on a half-day tour of Jodhpur with a visit to the magnificent Mehrangarh Fort, one of the largest and most impressive forts in India. Construction of this grand fort began in 1459 under the reign of Rao Jodha, the founder of Jodhpur and chief of the Rathore clan. Built from red sandstone, the fort stands majestically above the city and offers breathtaking panoramic views of Jodhpur.

Continue your sightseeing with a visit to Jaswant Thada, an elegant white marble memorial built in 1899 by Maharaja Sardar Singh in memory of his father, Maharaja Jaswant Singh II. The intricately carved cenotaph is renowned for its peaceful surroundings and exquisite architecture.

Next, visit the magnificent Umaid Bhawan Palace, where you will explore the museum showcasing an impressive collection of China vases, antique clocks, royal furniture, vintage photographs, weapons, and other artefacts belonging to the Maharajahs of Jodhpur.

After the sightseeing tour, return to your hotel.

Overnight stay in Jodhpur.`,
  },

  {
    day: "Day 7",
    title: "Drive to Udaipur via Ranakpur.",
    text: `You will be driven to Udaipur via Ranakpur, home to the world-famous Jain temples renowned for their intricate marble carvings. These temples continue to serve as an active place of worship for the Jain community.

The Jain community follows a strictly vegetarian lifestyle and traditionally has its meals during daylight hours. The temple complex is an architectural masterpiece, with 29 beautifully designed halls supported by 1,444 intricately carved marble pillars, no two of which are alike. The extraordinary craftsmanship and beauty of the temple truly need to be seen to be believed.

After your visit, you may enjoy lunch in the nearby area before continuing your journey to Udaipur, located approximately 90 km from Ranakpur.

During the drive, you will pass through the scenic countryside, where you can observe the simple day-to-day lives of the local villagers and spot livestock such as camels, sheep, and cattle. This route is considered one of the most picturesque drives in India, offering stunning views of the Aravalli Hills and rural Rajasthan.

Upon arrival in Udaipur, check in to your hotel.

Overnight stay in Udaipur.`,
  },

  {
    day: "Day 8",
    title: "Udaipur Sightseeing.",
    text: `After breakfast, proceed on a drive to the Monsoon Palace, situated atop a hill overlooking Udaipur. The palace offers breathtaking panoramic views of the city, its lakes, and the surrounding Aravalli Hills.

The drive passes through a forested area, and with a little luck, you may spot some of the local wildlife along the way. After visiting the palace, return to the city and enjoy a leisurely walk through the narrow lanes and bustling bazaars of the Lake City. You will also visit a local art gallery, where skilled artists continue the centuries-old tradition of creating Udaipur's famous miniature paintings.

Later, experience a ride in a traditional tuk-tuk (auto rickshaw) to your lunch venue. Although the ride may not be as smooth as travelling by car, it offers an authentic glimpse into the everyday mode of transport used by the local people and is an enjoyable part of the city's charm.

After lunch, your guide will take you to the magnificent City Palace, one of Rajasthan's most spectacular royal residences. The palace showcases an extraordinary collection of massive ivory doors, stained-glass windows, intricately inlaid marble balconies, lavishly decorated rooms, and hundreds of exquisitely carved mirrors embedded in the walls.

Adjacent to the City Palace is the Crystal Gallery, home to one of the world's largest collections of priceless crystal artefacts, including crystal furniture, a crystal bedroom, crystal fountains, and many other remarkable exhibits. A visit to the Crystal Gallery is optional.

In the evening, proceed to the palace jetty to board your boat for a memorable sunset cruise on the enchanting Lake Pichola. As you sail across the tranquil waters, admire the stunning views of the City Palace, Jag Mandir, Lake Palace, and the surrounding hills bathed in the warm glow of the setting sun.

After the cruise, disembark and return to your hotel by car.

Overnight stay in Udaipur.`,
  },

  {
    day: "Day 9",
    title: "Udaipur – Delhi.",
    text: `After lunch you will proceed to airport to board flight for Delhi or you can drive to Pushkar.

Visit Pushkar city and Brahma Temple.

Overnight Pushkar.`,
  },

  {
    day: "Day 10",
    title: "Departure.",
    text: `After breakfast checkout and drive to Delhi to board your further connection.`,
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