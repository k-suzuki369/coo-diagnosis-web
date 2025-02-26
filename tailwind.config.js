/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "sans-serif"],
      },
      colors: {
        primary: "#0F172A", // ネイビー
        secondary: "#475569", // グレー
        accent: "#16A34A", // エメラルドグリーン（アクセント）
      },
    },
  },
  plugins: [],
};
