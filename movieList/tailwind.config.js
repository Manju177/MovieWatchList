/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        main:'#080A1A',
        subMain: '#080A1#f20000',
        dry:'#080F29',
        star:'#FFB000',
        text:'#C0C0C0',
        border:'#4b5563',
        dryGray:'#E0D5DS',
      }
    },
  },
  plugins: [],
};