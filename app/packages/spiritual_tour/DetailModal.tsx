"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const details = [
  {
    day: "Day 1",
    title: "ARRIVE AT DELHI AIRPORT. OVERNIGHT DELHI.",
    text: `International flights usually arrive late in the evening or at night, so we recommend considering arrival a day earlier to relax and recover from jet lag. It also serves as a safeguard against possible international flight delays or cancellations. An additional night's stay can be arranged at the time of booking if required.

Upon arrival, you will be warmly greeted by our representative and escorted to your hotel. Your tour itinerary will be briefed to you upon arrival, and all necessary travel documents, vouchers, and intercity travel tickets will be handed over for a smooth and comfortable journey.` },
  {
    day: "Day 2",
    title: "DELHI SIGHT SEEING AND OVERNIGHT DELHI.",
    text: `Today, your tour guide will take you on an exploration of India's capital city, Delhi, which is believed to have been founded, destroyed, and rebuilt more than seven times over the past 5,000 years.

Your tour begins with a visit to the Jama Masjid, a magnificent 17th-century mosque built by the Mughal Emperor Shah Jahan, who also commissioned the construction of India's most iconic monument, the Taj Mahal. The mosque features a vast courtyard that can accommodate nearly 20,000 devotees at a time. You will then experience a traditional rickshaw ride through the narrow lanes of Chandni Chowk, a historic marketplace founded by Shah Jahan's daughter. The bustling market is famous for its spices, bridal wear, dry fruits, and vibrant atmosphere. The way the rickshaw drivers skillfully navigate the crowded streets is truly remarkable, and it is advisable to keep your hands within the armrests to avoid accidental scratches from passing rickshaws.

Next, visit Raj Ghat, the memorial and cremation site of Mahatma Gandhi. An eternal flame burns at his final resting place, surrounded by beautifully maintained green lawns that create a peaceful atmosphere.

Continue to Humayun's Tomb, often referred to as the "Dormitory of the Mughals" because it houses the tombs of several Mughal emperors and members of the royal family. Built in the 16th century by Humayun's second wife, Haji Begum, with the assistance of Persian craftsmen, it is considered the first monument in India to feature a double dome and the Charbagh style of Islamic garden design.

Your final stop in Delhi is the Qutub Minar, a five-storeyed minaret built in the 13th century by the rulers of the Slave Dynasty to commemorate the establishment of Islamic rule in India following Muhammad Ghori's victory over the Hindu ruler Prithviraj Chauhan in the Second Battle of Tarain in 1192. The Qutub complex also includes several historic tombs, mosques, and other remarkable monuments that add to its architectural significance.

After the sightseeing tour, you will be driven back to your hotel.

Overnight stay in New Delhi.` },
  
  {
    day: "Day 3",
    title: "DELHI-BHUBANESWAR-SHRI JAGANNATH JI.",
    text: `After breakfast, you will be driven to the airport to board your flight to Bhubaneswar.

Upon arrival, continue your journey by road to Shri Jagannath Puri (approximately 70 km / 2 hours). After reaching Puri, check in to your hotel and relax.

Overnight stay in Shri Jagannath Puri.` },
  {
    day: "Day 4",
    title: "SHRI JAGANNATH JI TOUR",
    text: `After breakfast, proceed for a sightseeing tour beginning with a visit to the sacred Shri Jagannath Temple, one of India's four holiest pilgrimage sites and an important destination for Hindu devotees.

Continue to the scenic Puri Beach and Swargadwar Beach, both known for their beautiful coastline and vibrant atmosphere. Later, visit the Gundicha Temple, an important shrine closely associated with the famous Rath Yatra festival.

The tour concludes with a visit to the expansive Chilika Lake, the largest brackish water lagoon in India, renowned for its rich biodiversity, migratory birds, and picturesque surroundings.

Overnight stay in Puri.` },
  {
    day: "Day 5",
    title: "DELHI-KONARK-BHUBANESWAR-VARANASI.", 
    text: `After breakfast, drive to Bhubaneswar via Konark. The journey from Puri to Konark is approximately 40 km, while Konark to Bhubaneswar is around 70 km.

En route, visit the world-famous Sun Temple at Konark, a magnificent 13th-century architectural masterpiece and a UNESCO World Heritage Site. Dedicated to the Sun God, the temple is renowned for its intricate stone carvings, colossal chariot-shaped structure, and remarkable craftsmanship.

After the visit, continue your drive to Bhubaneswar. Upon arrival, board your flight to Varanasi.

Varanasi is regarded as the oldest continuously inhabited city in the world and is considered the holiest city in India. According to ancient Hindu beliefs, those who are cremated here are freed from the continuous cycle of birth and rebirth and attain *moksha*, or salvation.

Overnight stay in Varanasi.`},

  {
    day: "Day 6",
    title: "VARANASI TOUR",
    text: `Today, your day begins well before dawn. At the hotel, you may enjoy light refreshments, including beverages and cookies, before setting out with your guide for an unforgettable experience at the ghats, or riverfront steps, along the sacred River Ganges.

The Ganges is revered as the holiest river in Hinduism and is believed to have descended to Earth through divine blessings. Even today, many Hindu families immerse the ashes of their departed loved ones in the Ganges, believing it helps them attain *moksha*, or liberation from the cycle of birth and rebirth. As the first rays of sunlight appear, you will witness hundreds of devotees gathering at the ghats to greet the rising sun, offer prayers, and take a holy dip in the river to cleanse themselves of sins committed knowingly or unknowingly. Others can be seen meditating, chanting prayers, or practicing yoga along the riverbanks, creating an atmosphere of remarkable peace and spirituality.

Board your boat for a serene sunrise cruise, offering spectacular views of the vibrant life unfolding along the ghats. During the cruise, you will also enjoy a live performance of traditional Banaras Gharana music, featuring classical instruments such as the tabla and sitar. The harmonious blend of soulful music, the sacred river, and the ancient ghats creates an enchanting atmosphere that is truly unforgettable.

After the cruise, return to your hotel for breakfast and some time to relax. Later, you may choose to enjoy lunch either at your hotel or at a local restaurant before setting out to explore the narrow lanes and bustling bazaars of Varanasi, which have served pilgrims for centuries.

As you walk along the ghats, you will witness some of the city's most profound and timeless Hindu rituals. The riverfront presents a striking contrast of life's many stages—families performing rituals in memory of departed loved ones, funeral ceremonies at the cremation ghats, parents celebrating the naming ceremonies of newborn children, and newly married couples seeking blessings from priests. This unique coexistence of life, death, faith, and celebration is one of the defining experiences of Varanasi.

Later in the evening, return to the banks of the Ganges to board your boat once again for a sunset cruise. As dusk settles over the city, the boat pauses near Dashashwamedh Ghat to provide an excellent view of the world-famous Ganga Aarti, a spectacular evening prayer ceremony dedicated to Mother Ganges.

Witness priests performing synchronized rituals with large oil lamps while devotional hymns fill the air and hundreds of devotees gather in prayer. Thousands of beautifully lit lamps are floated onto the sacred river, creating a breathtaking sight. You may also choose to float your own lamp from the boat while offering a silent prayer and making a heartfelt wish.

After the ceremony, disembark at a quieter ghat to avoid the crowds and return to your hotel by car.

Overnight stay in Varanasi.` },


  {
    day: "Day 7",
    title: "CHECKOUT AND SARNATH VISIT AND LATER DRIVE TO SHRI AYODHYA JI.",
    text: `After breakfast, check out from your hotel and proceed to Sarnath, located approximately 10 km from Varanasi. Sarnath holds immense significance in Buddhism, as it was here that Gautama Buddha delivered his first sermon after attaining enlightenment at Bodh Gaya. According to Buddhist beliefs, Gautama Buddha attained liberation while still alive by overcoming all worldly desires and conquering his ego.

Sarnath is one of the most important Buddhist pilgrimage sites and is included on UNESCO's Tentative World Heritage List. Here, you will visit the 2,300-year-old Dhamek Stupa, built near the site where Buddha preached his first sermon. The stupa was commissioned by Emperor Ashoka in the 3rd century BC, who played a pivotal role in spreading Buddhism across the Indian subcontinent and beyond. Sarnath is also the place where the first Buddhist Sangha (community of Buddhist monks) was established.

The area is home to several significant Buddhist monuments, which you will pass during your tour. A highlight of the visit is the Archaeological Museum, which houses an exceptional collection of ancient artefacts, including the famous Lion Capital of Ashoka—the four-headed lion sculpture that serves as the National Emblem of India.

After completing the tour, drive to Ayodhya and check in to your hotel.

Overnight stay in Ayodhya.`},
  {
    day: "Day 8 AND DAY 9",
    title: "SHREE AYODHYA JI.",
    text: `Over the next two days, you will explore the sacred city of Ayodhya and visit some of its most revered religious and historical landmarks. Your sightseeing includes the Shri Ram Janmabhoomi Temple, Hanuman Garhi, Saryu Ghat, Kanak Bhawan, Nageshwarnath Temple, Dashrath Bhawan, Sita Ki Rasoi, Guptar Ghat, and several other important temples and spiritual sites associated with the life and legacy of Lord Rama.

These visits offer a deeper insight into Ayodhya's rich cultural heritage and its significance as one of the holiest pilgrimage destinations in India.

Overnight stay in Ayodhya.`},
  {
    day: "Day 10",
    title: "AYODHYA-DELHI-MATHURA.",
    text: `After breakfast, transfer to the airport to board your flight to Delhi. Upon arrival, drive to Mathura, a journey of approximately 185 km (around 3 hours).

On arrival in Mathura, check in to your hotel and relax.

Overnight stay in Mathura.`
  },
  {
    day: "Day 11 AND DAY 12",
    title: " MATHURA. ",
    text: `Over the next two days, you will explore the sacred cities of Mathura and Vrindavan, visiting a series of revered temples and spiritual landmarks associated with the life of Lord Krishna.

Your sightseeing includes Shri Krishna Janmasthan, Vishram Ghat, Shri Dwarkadhish Temple, Prem Mandir, Shri Bhuteshwar Mahadev Temple, Shri Krishna Balaram Temple (ISKCON), Shri Banke Bihari Ji Temple, Shri Raman Bihari Ji Temple, Shri Radha Raman Temple, Shri Radha Vallabh Lal Ji Temple, Shri Radha Rani Temple, Baba Jai Gurudev Mandir, Kans Qila, Shri Nand Yashoda Bhawan in Gokul Dham, and Chaar Dham, Vrindavan. Mathura and Vrindavan are located just 15 km apart, making travel between the two convenient.

These holy towns are among the most important pilgrimage destinations in Hinduism, offering a profound spiritual experience through their ancient temples, vibrant traditions, devotional atmosphere, and rich cultural heritage.

Overnight stay in Mathura.` },
  {
    day: "Day 13",
    title: "MATHURA-AGRA-DELHI. ",
    text: `Drive to Agra, located approximately 60 km from Mathura, and visit the world-renowned Taj Mahal, one of the Seven Wonders of the World and a UNESCO World Heritage Site. Built in the 17th century by the Mughal Emperor Shah Jahan as a symbol of eternal love, the Taj Mahal is celebrated for its breathtaking white marble architecture and timeless beauty.

After the visit, continue your drive to Delhi, a journey of approximately 240 km (around 4 hours).

Upon arrival, check in to your hotel.

Overnight stay in New Delhi.`},
  {
    day: "Day 14",
    title: "DELHI-HARIDWAR. ",
    text: `After breakfast, drive to Haridwar (approximately 240 km / 4 hours). Upon arrival, check in to your hotel and relax.

In the evening, witness the enchanting Ganga Aarti, a deeply spiritual ceremony performed on the banks of the sacred River Ganges. The sight of countless oil lamps, rhythmic chants, devotional hymns, and the serene atmosphere creates an unforgettable experience.

After the ceremony, return to your hotel.

Overnight stay in Haridwar.`
  },
  {
    day: "Day 15",
    title: "HARIDWAR-RISHIKESH. ",
    text: `After breakfast, set out for a full-day excursion to explore the spiritual towns of Haridwar and Rishikesh, located approximately 25 km apart (around 45 minutes by road). Nestled along the banks of the sacred River Ganges and surrounded by the Himalayan foothills, these destinations are renowned for their temples, ashrams, and serene natural beauty.

During the day, visit some of the region's most revered attractions, including Triveni Ghat, Paramarth Niketan Ashram, Ram Jhula, the Beatles Ashram, Shri Neelkanth Mahadev Temple, The Divine Life Society, Swarg Ashram, Patna Waterfall, Geeta Bhawan, Rishi Kund, Lakshman Temple, Lakshman Jhula, Neer Waterfall, Muni Ki Reti, and Vashishta Gufa Ashram. Subject to time and weather conditions, you may also enjoy the thrill of white-water rafting in Rishikesh or explore the rich wildlife of Rajaji National Park.

After a day filled with spiritual, cultural, and natural experiences, return to your hotel.

Overnight stay in Haridwar.` },
  {
    day: "Day 16",
    title: "HARIDWAR-DELHI-INDORE. ",
    text: `After breakfast, drive to Delhi (approximately 250 km / 5 hours) to board your flight to Indore.

Upon arrival in Indore, you will be transferred to your hotel for check-in and relaxation.

Overnight stay in Indore.`
  },
  {
    day: "Day 17",
    title: "INDORE. ",
    text: `After breakfast, set out for a full-day pilgrimage to two of India's most revered Jyotirlingas—Mahakaleshwar and Omkareshwar. Mahakaleshwar is located approximately 60 km from Indore (around 1 hour 45 minutes), while Omkareshwar lies about 80 km away (around 2 hours).

According to Hindu tradition, the twelve Jyotirlingas mark the sacred places where Lord Shiva manifested as an infinite pillar of divine light. It is believed that offering prayers at these holy shrines helps devotees attain spiritual blessings, absolves the sins of this and previous births, and reduces the malefic effects of planetary positions in one's horoscope.

Begin your pilgrimage with a visit to the Mahakaleshwar Jyotirlinga in Ujjain, situated on the banks of the sacred River Shipra. This temple is especially significant because the Shiva Lingam is believed to be Swayambhu, or self-manifested. Ujjain is also one of the four sacred cities that host the Simhastha Kumbh Mela every twelve years, attracting millions of pilgrims from around the world. According to the Varaha Purana, Ujjain is regarded as the Nabhi (navel) of the Earth, and it is believed that Lord Mahakala himself protects the city.

The temple is renowned for its unique Bhasma Aarti, an ancient ritual that was traditionally performed using funeral ashes and is now conducted using sacred ash prepared from cow dung. During your visit, you may also explore the nearby shrines dedicated to Lord Ganesha, Goddess Parvati, and Naag Chandreshwar. The Naag Chandreshwar Temple, however, opens to devotees only once a year during the festival of Naag Panchami.

Later, continue your journey to Omkareshwar, another sacred Jyotirlinga located on the serene banks of the Narmada River. The temple is situated on Mandhata Island, which is believed to resemble the sacred symbol "Om" when viewed from above. The peaceful surroundings and spiritual significance of the temple make it one of the most revered pilgrimage destinations dedicated to Lord Shiva.

After completing your दर्शन and sightseeing, return to Indore.

Overnight stay in Indore.` },
  {
    day: "Day 18",
    title: "INDORE-JAMNAGAR-DWARKA. ",
    text: `After breakfast, board your flight to Jamnagar. Upon arrival, proceed on a scenic drive to Dwarka, covering a distance of approximately 141 km (around 2 hours).

On reaching Dwarka, check in to your hotel and relax. The rest of the day is at leisure to soak in the peaceful atmosphere of one of India's most sacred pilgrimage destinations.

Overnight stay in Dwarka.`
  },
  {
    day: "Day 19",
    title: "DWARKA. ",
    text: `After breakfast, proceed for a full-day sightseeing tour of Dwarka, one of the holiest cities in India and an important destination in the Char Dham pilgrimage.

Begin your day with a visit to the sacred Dwarkadhish Temple, where Lord Krishna is worshipped as the King of Dwarka. The temple, renowned for its grandeur and spiritual significance, has stood as a symbol of devotion for over 150 years and attracts pilgrims from across the country.

Next, proceed to Bet Dwarka, also known as Shankhodhar Island, situated about 2 km off the coast of Okha. Believed to have been the original residence of Lord Krishna, the island is accessible by a short ferry ride and is home to several ancient temples and sacred sites associated with his life.

Continue to Gopi Talav, the sacred pond where, according to Hindu tradition, the Gopis of Vrindavan performed their final Raas Leela with Lord Krishna before he left for Dwarka. It is believed that they later merged with the sacred soil of this land and attained moksha (liberation), making the site deeply revered by devotees.

Later, visit the Rukmini Devi Temple, dedicated to Goddess Rukmini, the principal consort of Lord Krishna. The temple is admired for its intricate carvings and historical significance.

Conclude your pilgrimage with a visit to the revered Nageshwar Jyotirlinga, the tenth of the twelve sacred Jyotirlingas dedicated to Lord Shiva. This ancient temple is one of the most important pilgrimage sites for Shiva devotees and is believed to bestow peace, prosperity, and spiritual blessings upon its visitors.

After the sightseeing tour, return to your hotel.

Overnight stay in Dwarka.` },
  {
    day: "Day 20",
    title: "DWARKA-SOMNATH. ",
    text: `After breakfast, drive to Somnath (approximately 240 km / 4 hours 30 minutes). Enjoy the scenic journey through the picturesque landscapes of Gujarat before arriving at one of India's most sacred pilgrimage destinations.

Somnath is home to the revered Somnath Jyotirlinga, the first among the twelve sacred Jyotirlingas of Lord Shiva. According to Hindu tradition, the original temple was built by Chandra, the Moon God, making it one of the most ancient and significant shrines in India. It is also believed that this is the sacred place where Lord Krishna renounced his mortal body before ascending to his divine abode.

Devotees believe that offering prayers at the Somnath Temple helps reduce the adverse effects of the Moon in one's horoscope and brings peace, prosperity, and spiritual well-being.

Upon arrival, check in to your hotel and, if time permits, visit the magnificent Somnath Temple to experience its serene atmosphere and spiritual grandeur.

Overnight stay in Somnath.` },
  {
    day: "Day 21",
    title: "FULL DAY SOMNATH.",
    text: ``
  },
  {
    day: "Day 22",
    title: "SOMNATH-RAJKOT-DELHI. ",
    text: `After breakfast, drive to Rajkot (approximately 200 km / 4 hours) to board your flight to Delhi.

Upon arrival in Delhi, you will be transferred to the airport or your preferred drop-off point.

Your memorable journey comes to an end with wonderful memories of India's rich heritage, sacred pilgrimage sites, and timeless cultural treasures.

Tour Ends.`
  }
];

export default function DetailModal(){
 const [open,setOpen]=useState(false);
 return <>
 <div className="mt-4 flex justify-center">
 <button onClick={()=>setOpen(true)} className="rounded-full border border-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white">View Detailed Description</button>
 </div>
 <AnimatePresence>{open&&(
 <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-8" onClick={()=>setOpen(false)}>
 <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}} className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 sm:p-10" onClick={e=>e.stopPropagation()}>
 <div className="mb-6 flex items-center justify-between">
 <h3 className="font-serif text-2xl text-[#1B1B1B] sm:text-3xl">Full Itinerary</h3>
 <button onClick={()=>setOpen(false)} className="rounded-full bg-[#F5F5F5] p-2"><X className="h-5 w-5 text-[#1B1B1B]"/></button>
 </div>
 <div className="space-y-8">
 {details.map(d=>(
 <div key={d.day}>
 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">{d.day}</p>
 <h4 className="mt-1 font-serif text-lg text-[#1B1B1B]">{d.title}</h4>
 <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#555]">{d.text}</p>
 </div>
 ))}
 </div>
 </motion.div>
 </motion.div>
 )}</AnimatePresence>
 </>;
}
