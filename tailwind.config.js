/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-in-out',
        'pop': 'pop 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      colors: {
        "dark-green": " #002626",
        "atlantis-green": "#99CC33",
        platinam: "#E6E6E6",
        white: "#FFFFFF",
      },
      fontSize: {
        header: "59px",
        "sub-header-1": " 40px",
        "sub-header-2": "32px",
        regular: "24px",
        "regular-lite": "20px",
        minimum: "16px",
        "tab-header": "48px",
        "tab-sub-header-1": "32px",
        "tab-sub-header-2": "24px",
        "tab-regular": "16px",
        "tab-minimum": "14px",
      },
      fontFamily: {
        syne: "syne",
      },
    },
  },
  plugins: [  require('tailwind-scrollbar')({ nocompatible: true }),require("daisyui")],
};
