import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "rgb(var(--color-base) / <alpha-value>)",
          soft: "rgb(var(--color-base-soft) / <alpha-value>)",
          raised: "rgb(var(--color-base-raised) / <alpha-value>)",
          border: "rgb(var(--color-base-border) / <alpha-value>)",
          borderSoft: "rgb(var(--color-base-border-soft) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--color-ink-faint) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          soft: "rgb(var(--color-accent-soft) / <alpha-value>)",
          dim: "rgb(var(--color-accent-dim) / <alpha-value>)",
          glow: "rgb(var(--color-accent-glow) / <alpha-value>)",
        },
        signal: {
          teal: "rgb(var(--color-signal-teal) / <alpha-value>)",
          amber: "rgb(var(--color-signal-amber) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-lg": ["4.25rem", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-md": ["3.25rem", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(var(--color-grid) / 0.07) 1px, transparent 1px), linear-gradient(to right, rgba(var(--color-grid) / 0.07) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(600px circle at var(--x,50%) var(--y,20%), rgba(var(--color-accent) / 0.14), transparent 70%)",
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        glow: "var(--shadow-glow)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
