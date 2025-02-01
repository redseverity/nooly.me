import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      dark: {
        100: "var(--dark-1)",
        200: "var(--dark-2)",
        300: "var(--dark-3)",
        400: "var(--dark-4)",
        500: "var(--dark-5)",
        600: "var(--dark-6)",
        700: "var(--dark-7)",
        800: "var(--dark-8)",
      },

      light: {
        100: "var(--light-1)",
        200: "var(--light-2)",
        300: "var(--light-3)",
        400: "var(--light-4)",
        500: "var(--light-5)",
        600: "var(--light-6)",
        700: "var(--light-7)",
        800: "var(--light-8)",
      },

      rose: {
        100: "var(--rose-1)",
        200: "var(--rose-2)",
        300: "var(--rose-3)",
      },

      green: {
        600: "var(--green-1)",
      },

      red: {
        600: "var(--red-1)",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
