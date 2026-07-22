"use client";
import { Navbar, Footer, WhatsAppButton } from "@/components/shared";

const faqs = [
  { q: "What is the price of an India tour package?", a: "India can be enjoyed on a wide range of budgets. On average, traveling economically may cost about USD 100 per day, while luxury travel can go up to USD 1,000 per day or more, depending on the choice of hotels, cars, and services." },
  { q: "How many days are enough to visit India?", a: "To explore India thoroughly, you would need around 21–28 days or more. If time is limited, the Golden Triangle (Delhi, Agra, Jaipur) can be covered in just 6 days." },
  { q: "How much does a tour guide cost in India?", a: "A licensed professional tour guide generally charges between ₹2,500–3,500 (USD 40–50) per day for a city tour, depending on language, knowledge and skill set." },
  { q: "Which months are best for visiting India?", a: "October to March (winter season) is best. Christmas and New Year are peak periods with heavy crowds — avoid the last week of December for a more peaceful trip." },
  { q: "How much tip should we give to waiters, drivers, and guides?", a: "Waiters: 5–10% of the bill. Drivers: ₹500–₹1,000 per day. Guides: ₹1,000–₹1,500 per day, depending on service quality." },
  { q: "How long should my visa be?", a: "A 6-month visa validity is recommended for flexibility." },
  { q: "Do I need vaccinations?", a: "Ensure you are fully vaccinated for COVID-19 and carry basic medicines for fever, headache, stomach upset, or nausea." },
  { q: "Can I wear Western outfits in India?", a: "Yes — shirts, T-shirts, sleeveless tops and shorts are common in cities and tourist areas. Modest dressing is appreciated in rural regions and religious sites." },
  { q: "Which circuits include the Taj Mahal?", a: "Most travellers combine Delhi, Agra and Jaipur. With more time you can add cultural cities, heritage sites, beaches, adventure spots or peaceful retreats." },
  { q: "What kind of food do Indians usually eat?", a: "Most households prefer vegetarian food, but non-vegetarian dishes are very popular too, especially in urban areas." },
  { q: "Can foreigners get a local SIM card in India?", a: "Yes — with a passport copy, valid visa, and hotel address, foreigners can easily buy SIM cards from major providers." },
  { q: "What should I pack when coming to India?", a: "An umbrella or raincoat, a warm jacket for winter travel, comfortable sports shoes, and basic medicines." },
  { q: "How is the weather in India?", a: "Summer (Mar–Jun): up to 47–48°C. Monsoon (Jul–Sep): heavy rains. Winter (Oct–Feb): pleasant, 12–15°C by day. Beach destinations stay mild year-round; Kashmir & Himalayas are very cold in winter." },
  { q: "Is it safe to travel in India?", a: "Yes — India lives by \"Atithi Devo Bhava\" (the guest is equivalent to God) and visitors are treated with warmth and respect. As with any country, avoid walking alone late at night; our guides will brief you on safety from day one." },
  { q: "What are the beliefs of Indian people?", a: "Cities are mostly modern, flexible and liberal, while rural areas tend to be more traditional due to cultural norms and joint-family systems." },
  { q: "How do Indians greet?", a: "The traditional greeting is a warm \"Namaste\" or the more formal \"Namaskar.\"" },
  { q: "What is the general etiquette in India?", a: "Public displays of affection are discouraged, though same-sex friends holding hands is common and purely platonic. Dress modestly, especially in rural or traditional areas." },
];

export default function FAQsPage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <section className="px-6 pb-20 pt-40 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">FAQs</p>
          <h1 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-6xl">Common Questions</h1>
        </div>
        <div className="mx-auto mt-14 max-w-3xl space-y-5">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-[#ECECEC] bg-white p-6">
              <p className="font-semibold text-[#1B1B1B]">{f.q}</p>
              <p className="mt-2 text-sm leading-6 text-[#666]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}