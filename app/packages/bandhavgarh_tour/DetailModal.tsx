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

Your tour will be started with visit of Jama Masjid, a 17th century mosque built by the Mughal emperor Shahjahan, who also commissioned the construction of the famous landmark of India, the Taj Mahal. The mosque also consists a large courtyard where 20000 devotees could pray at a time.

Then, you will also taste the experience of rickshaw ride in the narrow by lanes of Chandni Chowk, founded by Shahjahan's daughter, and is famous for spices, wedding dresses for bride and dry fruits. Here the way he drives the rickshaw is really a skill to cherish and are suggested to keep your hand in the boundaries of hand rest to avoid scratch from other overtaking rickshaws.

Then, next stop will be Rajghat, the cremation site of Mahatma Gandhi where eternal flame is burning at his final resting place and is surrounded by lush green lawns.

Then you will be driven to Humayun's Tomb, which is also known as dormitory of the Mughals, considering the large number of tombs of Mughal emperors and their many relatives built there. The beautiful tomb is the first example of double dome and Charbagh (Islamic design of laying gardens) in India. It is said that the tomb was built by Humayun's second wife Hazi Begum for her husband with the help of Persian craftsmen in the 16th century.

Now, you will proceed to the last attraction of your tour in Delhi, the Qutub Minar, a five storied minaret built in the 13th century by the kings of the Slave Dynasty to commemorate the arrival of Islam in India after Mohammed Ghori from Ghor defeated the then Hindu ruler Prithviraj Chauhan in the 2nd Battle of Tarain in 1192.

In the campus they have many tombs, mosques etc. as well and later you will be driven back to the hotel.

Overnight hotel, New Delhi.`,
  },

  {
    day: "Day 3",
    title: "Delhi – Jabalpur – Bandhavgarh.",
    text: `After breakfast you will be driven to the airport to board your flight to Jabalpur.

After arrival proceed for your drive to Bandhavgarh (175 kms / 4 hours).

Overnight Bandhavgarh.`,
  },

  {
    day: "Day 4",
    title: "Bandhavgarh Wildlife Safari by Jeep.",
    text: `Bandhavgarh is counted among few of the best parks in India where tiger sightings are very common and almost guaranteed.

The park is home to tigers, sloth bears, Indian bison, leopards, deer and langoors and also claims to have more than 200 species of birds including Crested Serpent Eagle, Indian Roller etc.

Enjoy your wildlife safari by jeep.

Overnight Bandhavgarh.`,
  },

  {
    day: "Day 5",
    title: "Bandhavgarh Wildlife Safari by Jeep.",
    text: `Enjoy another exciting wildlife safari by jeep in Bandhavgarh National Park.

Bandhavgarh is famous for its high tiger density along with sloth bears, Indian bison, leopards, deer, langoors and a rich variety of birdlife.

Overnight Bandhavgarh.`,
  },

  {
    day: "Day 6",
    title: "Drive to Khajuraho.",
    text: `Drive to Khajuraho (230 kms / 6 hours).

After breakfast drive to Khajuraho where you will visit the Khajuraho Group of Monuments, a UNESCO World Heritage Site known for its Hindu and Jain temples of the medieval period having erotic sculptures and intricate carvings.

Among the most remarkable are Kandaria Mahadev Temple, Lakshman Temple, Dhubela Museum, Chaturbhuj Temple, Kalinjar Fort and Parshvanath Temple.`,
  },

  {
    day: "Day 7",
    title: "Day Return Trip to Panna.",
    text: `After breakfast proceed for your drive to Panna (45 kms / 1 hour).

The place is famous for Pandav Waterfalls, Raneh Falls, the Ken Gharial Sanctuary and ancient caves.

In the evening enjoy a wildlife safari.

Overnight Khajuraho.`,
  },

  {
    day: "Day 8",
    title: "Khajuraho – Orchha.",
    text: `Either you can have another safari in Panna in the morning or you can drive from Khajuraho to Orchha (175 kms / 3 hours).

In Orchha you can visit Raja Mahal, Jahangir Mahal, the unique Shree Ram Raja Mandir, Panchmukhi Hanuman Temple or stroll along the Betwa River.

Overnight Orchha.`,
  },

  {
    day: "Day 9",
    title: "Drive to Agra & Half-Day Sightseeing.",
    text: `Drive to Agra (260 kms / 4 hours).

After breakfast proceed for a 4-hour drive to Agra, check-in in the hotel after lunch.

