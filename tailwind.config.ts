import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        turmeric: {
          DEFAULT: "#bdb246",
          "50": "#f8f8ee",
          "100": "#eeefd2",
          "200": "#e1e0a7",
          "300": "#cfcb75",
          "400": "#bdb246",
          "500": "#b1a241",
          "600": "#988336",
          "700": "#7a632e",
          "800": "#67512c",
          "900": "#59452a",
          "950": "#332515",
        },
        "crater-brown": {
          DEFAULT: "#462521",
          "50": "#faf5f2",
          "100": "#f3e9e1",
          "200": "#e7d1c1",
          "300": "#d7b29a",
          "400": "#c68e71",
          "500": "#ba7355",
          "600": "#ac604a",
          "700": "#8f4d3f",
          "800": "#744038",
          "900": "#5e3630",
          "950": "#462521",
        },
        "maroon-flush": {
          DEFAULT: "#ca2e55",
          "50": "#fef2f3",
          "100": "#fde6e9",
          "200": "#f9d2d7",
          "300": "#f5acb7",
          "400": "#ee7e91",
          "500": "#e3506d",
          "600": "#ca2e55",
          "700": "#ae2248",
          "800": "#921f43",
          "900": "#7d1e3e",
          "950": "#450c1e",
        },
        twine: {
          DEFAULT: '#d6a96e',
          "50": "#f9f5ed",
          "100": "#f1e6d0",
          "200": "#e5cba3",
          "300": "#d6a96e",
          "400": "#cb904d",
          "500": "#ba7738",
          "600": "#a05d2e",
          "700": "#804428",
          "800": "#6c3a27",
          "900": "#5d3126",
          "950": "#351913",
        },
      },
      fontFamily: {
        serif: ["DM\\ Serif\\ Display"],
        sans: [ "-apple-system", "BlinkMacSystemFont", 'Inter' ],
        oswald: [ "Oswald" ],
        spacegrotesk: [ "Space\\ Grotesk" ]
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
