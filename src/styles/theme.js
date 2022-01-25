export const theme = {
	default: {
		brandRed: '#ff385c',
		darkGray: '#a0a0a0',
		lightGray: '#f0f0f0',
		foreground: '#222222',
		background: '#ffffff',
	},
	main: {
		brandRed: '#ff385c',
		darkGray: '#a0a0a0',
		lightGray: '#f0f0f0',
		foreground: '#222222',
		background: '#ffffff',
	},
};

export const invertTheme = ({ foreground, background }) => ({
	default: {
		foreground: background,
		background: foreground,
	},
});
