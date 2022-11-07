import styled from 'styled-components';

export const HeaderWrap = styled.header`
	display: flex;
	justify-content: end;
	align-items: center;
	height: 80px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]}; ;
`;

export const AlarmIcon = styled.img`
	margin-left: 30px;
`;

export const SettingIcon = styled(AlarmIcon)``;

export const ProfileWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	margin: 0 10px 0 30px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const ProfileIcon = styled.img``;

export const UserName = styled.p`
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.fs14};
	font-weight: ${({ theme }) => theme.fontWeights.fw500};
`;
