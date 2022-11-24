/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", "sans-serif"],
			},
			colors: {
				primary: "#8B80B6",
				accent: "#F97474",
				textDark: "#222",
			},
		},
	},
	plugins: [],
};
