/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fadeSlideDown: 'fadeSlideDown 0.8s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        slideUp: 'slideUp 1.2s ease-in-out',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      width: {
        '72': '18rem',     // Example of custom width (4.5 times the base `4rem`)
        '84': '21rem',     // Add a custom width with a specific rem value
        '96': '24rem',
        'custom': '35rem', // Custom width with a label like 'custom'
      },
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
        abu: {
          DEFAULT: '#6a6f7a',      
          20: 'rgba(106, 111, 122, 0.2)',    
          50: 'rgba(106, 111, 122, 0.5)', 
          60: 'rgba(106, 111, 122, 0.6)',
          75: 'rgba(106, 111, 122, 0.75)', 
        },
      },
    },
  },
  plugins: [],
}
