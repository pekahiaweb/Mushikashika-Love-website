"use client";
import { motion } from "framer-motion";

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] bg-[rgba(10,10,15,0.98)] py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[rgba(212,160,23,0.1)] border border-[rgba(212,160,23,0.3)] flex items-center justify-center">
            <span className="text-[#D4A017] font-black text-base tracking-tight">ML</span>
          </div>
          <span className="font-poppins font-black text-white tracking-widest text-sm uppercase">Mushikashika Love</span>
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel w-11 h-11 flex items-center justify-center text-[#A8B2C1] hover:text-[#D4A017] transition-colors duration-200 rounded-full"
              style={{ borderRadius: "9999px" }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[rgba(212,160,23,0.3)] to-transparent" />

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-xs text-[rgba(168,178,193,0.5)] tracking-wide">
            © 2025 Mushikashika Love. All Rights Reserved.
          </p>
          <p className="text-xs text-[rgba(168,178,193,0.3)] tracking-wide">
            Supported by the Swiss Embassy SSADZA Fund
          </p>
        </div>
      </div>
    </footer>
  );
}
