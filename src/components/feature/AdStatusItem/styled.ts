import styled from 'styled-components';

export const AdStatusWrap = styled.div`
	display: flex;
	height: 79px;
	border-radius: 10px;
	border: 1px solid #d1d8dc;
	justify-content: space-between;
	.currentDiv {
		display: flex;
		flex-direction: column;
		margin: 18px 0px 18px 40px;
		p {
			margin-bottom: 5px;
			font-weight: 500;
			font-size: 12px;
			color: #94a2ad;
		}
		span {
			margin-top: 5px;
			font-weight: 700;
		}
	}
	.compareDiv {
		display: flex;
		flex-direction: row;
		margin: 47px 40px 18px 0px;
		img {
			width: 8px;
			height: 10px;
		}
		p {
			font-weight: 500;
			font-size: 12px;
			color: #94a2ad;
			margin-left: 5px;
		}
	}
`;
