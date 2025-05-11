/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enables dark mode via toggling the 'dark' class
    content: [
      './*.html', // Scans all HTML files in the root directory
      './src/**/*.{html,js,ts,jsx,tsx}', // Optional: Include if you have a src folder with JS/TS files
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#3b82f6', // Blue-500 for light mode
            dark: '#1d4ed8', // Blue-700 for dark mode
          },
        },
      }, // Add custom theme extensions here if needed (e.g., colors, fonts)
    },
    plugins: [], // Add Tailwind plugins here if needed
  };