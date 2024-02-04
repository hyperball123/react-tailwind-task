/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
      serif: "PT Serif, serif",
    },

    extend: {
      backgroundImage: {
        "cover-image": "url('assets/cover.png')",
        "card-image": "url('assets/paper.png')",
        "card2-image": "url('assets/card2.png')",
      },
      fontFamily: {
        gloria: ["'Gloria Hallelujah', cursive"],
      },
      gridTemplateColumns: {
        custom: "minmax(0, 1fr) 1fr 1fr 1fr 1fr", // The first column takes around 50% of the width
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    require("tailwindcss-filters"),
    // other plugins
  ],
};
