/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: '#999999',
        'dark-gray': '#303030'
      },
      fontSize: {
        h1: '12.5rem', // 200px
        h2: '3.5rem', // 56px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
        h5: '1.125rem', // 18px
        h6: '0.9375rem', // 15px
        'body-1': '1.125rem', // 18px
        'body-2': '0.9375rem' // 15px
      },
      lineHeight: {
        h1: '12.5rem', // 200px
        h2: '4.25rem', // 68px
        h6: '0.9375rem', // 15px
        'body-1': '1.75rem', // 28px
        'body-2': '1.5625rem' // 25px
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    backgroundImage: {
      'daytime-mobile': 'url("/mobile/bg-image-daytime.jpg")',
      'nighttime-mobile': 'url("/mobile/bg-image-nighttime.jpg")',
      'daytime-tablet': 'url("/tablet/bg-image-daytime.jpg")',
      'nighttime-tablet': 'url("/tablet/bg-image-nighttime.jpg")',
      'daytime-desktop': 'url("/desktop/bg-image-daytime.jpg")',
      'nighttime-desktop': 'url("/desktop/bg-image-nighttime.jpg")'
    },
    maxWidth: {
      container: '1110px'
    },
    backdropBlur: {
      xl: '16px'
    }
  },
  plugins: []
}
