import styled from 'styled-components';

type SelectProps = {
	padding?: string;
	fontSize?: string;
	fontWeight?: number;
	arrowPadding: string;
};

export const Select = styled.select<SelectProps>`
	width: 100%;
	padding: ${({ padding }) => padding && padding};
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	border-radius: 10px;
	font-size: ${({ fontSize }) => fontSize && fontSize};
	font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
	color: ${({ theme }) => theme.colors.black};

	appearance: none;
	background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right ${({ arrowPadding }) => arrowPadding && arrowPadding} center;
	background-size: 1em;
`;
