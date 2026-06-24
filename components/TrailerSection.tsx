"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export default function TrailerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section id="trailer" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      {/* Orb backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(ellipse,rgba(212,160,23,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(ellipse,rgba(196,114,122,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4"
          >
            Official Trailer
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Watch the Story<br />
            <span style={{ color: "#C4727A" }}>Unfold.</span>
          </motion.h2>
        </motion.div>

        {/* Video frame */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative w-full aspect-video glass-panel overflow-hidden group cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          {/* Gradient placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.08)] via-[rgba(10,10,15,0.9)] to-[rgba(196,114,122,0.08)]" />

          {/* Cinematic scan lines */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 3px)",
            }}
          />

          {/* Film grain texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Placeholder text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[rgba(168,178,193,0.3)] font-semibold mb-8">
              Mushikashika Love · 2025
            </p>

            {/* Play button */}
            {!playing && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.5)] flex items-center justify-center backdrop-blur-sm group-hover:bg-[rgba(212,160,23,0.25)] transition-all duration-300 shadow-[0_0_40px_rgba(212,160,23,0.2)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#D4A017"
                    className="ml-1"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border border-[rgba(212,160,23,0.3)] animate-ping opacity-30" />
              </motion.div>
            )}
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[rgba(212,160,23,0.4)]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[rgba(212,160,23,0.4)]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[rgba(212,160,23,0.4)]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[rgba(212,160,23,0.4)]" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-6 text-xs tracking-[0.25em] uppercase text-[rgba(168,178,193,0.4)] font-semibold"
        >
          Trailer · Coming 2025
        </motion.p>
      </div>
    </section>
  );
}
