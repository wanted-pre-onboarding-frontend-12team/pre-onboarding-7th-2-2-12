import styled from 'styled-components';

export const Skeleton = styled.div`
	background-color: ${({ theme }) => theme.colors.gray[300]};
	height: 459px;
	padding: 40px 0 20px 0;
	border-radius: 10px;
	animation: skeleton-loading 1s linear infinite alternate;

	@keyframes skeleton-loading {
		0% {
			background-color: ${({ theme }) => theme.colors.gray[300]};
		}
		100% {
			background-color: ${({ theme }) => theme.colors.gray[100]};
		}
	}
`;
