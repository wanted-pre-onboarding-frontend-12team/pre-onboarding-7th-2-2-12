import styled from 'styled-components';

export const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.black};
	font-size: 24px;
	font-weight: 900;
`;
