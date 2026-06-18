import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d1b2a",
          mid: "#1a2f45",
          deep: "#07111c",
        },
        ivory: {
          DEFAULT: "#f7f4ef",
          warm: "#ede9e1",
        },
        gold: {
          DEFAULT: "#b8965a",
          light: "#d4b07a",
          pale: "#f0e6d3",
        },
        ink: {
          dark: "#1a1a1a",
          mid: "#4a4a4a",
          muted: "#7a7a7a",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
        label: "0.16em",
      },
      maxWidth: {
        page: "1200px",
        prose: "720px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
