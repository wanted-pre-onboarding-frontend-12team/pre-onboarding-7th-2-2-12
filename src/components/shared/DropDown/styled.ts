import styled from 'styled-components';

export const Container = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	position: relative;
	> div {
		width: 100%;
		> button {
			width: 150px;
		}
	}
	> ul {
		width: 100%;
		> li {
			width: 100%;
		}
	}
	margin-bottom: 100px;
`;
