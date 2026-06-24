"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, tileFadeUp } from "@/lib/motion-variants";

const tiles = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4z" stroke="#D4A017" strokeWidth="1.5"/>
        <path d="M12 18h12M18 12v12" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="3" fill="#D4A017" fillOpacity="0.3"/>
      </svg>
    ),
    title: "Harare Streets",
    description:
      "From the golden avenues of Borrowdale to the kinetic hum of Mbare Musika, Harare moves at its own rhythm — beautiful, layered, and impossible to fake.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="14" width="8" height="16" rx="2" stroke="#D4A017" strokeWidth="1.5"/>
        <rect x="14" y="10" width="8" height="20" rx="2" stroke="#D4A017" strokeWidth="1.5"/>
        <rect x="22" y="6" width="8" height="24" rx="2" stroke="#D4A017" strokeWidth="1.5"/>
        <path d="M6 30h24" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "The Hustle Economy",
    description:
      "Mushikashika taxis, rooftop vendors, informal lenders — Harare's parallel economy runs on trust, nerve, and the unspoken knowledge of who you owe.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 8c-5 0-9 4-9 9 0 3 1.5 5.5 4 7l5 6 5-6c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" stroke="#C4727A" strokeWidth="1.5"/>
        <path d="M15 17l2 2 4-4" stroke="#C4727A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Love Under Pressure",
    description:
      "When circumstances are this volatile, love stops being a luxury and becomes an act of defiance. Nandi and Tafa have no business falling for each other — which is exactly why they do.",
  },
];

export default function WorldSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="world" className="py-28 px-6 relative" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[rgba(212,160,23,0.02)] to-[#0A0A0F] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 text-center"
        >
          The World
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-5xl font-black text-white text-center mb-6 leading-tight"
        >
          A city that lives<br />
          <span style={{ color: "#D4A017" }}>between dusk and debt.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-[#A8B2C1] max-w-xl mx-auto mb-16 leading-relaxed"
        >
          Harare is not a backdrop. It is a character. Every alley, every deal, every hesitation belongs to this city.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              custom={i}
              variants={tileFadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-panel p-8 group hover:border-[rgba(212,160,23,0.3)] transition-colors duration-300"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {tile.icon}
              </div>
              <h3 className="font-poppins font-black text-xl text-white mb-3">{tile.title}</h3>
              <p className="text-sm text-[#A8B2C1] leading-relaxed">{tile.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
