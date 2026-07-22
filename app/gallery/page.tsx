"use client";
import { motion } from "framer-motion";
import { Navbar, Footer, WhatsAppButton, fadeUp } from "@/components/shared";
import Image from "next/image";


const categories = [ "Heritage", "Wildlife", "Culture", "Landscapes"];

const images = [
  { src: "/images/gallery/g1.webp" },
  { src: "/images/gallery/g2.webp" },
  { src: "/images/gallery/g3.webp" },
  { src: "/images/gallery/g4.webp" },
  { src: "/images/gallery/g5.webp" },
  { src: "/images/gallery/g6.webp" },
  { src: "/images/gallery/g7.webp" },
  { src: "/images/gallery/g8.webp" },
  { src: "/images/gallery/g9.webp" },
  { src: "/images/gallery/g10.webp" },
  { src: "/images/gallery/g11.webp" },
  { src: "/images/gallery/g12.webp" },
  { src: "/images/gallery/g13.webp" },
  { src: "/images/gallery/g14.webp" },
  { src: "/images/gallery/g15.webp" },
  { src: "/images/gallery/g16.webp" },
  { src: "/images/gallery/g17.webp" },
  { src: "/images/gallery/g18.webp" },
  { src: "/images/gallery/g19.webp" },
  { src: "/images/gallery/g20.webp" },
  { src: "/images/gallery/g21.webp" },
  { src: "/images/gallery/g22.webp" },
  { src: "/images/gallery/g23.webp" },
  { src: "/images/gallery/g24.webp" },
  { src: "/images/gallery/g25.webp" },
  { src: "/images/gallery/g26.webp" }
];

export default function GalleryPage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <section className="px-6 pb-16 pt-40 sm:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Gallery</p>
          <h1 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-6xl">Moments From The Road</h1>
          <p className="mx-auto mt-5 max-w-xl text-[#666]">A glimpse into the journeys we've crafted across India.</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-[#ECECEC] bg-white px-5 py-2 text-sm font-medium text-[#1B1B1B] transition hover:border-[#B91C1C]/30 hover:text-[#B91C1C]">{c}</span>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 8) * 0.05 }}
              className="group relative h-52 overflow-hidden rounded-3xl shadow-[0_20px_45px_-25px_rgba(27,27,27,0.3)] sm:h-64">
<Image
  src={img.src}
  alt={`Gallery Image ${i + 1}`}
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-110"
/>             </motion.div>
          ))}
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
