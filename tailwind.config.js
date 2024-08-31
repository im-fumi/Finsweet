/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    colors: {
      'dark-blue': '#282938',
      'grey': '#F4F6FC',
      'tint-blue': '#1C1E53',
      'royal-blue': '#2405F2',
      'yellow': '#FCD980',
      'white': '#FFFFFF',
      'line': '#ECECF1',
      'accent': '#EEF4FA',
      'black': '#000000',
      'gray-blue': '#222831',
      'dark-gray': '#31363Ff2',
      'chetwode': '#6E85B2'
    },
    extend: {
      screens: {
        "desktop": "1024px",
        "mobile": "340px"
      }
    },
  },
  plugins: [],
}

