"use client";
import { motion } from "framer-motion";

const items = [
  "DIRECTED BY PEKAHIA",
  "ZIMBABWE",
  "2025",
  "ROMANTIC CRIME COMEDY",
  "HARARE",
  "MUSHIKASHIKA LOVE",
  "SSADZA FUND",
  "AFRICAN CINEMA",
];

const repeated = [...items, ...items, ...items, ...items];

export default function MarqueeStrip() {
  return (
    <div className="py-5 overflow-hidden border-y border-[rgba(212,160,23,0.15)] bg-[rgba(212,160,23,0.03)]">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-xs font-black tracking-[0.35em] uppercase text-[#D4A017] px-6">
              {item}
            </span>
            <span className="text-[#D4A017] opacity-40 text-xs">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
