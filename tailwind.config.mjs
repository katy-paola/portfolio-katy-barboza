/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#E8A3EC', 
				'hover': 'rgba(232, 163, 236, 0.05)', //primary 5%
				'dark': '#0a0a0a', //neutral 950
				'dark-blur': 'rgba(10, 10, 10, 0.25)', 
				'light': '#52525B08', //neutral 600 5%
				'bg-intro': '#282C34', 
				'gray': '#0D0D0D',
				'white-dark': 'rgba(255, 255, 255, 0.40)',
				'white-blur': 'rgba(255, 255, 255, 0.03)',
				'yellow-light': '#FFD79C',
				'sky': '#AEF1FF',
			},
			backgroundImage: {
				'bg': 'url(\'../bg.svg\')',
			},
			fontFamily: {
				'poppins': ['poppins', 'sans-serif'],
				'code': ['Source Code Pro', 'monospace'],
			},
			gridTemplateColumns: {
				'auto-fill': 'repeat(auto-fill, minmax(260px, 1fr))',
			},
			screens: {
				'xs': '375px',
			},
		},
	},
	plugins: [],
}
