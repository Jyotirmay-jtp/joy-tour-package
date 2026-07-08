"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./shared";

export function PackageCard({ title, badge, desc, href, i }: { title: string; badge: string; desc: string; href: string; i: number }) {
  return (
    <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
      className="group relative h-80 overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(27,27,27,0.25)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#991B1B] to-[#1B1B1B] transition-transform duration-700 group-hover:scale-110" />
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#B91C1C]">{badge}</span>
      <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-6 transition-all duration-300 group-hover:bg-black/60">
        <h3 className="font-serif text-2xl text-white">{title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-white/80 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
          {desc}
        </p>
        <Link href={href} className="mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[#DC2626] px-4 py-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          View Tour <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}