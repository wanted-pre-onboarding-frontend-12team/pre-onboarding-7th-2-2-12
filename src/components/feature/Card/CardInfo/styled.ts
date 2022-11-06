import styled from 'styled-components';

type Props = {
	editMode: boolean;
};

export const BlockWrapper = styled.div<Props>`
	display: flex;
	align-items: center;
	height: 40px;
`;

export const NameFont = styled.label`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	color: ${({ theme }) => theme.colors.gray[400]};
	width: 100px;
`;

export const InfoFont = styled.div`
	font-weight: 700;
	font-size: 12px;
	line-height: 14px;
	color: ${({ theme }) => theme.colors.black};
`;
