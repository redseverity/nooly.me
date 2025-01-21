import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        800: "var(--dark-8)"
      },

      white: {
        100: "var(--white-1)",
        200: "var(--white-2)",
        300: "var(--white-3)",
        400: "var(--white-4)",
        500: "var(--white-5)",
        600: "var(--white-6)",
        700: "var(--white-7)",
        800: "var(--white-8)"
      },

      rose: {
        100: "var(--rose-1)",
        200: "var(--rose-2)",
        300: "var(--rose-3)"
      },

      green: {
        600: "var(--green-1)"
      },

      red: {
        600: "var(--red-1)"
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
