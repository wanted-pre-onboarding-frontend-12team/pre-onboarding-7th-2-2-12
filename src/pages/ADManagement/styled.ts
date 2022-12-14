import styled from 'styled-components';

export const Container = styled.section`
	padding: 30px 0;
`;

export const InnerContainer = styled.div`
	padding: 40px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding-bottom: 40px;
`;

export const SelectWrapper = styled.div`
	width: 125px;
`;
