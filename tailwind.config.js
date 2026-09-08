/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff",
        "paper-soft": "#f4f3f0",
        "paper-gray": "#e7e6e1",
        ink: "#0f0f0f",
        charcoal: "#262626",
        smoke: "#6f6f6f",
        "line-gray": "#c8c7c2",
      },
      fontFamily: {
        // "Noto Sans Thai" sits in every stack as the Thai fallback: Latin / JP
        // glyphs still render in the manga faces, Thai text falls through to it.
        gothic: ['"Zen Kaku Gothic New"', '"Noto Sans Thai"', '"Noto Sans JP"', "system-ui", "sans-serif"],
        mincho: ['"Shippori Mincho B1"', '"Noto Sans Thai"', '"Noto Serif JP"', "serif"],
        display: ['"Anton"', '"Noto Sans Thai"', '"Zen Kaku Gothic New"', "Impact", "sans-serif"],
        marker: ['"Yusei Magic"', '"Noto Sans Thai"', '"Zen Kaku Gothic New"', "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        "panel-sm": "3px 3px 0 0 #0f0f0f",
        panel: "6px 6px 0 0 #0f0f0f",
        "panel-lg": "10px 10px 0 0 #0f0f0f",
        "panel-inv": "6px 6px 0 0 #ffffff",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pop-in": {
          "0%": { transform: "scale(.85) rotate(-3deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0)", opacity: "1" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        marquee: "marquee-x 26s linear infinite",
        "marquee-fast": "marquee-x 16s linear infinite",
        "pop-in": "pop-in .45s ease-out both",
        caret: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
