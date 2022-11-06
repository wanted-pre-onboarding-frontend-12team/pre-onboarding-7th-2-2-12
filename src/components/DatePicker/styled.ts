import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerWrap = styled.div`
	position: absolute;
	top: 95px;
	right: 40px;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	.date {
		font-size: 10px;
		font-weight: 300;
	}
`;

export const MyDatePicker = styled(DatePicker)`
	width: 100px;
	height: 30px;
	margin-right: 5px;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	color: #3a474e;
	background-color: transparent;
	border: 1px solid #d1d8dc;
	border-radius: 5px;
`;

export const CancelBtn = styled.button`
	width: 50px;
	height: 30px;
	margin: 0 1px;
	border: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.gray[400]};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	:disabled {
		background-color: #c5cdd3;
	}
`;

export const CheckBtn = styled(CancelBtn)`
	background-color: ${({ theme }) => theme.colors.primary};
	:disabled {
		background-color: #9fabf9;
	}
`;
