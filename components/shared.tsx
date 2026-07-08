"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Packages", "Gallery", "FAQs", "Contact"];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-serif text-xl text-white drop-shadow">Joy Tours of India</span>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-white/90 drop-shadow transition hover:text-white">{l}</a>
          ))}
          <a href="#plan" className="rounded-full bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#DC2626]/30 transition hover:bg-[#B91C1C]">
            Plan My Trip
          </a>
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(true)}><Menu className="h-6 w-6" /></button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-[#1B1B1B]/95 p-8 md:hidden">
          <button className="mb-10 text-white" onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
          <div className="flex flex-col gap-6">
            {links.map((l) => <a key={l} href="#" className="font-serif text-2xl text-white">{l}</a>)}
            <a href="#plan" className="mt-4 rounded-full bg-[#DC2626] px-5 py-3 text-center text-sm font-semibold text-white">Plan My Trip</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function IconGrid({
  eyebrow, title, items, variant = "light",
}: { eyebrow: string; title: string; items: { icon: any; label: string }[]; variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <section className={`px-6 py-24 sm:px-10 ${dark ? "bg-[#1B1B1B]" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">{eyebrow}</p>
          <h2 className={`mt-3 font-serif text-4xl sm:text-5xl ${dark ? "text-white" : "text-[#2C2C2C]"}`}>{title}</h2>
          {!dark && <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-[#B91C1C]/20" />}
        </motion.div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div key={label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={`group rounded-3xl p-6 text-center transition-all duration-300 ${
                dark ? "bg-white/5 ring-1 ring-white/10 hover:-translate-y-2 hover:bg-white/10"
                     : "border border-[#ECECEC] bg-white shadow-sm hover:-translate-y-2 hover:border-[#B91C1C]/25 hover:shadow-xl"}`}>
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                dark ? "bg-gradient-to-br from-[#991B1B] to-[#DC2626]" : "bg-[#B91C1C]/10 group-hover:bg-[#B91C1C]"}`}>
                <Icon className={`h-6 w-6 transition-all duration-300 ${dark ? "text-white" : "text-[#B91C1C] group-hover:text-white"}`} strokeWidth={1.8} />
              </div>
              <p className={`mt-5 text-sm font-medium leading-6 ${dark ? "text-white/90" : "text-[#444]"}`}>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA({ heading, sub, primary = "Plan My Journey", secondary = "Contact Us" }:
  { heading: string; sub: string; primary?: string; secondary?: string }) {
  return (
    <section id="plan" className="bg-[#FAFAF7] px-6 py-24 sm:px-10">
      <motion.div {...fadeUp} className="mx-auto max-w-5xl rounded-[40px] border border-[#ECECEC] bg-white px-8 py-20 text-center shadow-[0_25px_60px_-25px_rgba(0,0,0,0.12)] sm:px-16">
        <h2 className="font-serif text-4xl text-[#2C2C2C] sm:text-5xl">{heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#666]">{sub}</p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#991B1B]">
            {primary} <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-[#B91C1C] bg-white px-8 py-3.5 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#B91C1C] hover:text-white">
            {secondary}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-serif text-lg text-[#1B1B1B]">Joy Tours of India</span>
        <p className="text-sm text-[#1B1B1B]/50 text-center">
          101, Vaishali Marg, Vaishali Nagar, Jaipur – 302021 · +91-9352744747 · info@joytoursofindia.com
        </p>
      </div>
    </footer>
  );
}