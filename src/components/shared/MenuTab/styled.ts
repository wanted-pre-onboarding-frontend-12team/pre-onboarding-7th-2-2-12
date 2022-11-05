import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuTabWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MenuTab = styled(Link)<{ selected: boolean }>`
	display: flex;
	align-items: center;
	width: 240px;
	height: 60px;
	padding: 20px;
	border-radius: 10px;
	background: ${({ selected, theme }) => (selected ? theme.colors.gray[200] : theme.colors.white)};
	text-decoration: none;
	cursor: pointer;
	:hover {
		background: ${({ selected, theme }) => (selected ? null : theme.colors.gray[100])};
	}
`;

export const MenuIcon = styled.img`
	margin-right: 10px;
`;

export const MenuText = styled.p<{ selected: boolean }>`
	color: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.black)};
	font-size: ${({ theme }) => theme.fontSizes.fs16};
	font-weight: ${({ theme }) => theme.fontWeights.fw700};
`;
