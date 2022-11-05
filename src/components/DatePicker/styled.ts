import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerWrap = styled.div`
	display: flex;
	flex-direction: row;
	width: 228px;
	height: 24px;
	.date {
		font-size: 10px;
		font-weight: 300;
	}
`;

export const MyDatePicker = styled(DatePicker)`
	font-size: 14px;
	font-weight: 500;
	color: #3a474e;
	background-color: transparent;
	border: 1px solid #d1d8dc;
	border-radius: 5px;
`;
