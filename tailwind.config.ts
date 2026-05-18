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
        page: "#0A0A0A",
        "card-summit": "#1A4D40",
        "card-forum": "#C9A227",
        "addon-summit": "#132E28",
        "addon-forum": "#A07E18",
        "text-primary": "#F5F4F0",
        "text-on-yellow": "#1A1200",
        brand: "#E85520",
        "summit-border": "#2A6B58",
        "summit-badge-text": "#A8D5C8",
        "forum-border": "#E2B82A",
        "forum-badge-text": "#5C3D00",
        "vip-gold": "#8B6914",
        "vip-gold-light": "#FFE58A",
      },
      fontFamily: {
        reckless: ["'Reckless Condensed'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
