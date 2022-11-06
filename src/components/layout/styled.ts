import styled from 'styled-components';

export const GlobalContainer = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ContentContainer = styled.main`
	flex: 1;
	padding: 0 40px;
`;
