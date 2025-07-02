module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/bg-mobile.png')",
        "hero-tablet": "url('/bg-tablet.png')",
        "hero-desktop": "url('/bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
