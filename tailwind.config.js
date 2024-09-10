/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#69B99D",
        "free-btn-color": "#1ED760",
      },
      boxShadow: {
        "links-shadow": "2px 1px 0px 1px #69B99D",
      },
      keyframes: {
        slider: {
          "0%, 100%": { top: "-15px", right: "35px" },
          "50%": { top: "14px", right: "-65px" },
        },
      },
      animation: {
        slider: "slider 4.8s linear infinite",
      },
      backgroundImage: {
        "hero-background": "url('/image/heroSection.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
