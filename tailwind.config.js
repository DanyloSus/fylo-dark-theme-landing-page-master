/** @type {import('tailwindcss')",.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "intro-and-email-sign-up-background": "hsl(217, 28%, 15%)",
        "main-background": "hsl(218, 28%, 13%)",
        "footer-background": "hsl(216, 53%, 9%)",
        "testimonials-background": "hsl(219, 30%, 18%)",

        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",

        white: "hsl(0, 0%, 100%)",
      },
      screens: {
        lg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
