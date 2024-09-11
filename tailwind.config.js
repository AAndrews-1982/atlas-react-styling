/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // This is where components are located
    "./public/index.html" // This is for HTML files in the public directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#faf5ef',   // Off White for backgrounds
        secondary: '#ob315e', // Blue for buttons and accents
        accent: '#fdc300',    // Yellow for highlights and hover effects
        text: '#ob315e',      // Dark Blue color for text
      },
    },
  },
  plugins: [],
}

