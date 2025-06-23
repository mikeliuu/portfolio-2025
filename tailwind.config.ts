import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			aspectRatio: {
				phone: "3/2",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				blur: "var(--foreground-blur)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				"secondary-light": "var(--secondary-light)",
			},
			borderWidth: {
				"1.5": "1.5px",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			strokeWidth: {
				"1.5": "1.5px",
			},
		},
	},
	plugins: [],
};
export default config;
