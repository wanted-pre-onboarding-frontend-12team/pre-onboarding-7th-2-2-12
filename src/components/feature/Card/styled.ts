import styled from 'styled-components';

export const Container = styled.li`
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	border-radius: 10px;
	padding: 0 20px;
`;

export const CardForm = styled.form`
	padding: 40px 0 20px 0;
`;

export const Font = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.black};
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

type Prop = {
	height: number;
};

export const Space = styled.div<Prop>`
	width: 100%;
	height: ${({ height }) => `${height}px`};
`;

export const Divider = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.gray[200]};
	background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Action = styled.section``;

export const InputButton = styled.input`
	padding: 12px 20px;
	margin-left: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.primary};
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	border-radius: 10px;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-evenly;
`;

type Props = {
	editMode: boolean;
};

export const BlockWrapper = styled.div<Props>`
	display: flex;
	align-items: center;
	height: 40px;
`;

export const Title = styled.div`
	margin-bottom: 40px;
`;

export const TitleFont = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.black};
`;
