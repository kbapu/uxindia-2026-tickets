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
        page: "#0D0D0D",
        cream: "#F5F0E8",
        "track-summit": "#1B7A6E",
        "track-forum": "#F5BF42",
        "card-summit": "#114F47",
        "card-forum": "#DCAC3B",
        "addon-summit": "#0E3D36",
        "addon-forum": "#C49A2E",
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
        reckless: [
          "'UXI Leadership Condensed'",
          "'Reckless Condensed'",
          "Georgia",
          "serif",
        ],
        uxi: ["'UXI Leadership Condensed'", "'Reckless Condensed'", "Georgia", "serif"],
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
