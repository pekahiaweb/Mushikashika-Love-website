import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0A0A0F",
        gold: "#D4A017",
        rose: "#C4727A",
        mist: "#A8B2C1",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "drift-up": "driftUp 6s ease-in-out infinite",
        "drift-down": "driftDown 7s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "chevron-bounce": "chevronBounce 1.5s ease-in-out infinite",
      },
      keyframes: {
        driftUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        driftDown: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        chevronBounce: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.5" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4)",
        "gold-glow": "0 0 20px rgba(212,160,23,0.4)",
        "rose-glow": "0 0 20px rgba(196,114,122,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
