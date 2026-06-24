import { Variants } from "framer-motion";

// Page load stagger container
export const pageLoadContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fade up for general scroll reveals
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stagger container for scroll sections
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Hero title word reveal
export const heroWordReveal: Variants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Navbar items
export const navFadeIn: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Character card hover
export const cardHover = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    rotateX: 5,
    rotateY: 5,
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Floating glass fragments
export const floatDrift = (delay: number = 0): Variants => ({
  animate: {
    y: [-10, 10, -10],
    x: [-4, 4, -4],
    transition: {
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

// Tile stagger fade up
export const tileFadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

// Mobile menu overlay
export const menuOverlay: Variants = {
  closed: { opacity: 0, x: "100%" },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const menuItem: Variants = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
  }),
};
