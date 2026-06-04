import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        leaf: "#126b46",
        market: "#e94f37",
        saffron: "#f6b23c",
        ink: "#16231f",
        mist: "#f4f7f2"
      },
      boxShadow: {
        soft: "0 16px 50px rgba(22, 35, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
