"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const characters = [
  {
    name: "Nandi",
    role: "The Visitor",
    origin: "Johannesburg, South Africa",
    description:
      "A sharp-tongued logistics manager who trusted her heart over her instincts. She came to Harare chasing love and won't leave until she finds the truth.",
    color: "#C4727A",
    gradient: "from-[rgba(196,114,122,0.2)] to-[rgba(196,114,122,0.02)]",
    initial: "N",
  },
  {
    name: "Tafa",
    role: "The Driver",
    origin: "Mbare, Harare",
    description:
      "Knows every pothole in Harare's streets and every loophole in its unspoken rules. Loyal to a fault — which is exactly why Micho owns him.",
    color: "#D4A017",
    gradient: "from-[rgba(212,160,23,0.2)] to-[rgba(212,160,23,0.02)]",
    initial: "T",
  },
  {
    name: "Micho",
    role: "The Loan Shark",
    origin: "Harare CBD",
    description:
      "All warmth on the surface, all calculation underneath. He's never raised his voice in his life — he doesn't need to. Everyone already knows what's at stake.",
    color: "#A8B2C1",
    gradient: "from-[rgba(168,178,193,0.2)] to-[rgba(168,178,193,0.02)]",
    initial: "M",
  },
  {
    name: "Chido",
    role: "The Ally",
    origin: "Harare North",
    description:
      "Tafa's cousin, Nandi's unlikely confidante. Runs a street food stall that doubles as the neighbourhood news service. She knows everything — and shares it for the right price.",
    color: "#D4A017",
    gradient: "from-[rgba(212,160,23,0.15)] to-[rgba(196,114,122,0.05)]",
    initial: "C",
  },
];

export default function CharactersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="characters" className="py-28 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 text-center"
        >
          Characters
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-5xl font-black text-white text-center mb-16 leading-tight"
        >
          Everyone in Harare<br />
          <span className="text-[#C4727A]">plays two games at once.</span>
        </motion.h2>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none"
          style={{ scrollbarWidth: "none" }}
        >
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              variants={fadeUp}
              custom={i}
              whileHover={{
                rotateX: 4,
                rotateY: 4,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="glass-panel p-6 min-w-[280px] md:min-w-0 snap-center cursor-default flex-shrink-0 md:flex-shrink"
              style={{ perspective: "800px" }}
            >
              {/* Avatar silhouette */}
              <div
                className={`w-full h-40 rounded-xl mb-6 bg-gradient-to-b ${char.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-transparent" />
                <span
                  className="font-black text-6xl opacity-20"
                  style={{ color: char.color }}
                >
                  {char.initial}
                </span>
                {/* Silhouette suggestion */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 rounded-t-full opacity-10"
                  style={{ background: char.color }}
                />
              </div>

              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-1"
                style={{ color: char.color }}
              >
                {char.role}
              </p>
              <h3 className="font-poppins font-black text-2xl text-white mb-1">{char.name}</h3>
              <p className="text-xs text-[rgba(168,178,193,0.5)] tracking-wider mb-4 uppercase font-semibold">
                {char.origin}
              </p>
              <p className="text-sm text-[#A8B2C1] leading-relaxed">{char.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
