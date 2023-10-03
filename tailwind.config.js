/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#a6faff",
        pastelGreen: "#b8ff9f",
        pastelYellow: "#fff59f",
        pastelRed: "#ff9f9f",
        pastelPink: "#ffa6f6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0.1 },
        },
      },
      animation: {
        blink: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",

        "spin-slow": "spin 7s linear infinite",
      },
      fontFamily: {
        space: ["var(--font-space-mono)"],
        mexa: ["var(--font-mexa)"],
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [],
};
