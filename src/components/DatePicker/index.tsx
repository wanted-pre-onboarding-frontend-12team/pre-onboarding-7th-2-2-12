import * as S from './styled';
import { useState, Dispatch, SetStateAction } from 'react';
import { ko } from 'date-fns/esm/locale';
import { setLocalStorage, getLocalStorage } from '@src/utils/StorageUtils';

type Props = {
	setDaily: Dispatch<SetStateAction<boolean>>;
};
const DatePickers = ({ setDaily }: Props) => {
	const startDate = new Date(getLocalStorage('FilterDate').startDate);
	const endDate = new Date(getLocalStorage('FilterDate').endDate);
	const [subStartDate, setSubStartDate] = useState(startDate);
	const [subEndDateStr, setSubEndDateStr] = useState(endDate);
	const isChanged = startDate.toString() !== subStartDate.toString() || endDate.toString() !== subEndDateStr.toString();

	const changeDate = () => {
		setDaily((prev) => !prev);
		setLocalStorage('FilterDate', { startDate: subStartDate.toString(), endDate: subEndDateStr.toString() });
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
