import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#22c55e", // Green for finance
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#16a34a", // Darker green for finance
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#dcfce7", // Light green for finance
          foreground: "#1A1F2C",
        },
        task: {
          DEFAULT: "#ef4444", // Red for tasks
          secondary: "#dc2626", // Darker red
          accent: "#fee2e2", // Light red
        },
        contractor: {
          DEFAULT: "#eab308", // Yellow for contractors
          secondary: "#ca8a04", // Darker yellow
          accent: "#fef9c3", // Light yellow
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;