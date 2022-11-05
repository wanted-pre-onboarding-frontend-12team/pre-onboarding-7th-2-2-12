import styled from 'styled-components';

export const SideBarWrap = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 320px;
	height: 100vh;
	padding: 60px 40px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Separation = styled.div``;

export const LogoImg = styled.img`
	width: 124px;
`;
export const DividingLine = styled.div`
	margin-top: 60px;
	border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;
export const SideSubTitle = styled.p`
	padding: 53px 20px 13px;
	font-weight: ${({ theme }) => theme.fontWeights.fw700};
	font-size: ${({ theme }) => theme.fontSizes.fs12};
	color: ${({ theme }) => theme.colors.gray[400]};
`;
