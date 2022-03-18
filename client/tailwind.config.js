module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'purple': '#3f3cbb',
			'midnight': '#121063',
			'metal': '#565584',
			'tahiti': '#3ab7bf',
			'silver': '#ecebff',
			'bubble-gum': '#ff77e9',
			'bermuda': '#78dcca',
		},
		container: {
			center: true,
		},
		screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
		extend: {
			colors: {
				"primary": {
					100: "#ecded8",
					200: "#d9bcb1",
					300: "#c69b8a",
					400: "#b37963",
					500: "#a0583c",
					600: "#804630",
					700: "#603524",
					800: "#402318",
					900: "#20120c"
				},
				"secondary": {
					100: "#f2e6e1",
					200: "#e6cdc2",
					300: "#d9b4a4",
					400: "#cd9b85",
					500: "#c08267",
					600: "#9a6852",
					700: "#734e3e",
					800: "#4d3429",
					900: "#261a15"
				},
				"tertiary": {
					100: "#f5f1ef",
					200: "#ebe3e0",
					300: "#e0d5d0",
					400: "#d6c7c1",
					500: "#ccb9b1",
					600: "#a3948e",
					700: "#7a6f6a",
					800: "#524a47",
					900: "#292523"
				},
				"quaternary": {
					100: "#fffef8",
					200: "#fffdf0",
					300: "#fffce9",
					400: "#fffbe1",
					500: "#fffada",
					600: "#ccc8ae",
					700: "#999683",
					800: "#666457",
					900: "#33322c"
				},
			},
			boxShadow: {
				'popup': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
			},
			backgroundImage: {
				'hero-pattern': "url('./assets/images/bg.jpg')",
				'drinks-pattern': "url('./assets/images/drink-bg.png')",
			},
			maxWidth: {
				'container': '96rem',
			},
		},

	},
	plugins: [],
};
