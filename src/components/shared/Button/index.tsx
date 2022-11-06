/* eslint no-unused-vars: 0 */

import { theme } from '@src/styles';
import React, { PropsWithChildren } from 'react';
import * as S from './styled';

const themeTable = {
	main: {
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		border: 'none',
	},
	basic: {
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		border: `1px solid ${theme.colors.gray[300]}`,
	},
};

type Props = {
	theme: 'main' | 'basic';
	type: 'submit' | 'button' | 'reset';
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & PropsWithChildren;

const Button = ({ children, theme, type, disabled, onClick }: Props) => {
	return (
		<S.Button
			type={type}
			disabled={disabled}
			bgr={themeTable[theme].backgroundColor}
			color={themeTable[theme].color}
			border={themeTable[theme].border}
			onClick={onClick}
		>
			{children}
		</S.Button>
	);
};

export default Button;
