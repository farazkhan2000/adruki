const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#1D4ED8',  // Blue-700
          secondary: '#6B7280', // Gray-500
          background: '#F9FAFB', // Gray-50
          surface: '#FFFFFF',  // White
          text: '#111827',  // Gray-900
        },
        dark: {
          primary: '#3B82F6',  // Blue-500
          secondary: '#9CA3AF', // Gray-400
          background: '#111827', // Gray-900
          surface: '#1F2937',  // Gray-800
          text: '#F9FAFB',  // Gray-50
        },
      },
    },
  },
  darkMode: "class", // Enables class-based dark mode switching
  plugins: [nextui()],
};
