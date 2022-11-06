import styled from 'styled-components';

export const DateWrap = styled.div`
	position: relative;
`;

export const DateBtn = styled.button`
	border: none;
	background-color: ${({ theme }) => theme.colors.gray[100]};
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.fs14};
	font-weight: ${({ theme }) => theme.fontWeights.fw500};
	cursor: pointer;
`;
