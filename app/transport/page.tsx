"use client";
import Image from "next/image";
import { Navbar, Footer, WhatsAppButton } from "@/components/shared";

const vehicles = ["Sedan Cars", "Premium Luxury Sedans", "SUVs", "MUVs", "Tempo Travellers", "Mini Coaches", "Large Luxury Coaches"];

export default function TransportPage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <section className="px-6 pb-20 pt-40 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Getting Around</p>
          <h1 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-6xl">Comfortable Transportation</h1>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6 rounded-[32px] border border-[#ECECEC] bg-white p-8 text-[#444] leading-7 sm:p-12">
          <p>
            Every memorable journey begins with reliable transportation. At Joy Tours India, we provide
            comfortable, clean, and well-maintained vehicles for individuals, families, and groups of all
            sizes.
          </p>
          <p>Choose from a wide range of vehicles:</p>
          <div className="flex flex-wrap gap-3">
            {vehicles.map((v) => (
              <span key={v} className="rounded-full bg-[#F5E7D3] px-4 py-2 text-sm font-medium text-[#1B1B1B]">{v}</span>
            ))}
          </div>
          <p>
            All our vehicles are air-conditioned, regularly maintained, and driven by experienced, courteous,
            and professional drivers who prioritize your comfort and safety.
          </p>
          <p>
            Because we work directly with vehicle owners instead of intermediaries, we are able to offer
            competitive pricing without compromising on quality. Our focus is on providing exceptional value
            and reliable service so that our guests choose Joy Tours India for every future visit to India.
          </p>
          <p>
            Whether you need an airport transfer, a day tour, or transportation for a multi-city journey, we
            ensure a smooth, comfortable, and hassle-free travel experience from start to finish.
          </p>
        </div>

        ...
{/* Vehicle Photos */}
<div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[28px]">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className="relative h-[350px] rounded-[28px] overflow-hidden border border-[#ECECEC] bg-white">
      <Image
        src="/images/gallery/traveller.webp"
        alt="Joy Tours Traveller"
        fill
        className="object-contain p-4"
      />
    </div>

    <div className="relative h-[350px] rounded-[28px] overflow-hidden border border-[#ECECEC] bg-white">
      <Image
        src="/images/gallery/sedan.webp"
        alt="Joy Tours Sedan"
        fill
        className="object-contain p-4"
      />
    </div>
  </div>
</div>

</section>
<Footer />
<WhatsAppButton />
</main>
  );
}