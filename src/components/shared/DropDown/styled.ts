import styled from 'styled-components';

export const Container = styled.div<{ isBig?: boolean }>`
	width: ${(props) => (props.isBig ? '240px' : '123px')};
	height: ${(props) => (props.isBig ? '60px' : '40px')};
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const SeletedData = styled.button<{ isBig?: boolean; isBorder?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	border: ${({ isBorder, theme }) => (isBorder ? `1px solid ${theme.colors.gray[300]}` : 'none')};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 10px;
	padding: ${(props) => (props.isBig ? '0 26px 0 20px' : '0 16px 0 20px')};
	font-size: ${(props) => (props.isBig ? '16px' : '14px')};
	font-weight: ${(props) => (props.isBig ? '700' : '500')};
	color: ${({ theme }) => theme.colors.black};
	cursor: pointer;
	.circle {
		width: 10px;
		background-color: #4fadf7;
	}
`;

export const DropData = styled.ul<{ isBig?: boolean }>`
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 3;
	top: ${(props) => (props.isBig ? '60px' : '40px')};
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	font-weight: ${(props) => (props.isBig ? '700' : '500')};
	border-radius: 10px;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.white};
	.data-list {
		display: flex;
		align-items: center;
		padding: ${(props) => (props.isBig ? '0 26px 0 20px' : '0 16px 0 20px')};
		height: 40px;
		color: ${({ theme }) => theme.colors.black};
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
		height: ${(props) => (props.isBig ? '60px' : '40px')};
		font-size: ${(props) => (props.isBig ? '16px' : '14px')};
		&:hover {
			font-size: ${(props) => (props.isBig ? '18px' : '16px')};
		}
	}
`;
