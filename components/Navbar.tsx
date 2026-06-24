"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuOverlay, menuItem, navFadeIn, pageLoadContainer } from "@/lib/motion-variants";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Characters", href: "#characters" },
  { label: "World", href: "#world" },
  { label: "Watch Trailer", href: "#trailer" },
  { label: "Press", href: "#press" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-[20px] bg-[rgba(10,10,15,0.85)] border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.4)] flex items-center justify-center">
              <span className="text-[#D4A017] font-poppins font-black text-sm tracking-tight">ML</span>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <motion.div
            variants={pageLoadContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={navFadeIn}
                className="text-[#A8B2C1] text-sm font-semibold tracking-wide hover:text-[#D4A017] transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#updates"
              variants={navFadeIn}
              className="glass-pill px-5 py-2 text-sm font-semibold text-[#D4A017] tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.4)] hover:border-[rgba(212,160,23,0.7)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Updates
            </motion.a>
          </motion.div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-[#D4A017] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#D4A017] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#D4A017] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 backdrop-blur-[30px] bg-[rgba(10,10,15,0.95)] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                custom={i}
                variants={menuItem}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold text-[#A8B2C1] hover:text-[#D4A017] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#updates"
              custom={navLinks.length}
              variants={menuItem}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMenuOpen(false)}
              className="glass-pill mt-4 px-8 py-3 text-lg font-semibold text-[#D4A017]"
            >
              Get Updates
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
