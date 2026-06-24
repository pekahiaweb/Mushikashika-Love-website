"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const laurels = [
  { label: "Selection", festival: "African Film Festival" },
  { label: "Official Entry", festival: "Zimbabwe International" },
  { label: "Supported By", festival: "Swiss Embassy SSADZA Fund" },
  { label: "Development Grant", festival: "Pan-African Cinema" },
];

export default function PressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="press" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-panel p-10 md:p-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-8"
          >
            Press & Recognition
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="font-poppins font-black text-2xl md:text-4xl text-white leading-tight mb-12"
          >
            "A story Africa<br />
            <span style={{ color: "#C4727A" }}>has been waiting</span><br />
            to tell."
          </motion.blockquote>

          {/* Laurel badges */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {laurels.map((l, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-panel px-6 py-4 flex flex-col items-center gap-1 min-w-[160px]"
              >
                {/* Laurel SVG */}
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                  <path d="M8 16C4 12 4 6 8 4" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6 20C2 18 1 12 4 9" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                  <path d="M32 16C36 12 36 6 32 4" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M34 20C38 18 39 12 36 9" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                  <circle cx="20" cy="16" r="2" fill="#D4A017" fillOpacity="0.3"/>
                  <path d="M14 28h12" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                </svg>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[rgba(168,178,193,0.5)] font-semibold">{l.label}</span>
                <span className="text-xs font-bold text-[#A8B2C1] text-center leading-tight">{l.festival}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Updates form */}
          <motion.div variants={fadeUp} id="updates">
            <p className="text-sm text-[#A8B2C1] mb-6">Stay close. The film is coming.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 glass-panel px-5 py-3 text-sm text-white placeholder-[rgba(168,178,193,0.4)] outline-none focus:border-[rgba(212,160,23,0.5)] bg-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full bg-[#D4A017] text-[#0A0A0F] font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(212,160,23,0.4)] transition-all duration-200"
              >
                Get Updates
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
