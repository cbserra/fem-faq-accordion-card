/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        base: "62.5%",
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.87)",
        "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "dark-grayish-blue": "hsl(240, 6%, 50%)",
        "light-grayish-blue": "hsl(240, 5%, 91%)",
      },
      backgroundImage: {
        'pattern-desktop': "url('./images/bg-pattern-desktop.svg')",
        'pattern-mobile': "url('./images/bg-pattern-mobile.svg')",
      },
      boxShadow: {
        'main': "0px 50px 50px -20px rgba(53, 18, 122, 0.497159)",
      },


    },
  },
  plugins: [],
};
