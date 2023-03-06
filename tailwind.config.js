/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#141414",

          secondary: "#242424",

          accent: "#262626",

          neutral: "#000000",

          "base-100": "#eaeae8",

          info: "#0070F3",

          success: "#21CC51",

          warning: "#FF6154",

          error: "#DE1C8D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
