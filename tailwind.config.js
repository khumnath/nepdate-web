/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './privacy-policy.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'brown-red': 'rgb(81, 55, 55)', // #513737
				'light-gray': 'rgb(112, 112, 112)', // #707070
				'alabaster': 'rgb(242, 232, 224)', // #f2e8e0
				'azure': 'rgb(224, 238, 242)' // #e0eef2
			},
			keyframes: {
				shimmer: {
					'100%': { transform: 'translateX(100%)' },
				},
			},
			animation: {
				'bounce-subtle': 'bounce 2s infinite',
			}
		},
	},
	plugins: [],
};
