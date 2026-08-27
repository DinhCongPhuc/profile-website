/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./app/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EEF1F5",
        card: "#FFFFFF",
        ink: "#1C2333",
        inksoft: "#4A5568",
        line: "#D7DCE3",
        accent: "#2F5DE3",
        accentSoft: "#E7ECFC",
        teal: "#3F6E67",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
