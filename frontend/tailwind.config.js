/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#69B99D",
        "second-color": "#F0F9FF",
        "free-btn-color": "#1ED760",
        "tertiary-color": "#F8F9FE",
        "heading-color": "#054457",
        "border-color": "#DEDCDA",
        "price-card": "#DFF6F9",
        "green-btn": "#69B99D",
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
      fontFamily: {
        interMedium: ["InterMedium"],
        interRegular: ["InterRegular"],
        interSemiBold: ["InterSemiBold"],
        interRegular: ["InterRegular"],
      },
      gridTemplateColumns: {
        "list-card": "0.7fr 1.6fr 0.7fr",
        "property-type-form": "1fr 1fr 1fr 0.2fr",
        "large-screen": "auto auto",
      },
      gridTemplateRows: {
        "exchange-form-layout": "1fr 0.5fr 0.5fr 0.5fr",
        "property-card": "0.5fr",
        "large-screen": "auto auto",
        "footer-small-screen": "0.6fr 0.9fr 1fr",
      },
      gridColumn: {
        span3: 1 / 3,
      },
    },
  },
  plugins: [require("daisyui")],
};
