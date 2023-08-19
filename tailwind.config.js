/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#1B1E24",
				extraDark: "#121418",
				darkGreen: "#095F59",
				paleGreen: "#0C766F",
				paleBrown: "#FFD681",
				palePurple: "#C89AFF",
				paleRed: "#FA7565",
				paleBlue: "#4b9fff",
			},
		},
	},
	plugins: [],
};
