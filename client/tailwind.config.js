/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#49557e",
        tomato: "tomato",
        ternary: "#747474",
        fourth: "#262626",
      },
      fontFamily: {
        outfit: "outfit, sans-serif",
      },
      backgroundImage: {
        headerImage: 'url("/header_img.png")',
      },
      height: {
        headerHeight: "34vw",
      },
      animation: {
        fadeIn: "fade-in 3s",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(240px,1fr))",
      },
      transitionDuration: {
        custom: "0.3s",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
