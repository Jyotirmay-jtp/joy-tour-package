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
    title: "Delhi to Agra (240 kms) & Half-Day Sightseeing.",
    text: `After breakfast proceed for a 4-hour drive to Agra. Check-in in the hotel after lunch.

Late in the afternoon proceed for a half-day tour of the city including the Taj Mahal, the world-famous monument for eternal love built in the 17th century in white marble. This majestic structure stands 2 metres taller than Qutub Minar and is indeed a perfect example of Persian symmetry.

The only thing which offsets the symmetry of this great building is the tomb of its founder itself as he planned to himself be buried elsewhere. Rest of the details I’m leaving for the guide to reveal as would really not like to give spoiler as this is no doubt the best monument of North India and is now a UNESCO protected World Heritage Site.

After visit return back to the hotel.

Overnight hotel, Agra.`,
  },

  {
    day: "Day 4",
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
    day: "Day 5",
    title: "Morning & Evening Safaris in Ranthambore.",
    text: `Enjoy morning and evening jeep safaris in Ranthambore National Park.

Overnight hotel, Ranthambore.`,
  },

  {
    day: "Day 6",
    title: "Drive to Jaipur.",
    text: `After breakfast checkout and drive to Jaipur.

On arrival in Jaipur, check in to the hotel.

Overnight hotel, Jaipur.`,
  },

  {
    day: "Day 7",
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
    day: "Day 8",
    title: "Drive to Narlai.",
    text: `After breakfast, start your drive to Narlai (340 kms), a beautiful village located around 6 hours away.

A heritage property will be your stay. If you want, you can book your stay in the new wing, but the old wing is designed completely on a heritage theme and takes you back in time to how the heads of hereditary fiefdoms used to live. Here one relives the aura of royal splendour. Rawla means the residence of the head of a fiefdom.

The lodge has been restored quite meticulously by its owners. The cuisine is prepared using produce from their organic farms and nearby villages.

In the evening, you will be transported to an ancient 300-year-old stepwell on traditional bullock carts where your dinner is hosted amid live local cultural performances. During the performance hundreds of lamps illuminate the stepwell, making the dinner an unforgettable experience.

After dinner return back to your lodge.

Overnight lodge, Rawla Narlai.`,
  },

  {
    day: "Day 9",
    title: "Narlai – Udaipur.",
    text: `In the morning you can choose from two activities.

Either enjoy a leopard safari in the nearby area by lodge jeeps along with their naturalist, or join the lodge steward for the Elephant Boulder ascent. If you go for the safari, the ride is a bit bumpy as you drive through the local rough terrain. If you opt for the ascent, be ready to climb around 700 hand-carved steps leading to the top of the giant rock.

The view from the top is fabulous and you can also enjoy beverages brought by the steward on the way up.

After descending the rock, enjoy your breakfast in the lodge followed by checkout.

You will then be driven to Udaipur via Ranakpur, a shrine famous for intricately carved Jain temples and still an active place of worship. The temple's 29 halls are supported by 1444 intricately carved pillars and none of them are alike in design. The beauty of the temple needs to be seen to be believed.

After the visit you can have lunch nearby and later continue to Udaipur, around 90 kms away. On the way you can see village life along with camels, sheep and other livestock. This is one of the most picturesque drives in India.

On arrival check in to your hotel.

Overnight hotel, Udaipur.`,
  },

  {
    day: "Day 10",
    title: "Udaipur Sightseeing.",
    text: `After breakfast proceed on a drive to Monsoon Palace, located on a hill offering a fabulous view of the city and its lakes.

The drive passes through forest areas where you may spot wildlife.

After the palace visit, return to the city and enjoy a walk through the narrow lanes and bazaars of the Lake City. Visit a photo gallery where accomplished painters create Udaipur's famous miniature paintings.

Later a tuk-tuk (auto rickshaw) will take you to your lunch place. This ride will not be as smooth as the car journey because these vehicles have no shock absorbers, but they are widely used by the local people.

After lunch your guide will take you to the City Palace where you can admire massive ivory doors, stained glass windows, inlaid marble balconies and beautifully decorated rooms with hundreds of exquisitely carved mirrors.

Adjacent to the City Palace is the Crystal Gallery. It houses one of the world's largest collections of priceless crystal artefacts including a crystal bedroom, crystal furniture and crystal fountain. Its visit is optional.

Sunset Cruise: After the City Palace visit you will proceed to the palace jetty and board your boat for a cruise on mesmerising Lake Pichhola. After the cruise, return back to your hotel.

Overnight hotel, Udaipur.`,
  },

  {
    day: "Day 11",
    title: "Udaipur – Aurangabad by Flight.",
    text: `After lunch you will proceed to the airport to board your flight for Aurangabad via Hyderabad.

There will be a three-hour layover at Hyderabad.

Here you will visit the famous Ajanta and Ellora Caves. These monuments are among the world's most remarkable achievements of mankind and are UNESCO World Heritage Sites.

Overnight hotel, Aurangabad.`,
  },

  {
    day: "Day 12",
    title: "Aurangabad – Ajanta – Aurangabad.",
    text: `After breakfast proceed to Ajanta, which is around 100 kms away.

The excavations, sculptures and paintings here were created by local craftsmen and Buddhist monks around the 2nd century BC. The sculptures are carved in hard rock using ingenious tools and the paintings are made using colours from natural sources.

The quality of art and paintings is unique and cannot be seen anywhere else in the world.

Overnight Aurangabad.`,
  },

  {
    day: "Day 13",
    title: "Aurangabad – Ellora Caves – Aurangabad.",
    text: `After breakfast you will be assisted in checkout and taken for a tour of Ellora, located around 22 kms away in the opposite direction of Ajanta.

Here you will explore monasteries and finely sculpted cave temples. The 34 caves were built between 600 AD and 1000 AD and are devoted to Hinduism, Buddhism and Jainism.

The magnificent Kailash Temple, Cave No. 16, is remarkable for its minute details and grand scale. Six generations of craftsmen worked continuously for over one hundred and thirty years to complete this masterpiece dedicated to Lord Shiva, one of the Hindu Trinity.

Later board your flight to Mumbai.

Overnight Mumbai.`,
  },

  {
    day: "Day 14",
    title: "Mumbai Sightseeing.",
    text: `After breakfast proceed for the tour of the economic capital of India and the Bollywood city.

Your tour starts from the Gateway of India overlooking Mumbai Harbour. Continue to Chhatrapati Shivaji Terminus, a UNESCO World Heritage Site and one of the world's busiest railway stations.

Walk around Mumbai's heritage architecture including Flora Fountain, Horniman Circle, Mumbai Town Hall and the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly Prince of Wales Museum).

Enjoy a lunch break at the historic Leopold Café, serving since 1871.

Later visit Dhobi Ghat where hundreds of washermen continue the century-old tradition of washing clothes in the open.

Continue to Malabar Hill and the Hanging Gardens before returning to the hotel.

Overnight hotel, Mumbai.`,
  },

  {
    day: "Day 15",
    title: "Mumbai – Cochin by Flight.",
    text: `Drive to the airport with packed lunch and board your flight to Cochin.

Upon arrival you will be driven to Fort Kochi and check in to your hotel.

Fort Kochi is famous for Ayurvedic massages, Kathakali dance performances and its unique blend of British, Portuguese and Dutch architecture.

The rest of the day is at leisure. In the evening your guide will take you for a Kathakali dance performance, an ancient art of storytelling through dance and considered the mother of many South Asian dance forms.

Overnight Fort Kochi.`,
  },

    {
    day: "Day 16",
    title: "Fort Kochi Tour.",
    text: `First thing in the morning will be the tour of the Chinese Fishing Nets. Folklore has it that these nets were first brought here by Chinese explorer Zhang He about 600 years ago. The local fishermen use these massive nets with an ease that comes from centuries of generational experience. Ownership of these nets and their specific location is handed down from generation to generation. The way they lower and raise these nets is a sight to watch and the synchronicity is awe inspiring.

Later proceed for a walk through the colonial architecture and visit chic cafés, boutique stores and many more. You will also see colourful artwork at Santa Cruz Cathedral Basilica and St. Francis Church, established by Portuguese Franciscan friars in 1503, proudly boasting to be the first European church built in India.

The famous Portuguese explorer Vasco da Gama, the first European to reach India by sea, was initially buried in its courtyard for a few years until his mortal remains were taken to Portugal.

Then proceed to David Hall, a 17th century building which houses a rotating selection of art exhibits. Here you can also enjoy local cuisine in the nearby café. The food is CGH Earth quality, serving Indian, Continental cuisine and drinks. Wood-fired pizza with thin crust prepared in an Indian clay oven is the speciality of the place.

After lunch the guide will take you to Paradesi Synagogue built in 1568 and still in use. Then visit Mattancherry Palace built by the Portuguese in 1555 and famous for its detailed carved wooden murals depicting scenes from the Ramayana and Mahabharata.

Return back to the hotel.

Overnight hotel, Kochi.`,
  },

  {
    day: "Day 17",
    title: "Kochi – Alleppey.",
    text: `Checkout from the hotel and drive to Alleppey (55 kms), the land of backwaters.

On arrival you will be assisted in boarding your houseboat. Here you will witness incredible lush vegetation around canals, rivulets and lakes, with numerous waterways, coconut groves and tropical surroundings creating a unique landscape.

You will get a chance to experience local life from close quarters. Though roads now connect most houses, residents traditionally depended on waterways and many still do. The canals serve as their streets and alleys while fishing and agriculture remain the primary occupations.

Overnight houseboat, Alleppey.`,
  },

  {
    day: "Day 18",
    title: "Alleppey – Cochin Airport – Delhi.",
    text: `After breakfast checkout and drive to Cochin Airport.

Enroute explore Vypin Island and visit Cherai Beach where you will see Azhekkal Temple, famous for its chariot. Then visit the Portuguese Fort built in 1503, the oldest European structure in India. You can also visit Balli Puram Church, built in 1577 by the Portuguese.

Later enjoy a walk along the coastline followed by lunch.

After lunch drive straight to the airport to avoid rush hours and board your flight to Delhi or your home destination.

Upon arrival in Delhi you will be driven to your upscale airport hotel near the airport where you can bid farewell to your guide and driver.

Overnight Delhi.`,
  },

  {
    day: "Day 19",
    title: "Departure or Continue to Varanasi.",
    text: `Option 1:

After checkout from the hotel you will be driven to the airport to board your international flight either by Joy Tours vehicle or by the private hotel vehicle.

OR.`
  },
 {
    day: "Day 20",
    title: "Delhi Varanasi By Flight.",
    text: `You will be driven to airport to board your flight to Varanasi. Lunch will be served during the flight.

On arrival you will be driven to your luxury hotel.

Varanasi is the oldest continuously inhabited city in the world and one of the holiest cities of India. According to ancient Hindu belief, those cremated here attain moksha and are freed from the cycle of birth and rebirth.

Overnight Varanasi.`,
  },

  {
    day: "Day 21",
    title: "Varanasi Tour.",
    text: `Today you have to start your day quite earlier than the dawn. In the hotel you can have beverages and cookies and head start for an enchanting experience with your guide to the ghats or banks of the river Ganges. Ganges is a sacred river and is believed to appear on earth with the blessings of the gods. Even now in Hindu families, they have a tradition to flow the ashes of the dead relatives in Ganges for their moksha. Today it is going to be a lifelong and surreal experience to witness the devout Hindus waiting at the ghats to greet the rising sun and taking dip in the holy river to wash away their sins, done knowingly or by fault or ignorance. While you can see many others standing on the stairs of the ghats doing meditation and practicing yoga. 
    
    Your boat offers an excellent view of the activities on the Ghats. During your cruise you will also experience a live performance of the traditional Benares gharana music. Banaras gharana is an old sect of music incorporating tabla and sitar. The ambience created by the fusion of classical music and the surrounding ghats is awesome and rare and need to be felt to believed. After the cruise return back to your hotel for breakfast and relaxing during day hours. 
    
    Should you wish, you can have lunch outside at chowk restaurant at taj hotel or in your hotel itself. Then proceed for a walk in the old bazaars of Benares catering to visiting pilgrims and all. later when you will walk through the banks of the Ganges you will witness some of the ancient and iconic rituals of the Hindus. There at the same time you will see contrast of activities strong enough to make one ponder regarding emotional front, as at one time you will see somebody getting his head shaved to give tributes to the dead relative, somebody cremating their relative and at the same time you will also witness people orchestrating name of their newly born child by the local priest and at the very place you will also see newlyweds getting blessed by the priests. 
    
    Later in the evening, you will be escorted to the banks again to board your cruise for second round to witness the evening activities from your cruise and also the famous Ganges Aarti, prayer ceremony. Around sunset the cruise pauses around Dashashwamedh ghat for a close-up view of the aarti ceremony. Here you will watch people in gathering of hundreds in number praising songs in praise of mother Ganges and floating lamps to get their wishes granted by the goddess. During the aarti thousands of lamps are floated and you can also float your lamps from the boat itself and make a wish from mother Ganges. Later you will disembark at an outer bank to avoid rush and catch your car for returning back to your hotel.
`,
  },

  {
    day: "Day 22",
    title: "Sarnath Visit & Flight to Delhi.",
    text: `After breakfast check out from your hotel and proceed for Sarnath, which is around 10 kms from Varanasi. The place holds important position in Buddhism as it was here where Gautam buddha the prophet of Buddhism delivered his first sermon after attaining highest knowledge at Bodh Gaya. In Buddhism it is said that Gautam buddha attained salvation while being alive only by conquering his ego. It is a Buddhist pilgrimage site that is on the tentative UNESCO heritage list. Here they have 2300 years old dhamekha stupa located near the place where buddha preached his first sermon. The stupa was built by Ashoka, who also spread the religion to far and wide in 3rd century before Christ. First Buddhist Sangh (community of Buddhist monks) was also formed here. 

The area is home to number of Buddhist monuments that you will drive by. The highlight of the Sarnath tour is a brief stop at a very small archaeological museum with its impressive collection of artefacts, which include the four headed lion that is Indian national emblem. Then later in the evening slightly after lunch you will board flight for Delhi. On arrival in Delhi, you will be received by joy tours car and driven back to your hotel. Day will be at leisure and you can enjoy the extensive facilities of your hotel. 

Overnight hotel, NEW DELHI.`,
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