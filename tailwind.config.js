/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
        keyframes: {
          wiggle: {
            "0%": { transform: "scaleY(.75)" },
            "70%": { transform: "scaleY(.85)" },
            "80%": { transform: "scaleY(1.5)" },
            "100%,20%": { transform: "scaleY(1)" },
          },
          waviy: {
            "0%,40%,100%": { transform: "translateY(0)" },
            "20%": { transform: "translateY(-20px)" },
          },
          "show-name": {
            "0%": { transform: "scaleY(.75), opacity:0" },
            "40%": { transform: "scaleY(.70), opacity:0" },
            "70%": { transform: "scaleY(.85)" },
            "80%": { transform: "scaleY(1.5)" },
            "100%": { transform: "scaleY(1)" },
          },
          "show-photo": {
            "0%": { transform: "scale(.75)", opacity: 0 },
            "100%": { transform: "scaleY(1)", opacity: 1 },
          },
          slide: {
            "0%": { transform: "translateY(30px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
          'wipe-enter' :{
              '0%' :{
                  transform: 'scale(0)'
              },
              '50%' :{
                  transform: 'scale(1.5)'
              },
              '100%':{
                  transform: 'scale(1)'
              }
          }
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out",
          waviy: "waviy 2s ease-in-out infinite",
          "show-name": "show-name 1s ease-in-out",
          "show-photo": "show-photo 0.5s ease-in-out",
          "wipe-enter": "wipe-enter 1s ease-in-out",
          slide: "slide 1s ease-in-out",
        },
      },
  },
  plugins: [],
};
