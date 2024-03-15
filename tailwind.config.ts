import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset, rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px, rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px, rgba(44, 187, 99, 0.15) 0 16px 32px",
        customHover:
          "rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset, rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px, rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px, rgba(44, 187, 99, 0.25) 0 16px 32px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        night: {
          primary: "#9ca3af",
          secondary: "#fafafa",
          accent: "#3b82f6",
          neutral: "#d1d5db",
          "base-100": "#0a0a0a",
        },
        day: {
          primary: "#44403c",
          secondary: "#171717",
          accent: "#3b82f6",
          neutral: "#292524",
          "base-100": "#f1f5f9",
        },
      },
    ],
  },
};
export default config;
