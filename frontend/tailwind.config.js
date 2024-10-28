// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this to your project structure
  ],
  theme: {
    extend: {
      colors: {
        "blue-violet": "#8A2BE2", // Custom color for Navbar
        "dashboard-bg": "#f5f7fa", // Light grey for dashboard background
        "footer-bg": "#000", // Dark grey/black for footer background
      },
    },
  },
  plugins: [],
};
