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
          primary: '#EF3733',  
          secondary: '#EF3733', 
          background: '#F5F5DC', 
          text: '#FFFFFF',  
        },
        dark: {
          primary: '#3B82F6', 
          secondary: '#9CA3AF', 
          background: '#111827', 
          surface: '#1F2937',  
          text: '#F9FAFB',  
        },
      },
      // fontFamily: {
      //   urbanist: ['Urbanist', 'sans-serif'],
      //   anton: ['Anton', 'sans-serif'],
      // },
    },
  },
  darkMode: "class", // Enables class-based dark mode switching
  plugins: [nextui()],
};
