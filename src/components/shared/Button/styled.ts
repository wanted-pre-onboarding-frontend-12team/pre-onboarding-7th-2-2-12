import styled from 'styled-components';

type Props = {
	bgr: string;
	color: string;
	border: string;
};

export const Button = styled.button<Props>`
	padding: 12px 20px;
	border: ${({ border }) => border};
	border-radius: 10px;
	background-color: ${({ bgr }) => bgr};
	color: ${({ color }) => color};
	cursor: pointer;
`;
