/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "2xl": "1328px"
      },
      colors: {
        gray: {
          100: "#f6f9fc",
          200: "#edf1f5",
          300: "#e3e9ef",
          400: "#d7dde2",
          500: "#b4bbc3",
          600: "#858c97",
          700: "#576071",
          800: "#434a57",
          900: "#121519",
        },
        primary: "#448c74",
      },
      fontSize: {
        "2.5xl": ["32px", "1.3"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#448c74",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#448c74",
          "base-100": "#121519",
        },
      },
    ],
  },
  darkMode: ["selector", '[data-theme="dark"]'],
};
