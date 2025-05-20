module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'] // added sans-serif as a generic fallback
    },
    extend: {
      colors: {
        dark: '#0F172A', // Updated to slate-900
        white: '#FFFFFF', // Ensured full white hex
        lightText: '#76797d' // Kept as is, will address usage in globals.css
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
