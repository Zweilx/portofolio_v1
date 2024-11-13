/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        putih: {
          DEFAULT: '#ffffff',
          20: 'rgba(255, 255, 255, 0.2)',    
          50: 'rgba(255, 255, 255, 0.5)', 
          60: 'rgba(255, 255, 255, 0.6)',
          75: 'rgba(255, 255, 255, 0.75)', 
        },
        text_hitam: {
          DEFAULT: '#171717',      
          20: 'rgba(23, 23, 23, 0.2)',    
          50: 'rgba(23, 23, 23, 0.5)', 
          60: 'rgba(23, 23, 23, 0.6)',
          75: 'rgba(23, 23, 23, 0.75)', 
        },
      },
    },
  },
  plugins: [],
}