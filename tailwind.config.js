/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mdx: { max: "1239px" }, // custom max-width breakpoint
        tab: { max: "843px" },
        sm: { max: "500px" },
        mdy: { max: "363px" },
      },
    },
  },
  plugins: [],
};
