import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	fontSizes: {
		fs12: '12px',
		fs14: '14px',
		fs16: '16px',
	},
	fontWeights: {
		fw500: 500,
		fw700: 700,
	},
	colors: {
		red: '#EA3A4B',
		green: '#85DA47',
		blue: {
			'100': '#E5F4FD',
			'200': '#4FADF7',
		},
		primary: '#586CF5',
		gray: {
			'100': '#F6F7F8',
			'200': '#EDEFF1',
			'300': '#D1D8DC',
			'400': '#94A2AD',
		},
		white: '#FFFFFF',
		black: '#3A474E',
	},
};

export default theme;
