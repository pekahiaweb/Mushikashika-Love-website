"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { heroWordReveal, pageLoadContainer, fadeUp, floatDrift } from "@/lib/motion-variants";

const floatingFragments = [
  { text: "Harare, Zimbabwe", delay: 0, x: "10%", y: "30%" },
  { text: "Romance. Risk. Hustle.", delay: 1.2, x: "72%", y: "22%" },
  { text: "Coming Soon", delay: 2.1, x: "80%", y: "65%" },
  { text: "2025", delay: 0.8, x: "8%", y: "70%" },
  { text: "Romantic Crime Comedy", delay: 1.7, x: "55%", y: "78%" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; color: string; opacity: number }[] = [];
    const colors = ["#D4A017", "#C4727A", "#A8B2C1"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        r: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.1,
      });
    }

    let animId: number;
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0A14] to-[#0A0A0F]" />

      {/* Gold orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(212,160,23,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Floating glass fragments */}
      {floatingFragments.map((frag, i) => (
        <motion.div
          key={i}
          className="absolute glass-panel px-4 py-2 text-xs font-semibold tracking-widest text-[#A8B2C1] uppercase hidden md:block"
          style={{ left: frag.x, top: frag.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            y: [0, -20, -20, 0],
            x: [0, -4, 4, 0],
          }}
          transition={{
            duration: 6 + frag.delay,
            delay: frag.delay + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {frag.text}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        variants={pageLoadContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 flex flex-col items-center"
      >
        {/* Title */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={heroWordReveal}
            className="shimmer-gold font-poppins font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            MUSHIKASHIKA
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={heroWordReveal}
            className="font-poppins font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(3rem, 10vw, 9rem)",
              color: "#C4727A",
              textShadow: "0 0 60px rgba(196,114,122,0.3)",
            }}
          >
            LOVE
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl font-light italic text-[#A8B2C1] tracking-wide"
        >
          She came for love. She found Harare.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="#trailer"
            className="px-8 py-3 rounded-full bg-[#D4A017] text-[#0A0A0F] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,23,0.5)] hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Watch Trailer
          </motion.a>
          <motion.a
            href="#story"
            className="px-8 py-3 rounded-full glass-panel text-[#D4A017] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Read the Story
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-[rgba(168,178,193,0.5)] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8L10 13L15 8" stroke="rgba(212,160,23,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
