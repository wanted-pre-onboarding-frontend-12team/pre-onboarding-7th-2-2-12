import styled from 'styled-components';

export const GuideWrap = styled.div``;
export const GuideBox = styled.div`
	display: flex;
	width: 240px;
	height: 100px;
	padding: 30px 20px;
	margin: 40px 0;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.blue[100]};
`;

export const BulbIconWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	margin-right: 8px;
	border-radius: 50px;
	background: ${({ theme }) => theme.colors.primary};
`;
export const BulbIcon = styled.img``;

export const GuideTextWrap = styled.div``;

export const GuideTitle = styled.p`
	padding-bottom: 8px;
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.fs16};
	font-weight: ${({ theme }) => theme.fontWeights.fw700}; ;
`;
export const GuideLink = styled.p`
	color: ${({ theme }) => theme.colors.gray[400]};
	font-size: ${({ theme }) => theme.fontSizes.fs12};
	font-weight: ${({ theme }) => theme.fontWeights.fw500}; ;
`;
export const Slogan = styled(GuideLink)`
	padding: 0 20px 10px;
`;
export const Terms = styled(GuideLink)`
	padding: 0 20px;
`;
