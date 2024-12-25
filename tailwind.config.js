/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in src
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Include NextUI's theme files
  ],
  theme: {
    extend: {
      colors: {
        body: "#939393", // Add a custom body color
      },
      borderRadius: {
        sm: "20px",
        md: "28px",
        lg: "32px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "brand-light": {
          extend: "light", // <- inherit default values from light theme
          colors: {
            background: "#fff",
            foreground: "#131313",
            primary: {
              50: "#f9f4ed", // Very light
              100: "#f3e7d5", // Lighter
              200: "#ecd3b1", // Light
              300: "#e5c08e", // Main tone, slightly lighter
              400: "#ddb177", // Slightly darker
              500: "#d4b88f", // DEFAULT, your main color
              600: "#bc9d74", // Darker shade
              700: "#9a7d58", // Even darker
              800: "#765d41", // Deep dark
              900: "#4f3e2a", // Very deep
              DEFAULT: "#bc9d74", // Darker shade
              foreground: "#f9f4ed", // very light
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
            radius: {
              small: "20px",
              medium: "28px",
              large: "32px",
            },
            fontSize: {
              medium: "20px",
              small: "16px",
            },
          },
        },
      },
    }),
  ],
};
