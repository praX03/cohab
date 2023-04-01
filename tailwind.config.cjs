/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
    "./src/server/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'"],
      },
      spacing: {
        sx: "0.625rem",
        sx2: "1.25rem",
        sx3: "2rem",
        sx5: "3rem",
        sx7: "4rem",
      },
      colors: {
        primary: withOpacity("--primary"),
        secondary: withOpacity("--secondary"),
        main: withOpacity("--main"),
        background: withOpacity("--background"),
        header: withOpacity("--header"),
        accent: withOpacity("--accent"),
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        blob: "blob 9s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        scroll: "scroll ease-in 1.5s infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(100px)" },
        },
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },

  plugins: [
    require("daisyui"),
    plugin(function ({ addVariant }) {
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("inverted-colors", "@media (inverted-colors: inverted)");
    }),
  ],
  // daisyUI config
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
