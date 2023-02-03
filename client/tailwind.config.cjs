/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangish-blue': '#D97E4A',
      },

    },
  },
  
  plugins: [
   require('@tailwindcss/line-clamp'),
   ],
}



    
