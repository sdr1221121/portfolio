/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa", // Replace with your desired color
        primary: "#212529",   // Replace with your desired color
        secondary: "#6c757d", // Replace with your desired color
        accent: "#0d6efd",    // Replace with your desired color
      }
    },
  },
  plugins: [],
}
