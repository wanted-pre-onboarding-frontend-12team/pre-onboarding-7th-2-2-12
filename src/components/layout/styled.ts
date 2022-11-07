import styled from 'styled-components';

export const GlobalContainer = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ContentContainer = styled.div`
	flex: 1;
	padding: 0 40px;
	background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ContentWrapper = styled.main`
	height: calc(100vh - 160px);
	overflow-y: auto;
`;
