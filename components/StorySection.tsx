"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export default function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-12 text-center"
        >
          The Story
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-panel p-8 md:p-14"
        >
          <div className="flex flex-col md:flex-row gap-0 md:gap-12">
            {/* Left: pull quote */}
            <motion.div
              variants={fadeUp}
              className="md:w-2/5 relative md:pr-12 pb-8 md:pb-0 border-b md:border-b-0 border-[rgba(255,255,255,0.1)] md:border-r md:border-[rgba(212,160,23,0.3)]"
            >
              {/* Gold rule — desktop only shows border-r above */}
              <p className="font-poppins font-black text-2xl md:text-3xl xl:text-4xl leading-tight text-white">
                "An online romance. A loan shark's shadow. And a city that never lets you leave clean."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#D4A017]" />
                <span className="text-xs tracking-[0.25em] uppercase text-[#D4A017] font-semibold">Logline</span>
              </div>
            </motion.div>

            {/* Right: synopsis */}
            <motion.div
              variants={fadeUp}
              className="md:w-3/5 md:pl-4 pt-8 md:pt-0 space-y-5 text-[#A8B2C1] text-base leading-relaxed"
            >
              <p>
                Nandi thought she'd fallen in love with Thabo — a charming, attentive man she met through her phone screen. For six months, he sent voice notes at midnight, remembered her favourite playlist, and promised to fly her to Zimbabwe for New Year&apos;s. She came with a suitcase full of hope. What she found was Harare.
              </p>
              <p>
                Tafa drives a mushikashika — an unlicensed taxi threading through Harare's backstreets like a man who knows exactly where every secret is buried. He's funny, sharp, and deeply in debt to Micho: a loan shark who owns half the informal economy and all of Tafa's future. When Tafa is sent to intercept Nandi at the airport, what begins as an errand becomes the most complicated fare he's ever taken.
              </p>
              <p>
                Part romance, part chase, all Harare — <em>Mushikashika Love</em> is a film about the difference between the life you perform online and the one you have to live in the streets. Set against the city's golden-hour glow and electric night markets, it asks: when danger is this beautiful, how far will you go for real love?
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
