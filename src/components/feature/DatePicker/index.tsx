import * as S from './styled';
import { useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import { setLocalStorage, getLocalStorage } from '@src/utils/StorageUtils';
import useDatePickerStatus from '@src/hooks/useDatePickerStatus';
import { DatePickerStatusContextType } from '@src/contexts/DatePickerStatusProvider';

const DatePickers = () => {
	const startDate = new Date(getLocalStorage('dateFilter') ? getLocalStorage('dateFilter').startDate : '2022-04-10');
	const endDate = new Date(getLocalStorage('dateFilter') ? getLocalStorage('dateFilter').endDate : '2022-04-14');
	const [subStartDate, setSubStartDate] = useState(startDate);
	const [subEndDateStr, setSubEndDateStr] = useState(endDate);
	const isChanged = startDate.toString() !== subStartDate.toString() || endDate.toString() !== subEndDateStr.toString();

	const { setDatePickerStatusState } = useDatePickerStatus() as DatePickerStatusContextType;

	const changeDate = () => {
		setLocalStorage('dateFilter', { startDate: subStartDate.toString(), endDate: subEndDateStr.toString() });
		setDatePickerStatusState('update');
	};

	const initDate = () => {
		setSubStartDate(startDate);
		setSubEndDateStr(endDate);
	};

	return (
		<S.DatePickerWrap>
			<div className="calender-box">
				<div className="date">시작날짜</div>
				<div>
					<S.MyDatePicker
						selected={subStartDate}
						dateFormat="yyyy-MM-dd"
						onChange={(date: Date) => setSubStartDate(date)}
						locale={ko}
						maxDate={endDate}
					/>
				</div>
			</div>
			<div className="calender-box">
				<div className="date">종료날짜</div>
				<div>
					<S.MyDatePicker
						selected={subEndDateStr}
						dateFormat="yyyy-MM-dd"
						onChange={(date: Date) => setSubEndDateStr(date)}
						locale={ko}
						minDate={startDate}
					/>
				</div>
			</div>
			<S.CancelBtn onClick={initDate} disabled={!isChanged}>
				취소
			</S.CancelBtn>
			<S.CheckBtn onClick={changeDate} disabled={!isChanged}>
				확인
			</S.CheckBtn>
		</S.DatePickerWrap>
	);
};

export default DatePickers;
