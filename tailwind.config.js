/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        title: "#1A2B6B",
        content: "#3D4556",
        section: "#DFE7FB",
        text: "#6D7380",
        button: "#375BD2",
        lightBlue: "#E7EDFF",
        tips: '#FFCD99',
        bgTips: '#FFCD9930'
      },
      fontSize: {
        sx: "10px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "28px",
        "sm-xl": "35px",
        "2xl": "40px",
        "3xl": "55px",
      },
      boxShadow: {
        shadow: "box-shadow: 12px 10px 30px rgba(26, 43, 154, 0.2);",
      },
    },
  },
  plugins: [],
};
