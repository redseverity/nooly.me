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
        1: "var(--dark-1)",
        2: "var(--dark-2)",
        3: "var(--dark-3)",
        4: "var(--dark-4)",
        5: "var(--dark-5)",
        6: "var(--dark-6)",
        7: "var(--dark-7)",
        8: "var(--dark-8)",
      },

      light: {
        1: "var(--light-1)",
        2: "var(--light-2)",
        3: "var(--light-3)",
        4: "var(--light-4)",
        5: "var(--light-5)",
        6: "var(--light-6)",
        7: "var(--light-7)",
        8: "var(--light-8)",
      },

      rose: {
        1: "var(--rose-1)",
        2: "var(--rose-2)",
        3: "var(--rose-3)",
      },

      green: {
        1: "var(--green-1)",
      },

      red: {
        1: "var(--red-1)",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