Later in the afternoon proceed for a half-day tour of the city including Taj Mahal, the world-famous monument for eternal love built in the 17th century in white marble. This majestic structure stands 2 metre taller than Qutub Minar and is indeed a perfect example of Persian symmetry.

The only thing which offsets the symmetry of this great building is the tomb of its founder itself as he planned to himself buried elsewhere. Rest of the details I am leaving for the guide to reveal as would really not like to give spoiler as this is no doubt the best monument of North India and is now a UNESCO protected World Heritage Site.

After visit return back to the hotel.

Overnight hotel, Agra.`,
  },

    {
    day: "Day 10",
    title: "Drive to Ranthambore.",
    text: `After breakfast you will be driven to Fatehpur Sikri. The fort was built in the 16th century and was the seat of the kingdom until they moved it to Delhi.

After visit of the fort, you will also visit Fatehpur Sikri enroute Jaipur, a place from where Mughal emperor Akbar ruled for fifteen years, though later he had to move the capital back to Agra as here they started having shortage of drinking water and irrigation difficulties. Hence, the place is also sometimes called the Ghost City.

After the visit enroute Ranthambore you can have a lunch break. After lunch you can also visit Abha Neri where they have a 10th century stepwell popularly known as Chand Baori located next to a beautiful village. The depth of this stepwell is equivalent to a modern 7-storey building. There are stairs made on three sides of the stepwell which were used in the good old days by people to fetch water, though no more accessible now.

Then continue your drive to Ranthambore through the rural landscape.

In Ranthambore Royal Bengal Tigers are the main attraction, besides one can see a variety of deer, antelopes, sloth bears, crocodiles, leopards and over 300 species of birds. The park covers an area around 400 square kilometres and runs along the eastern spurs of the Aravali Mountain Range until it meets Vindhyachal.

It was once a hunting ground of the Jaipur royal family and was declared a sanctuary in 1972 and later brought under Project Tiger.

Safaris here are operated by the Forest Department with their own naturalists and drivers. They are usually 4-hour excursions conducted twice a day, morning and late afternoon. Guests usually enjoy two to three safaris.

Besides the safaris, if you are interested, you can also visit Ranthambore Fort. The stairway to the fort is right next to the park entry gate. The fort, built in 944 AD, is a chronicle full of blood, chivalry and valour of the Rajput rulers.

The access to the fort is a steep climb of around 300 stairs. There is an ancient temple which is a major shrine for pilgrims. Visitors are advised to stay away from the aggressive langoors, which may snatch away eatables or belongings.

Overnight hotel, Ranthambore.`,
  },

  {
    day: "Day 11",
    title: "Morning & Evening Safaris in Ranthambore.",
    text: `Enjoy morning and evening jeep safaris in Ranthambore National Park.

Overnight hotel, Ranthambore.`,
  },

  {
    day: "Day 12",
    title: "Drive to Jaipur.",
    text: `After breakfast checkout and drive to Jaipur.

On arrival in Jaipur, check in to the hotel.

Overnight hotel, Jaipur.`,
  },

  {
    day: "Day 13",
    title: "Full Day Sightseeing Tour of Jaipur.",
    text: `After breakfast proceed for a full day excursion of the beautiful Pink City.

Today the tour will start from Amber Palace, which could be accessed by car, elephant or by foot. Elephant ride is also quite safe but should you wish, you can also take the car all the way up to the top. It was the old capital and seat of the ancestors of Jaipur kings up to 1727 till the time when they moved the capital to Jaipur city itself.

After the palace should you wish, you can have a small refreshment break and should you wish to buy local souvenirs or other artefacts you can go for that also as Jaipur has been a paradise for shoppers. Here the city houses some of the best jewellers, block printing industry, local rugs, blue pottery and other handicraft items which are exported all around the world.

Then you will be brought back to the old city where you will now visit the City Palace Museum, which houses old artefacts of the royal family of Jaipur including their throne, beautiful chandeliers, old carpets, paintings and mural frescoes. The museum is still run by the royal family.

Then in the neighbourhood of the museum, in the adjacent campus, is the Jantar Mantar, an astronomical observatory consisting of around 18 instruments all used for different purposes like calculating time, knowing zodiac signs, calculating angle of altitude of the sun and angle of rotation of the earth.

After the visit return back to the hotel.

Overnight hotel, Jaipur.`,
  },

  {
    day: "Day 14",
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