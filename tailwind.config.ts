import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			sans: ['Helvetica', 'sans-serif'],
			serif: ['Georgia', 'serif'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			pc: '1450px',
			'2xl': '1536px',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: colors.blue,
				secondary: colors.sky,
				button: '#4B6BFB',
				danger: colors.red,
				success: colors.emerald,
				white: colors.white,
				gray: colors.slate,
				black: colors.black,
			},
			keyframes: {},
			animation: {},
		},
	},
	plugins: [],
	darkMode: 'class',
}
export default config
