import styled from 'styled-components';

export const Wrapper = styled.form`
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	border-radius: 10px;
	width: 305px;
	padding: 0 20px;
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
	color: ${({ theme }) => theme.colors.black};
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	border-radius: 10px;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.black};
`;
