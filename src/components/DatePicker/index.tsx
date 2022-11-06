import { useState, useEffect } from 'react';
import { MyDatePicker, DatePickerWrap } from './styled';
import { dateToString } from '@src/utils/DateUtils';
import { ko } from 'date-fns/esm/locale';
import { setLocalStorage } from '@src/utils/StorageUtils';

const DatePickers = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const startDateString = dateToString(startDate);
	const endDateString = dateToString(endDate);

	useEffect(() => {
		setLocalStorage('FilterDate', { startDate: startDateString, endDate: endDateString });
	}, [startDate, endDate]);

	return (
		<DatePickerWrap>
			<div className="calender-box">
				<div className="date">시작날짜</div>
				<div>
					<MyDatePicker
						selected={startDate}
						dateFormat="yyyy-MM-dd"
						onChange={(date: Date) => setStartDate(date)}
						locale={ko}
						maxDate={endDate}
					/>
				</div>
			</div>
			<div className="calender-box">
				<div className="date">종료날짜</div>
				<div>
					<MyDatePicker
						selected={endDate}
						dateFormat="yyyy-MM-dd" // 날짜 형식
						onChange={(date: Date) => setEndDate(date)}
						locale={ko}
						minDate={startDate}
					/>
				</div>
			</div>
		</DatePickerWrap>
	);
};

export default DatePickers;
