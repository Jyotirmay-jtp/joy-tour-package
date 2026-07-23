"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";


export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Packages", href: "/#packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
      scrolled ? "bg-[#2A2438]/40 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-serif text-xl text-white drop-shadow">Joy Tours of India</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm font-medium text-white/90 drop-shadow transition hover:text-white">
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/919352744747" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#DC2626]/30 transition hover:bg-[#B91C1C]">
            Plan My Trip
          </a>
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(true)}><Menu className="h-6 w-6" /></button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#2A2438]/90 backdrop-blur-xl p-8 md:hidden">
          <button className="mb-10 text-white" onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
          <div className="flex flex-col gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-serif text-2xl text-white">{l.label}</a>
            ))}
            <a href="https://wa.me/919352744747" target="_blank" className="mt-4 rounded-full bg-[#DC2626] px-5 py-3 text-center text-sm font-semibold text-white">Plan My Trip</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function IconGrid({ eyebrow, title, items, variant = "light" }:
  { eyebrow: string; title: string; items: { icon: any; label: string }[]; variant?: "light" | "dark" }) {
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

export function CTA({
  heading,
  sub,
  primary = "Plan My Journey",
}: {
  heading: string;
  sub: string;
  primary?: string;
}) {
  return (
    <section id="plan" className="bg-[#FAFAF7] px-6 py-24 sm:px-10">


      <motion.div
        {...fadeUp}
        className="mx-auto max-w-5xl rounded-[40px] border border-[#ECECEC] bg-white px-8 py-20 text-center shadow-[0_25px_60px_-25px_rgba(0,0,0,0.12)] sm:px-16"
      >
        <h2 className="font-serif text-4xl text-[#2C2C2C] sm:text-5xl">
          {heading}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#666]">
          {sub}
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B91C1C] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#991B1B]"
          >
            {primary}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/919352744747" target="_blank"
      className="fixed right-5 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition hover:scale-110">
      <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
    </a>
  );
}


export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.currentTarget, "YOUR_PUBLIC_KEY")
      .then(() => setStatus("sent")).catch(() => setStatus("error"));
  };

  return (
    <section  className="bg-[#FAFAF7] px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-center font-serif text-3xl text-[#1B1B1B]">Send Us a Query</h3>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input name="user_name" required placeholder="Your Name" className="sm:col-span-2 rounded-full border border-[#ECECEC] px-5 py-3 text-sm outline-none focus:border-[#B91C1C]" />
<input name="user_email" required type="email" placeholder="Your Email" className="rounded-full border border-[#ECECEC] px-5 py-3 text-sm outline-none focus:border-[#B91C1C]" />
<input name="user_phone" required type="tel" placeholder="Your Phone Number" className="rounded-full border border-[#ECECEC] px-5 py-3 text-sm outline-none focus:border-[#B91C1C]" />
<textarea name="message" required placeholder="Your Message" rows={4} className="sm:col-span-2 rounded-3xl border border-[#ECECEC] px-5 py-3 text-sm outline-none focus:border-[#B91C1C]" /><button type="submit" className="sm:col-span-2 rounded-full bg-[#B91C1C] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#991B1B]">
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Query"}
          </button>
          {status === "error" && <p className="sm:col-span-2 text-center text-sm text-red-600">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Packages", href: "/#packages" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1B1B1B] px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand & Contact */}
          <div>
            <h3 className="font-serif text-2xl text-white">
              Joy Tours of India
            </h3>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>101, Vaishali Marg</p>
              <p>Vaishali Nagar, Jaipur – 302021</p>
              <p>+91-9352744747</p>
              <p>info@joytoursofindia.com</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-end">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Joy Tours of India. All Rights Reserved.
          </p>

          <p className="mt-2 text-xs text-white/30">
            Website Designed & Developed by{" "}
            <a
              href="https://ecommbuddy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white underline"
            >
              EcommBuddy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
