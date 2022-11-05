import styled from 'styled-components';

export const Title = styled.div`
	height: 19px;
`;

export const Font = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.black};
`;
