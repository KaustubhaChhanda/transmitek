/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:         '#c11920',  // CTAs, accents, dropdown hover bg
          'red-dark':  '#db0013',  // nav link hover, footer link hover
          dark:        '#000000',  // top header bar, middle footer
          'dark-2':    '#222222',  // bottom footer bar
          heading:     '#2c444a',  // h1 color
          'heading-2': '#1A202C',  // h2–h6
          body:        '#2D3748',  // body text
          muted:       '#4A5568',  // secondary text
          light:       '#EDF2F7',  // section alternating bg
          lighter:     '#F7FAFC',  // input/card bg
          white:       '#ffffff',  // main body background
          blue:        '#2887e8',  // brand blue
          'blue-dark': '#215387',  // button hover, links
          border:      '#dddddd',  // header bottom border
          'border-dark': '#575757', // footer top border
          'footer-text': '#cfcfcf', // footer body copy
          'footer-link': '#dadada', // footer anchor links
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
