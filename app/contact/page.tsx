"use client";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Navbar, Footer, WhatsAppButton, ContactSection } from "@/components/shared";

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF7] font-sans text-[#1B1B1B]">
      <Navbar />
      <section className="px-6 pb-8 pt-40 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">Contact</p>
          <h1 className="mt-3 font-serif text-4xl text-[#2C2C2C] sm:text-6xl">Let's Plan Your Journey</h1>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          <a href="tel:+919352744747" className="flex flex-col items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <Phone className="h-6 w-6 text-[#B91C1C]" />
            <span className="text-sm font-medium">+91-9352744747</span>
          </a>
          <a href="https://wa.me/919352744747" target="_blank" className="flex flex-col items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            <span className="text-sm font-medium">Chat on WhatsApp</span>
          </a>
          <a href="mailto:info@joytoursofindia.com" className="flex flex-col items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <Mail className="h-6 w-6 text-[#B91C1C]" />
            <span className="text-sm font-medium">info@joytoursofindia.com</span>
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}