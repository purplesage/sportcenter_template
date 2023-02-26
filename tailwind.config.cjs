/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Righteous', 'cursive'],
				display2: ['Freehand', 'cursive'],
				body: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwindcss-intersect')],
})