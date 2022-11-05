import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 40px;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

type Prop = {
	height: number;
};

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
