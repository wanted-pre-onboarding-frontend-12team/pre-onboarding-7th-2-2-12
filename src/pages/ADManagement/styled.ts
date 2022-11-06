import styled from 'styled-components';

type Prop = {
	height: number;
};

export const ADManagementWrap = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.gray[100]};
`;
export const LayoutFlex = styled.div`
	width: 100%;
	padding: 0 20px;
`;

export const Wrapper = styled.article`
	padding: 40px;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Space = styled.div<Prop>`
	width: 100%;
	height: ${({ height }) => `${height}px`};
`;

export const Content = styled.section``;

export const Font = styled.span`
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
`;
