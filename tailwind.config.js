module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),

			primary: '#235DDB',

			secondary: '#4CC34C',

			danger: '#e3342f',
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
