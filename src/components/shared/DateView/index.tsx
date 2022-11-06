import { useState } from 'react';
import * as S from './styled';
import DatePickers from '@src/components/DatePicker';
import { getLocalStorage } from '@src/utils/StorageUtils';
import { dateToKoString } from '@src/utils/DateViewUtils';

const DateView = () => {
	const [isSetDate, setIsSetDate] = useState(false);
	const changeSetDate = () => {
		setIsSetDate((prev) => !prev);
	};

	const startDate = dateToKoString(new Date(getLocalStorage('FilterDate').startDate));
	const endDateStr = dateToKoString(new Date(getLocalStorage('FilterDate').endDate));

	return (
		<S.DateWrap>
			<S.DateBtn onClick={changeSetDate}>
				{startDate}~{endDateStr} {isSetDate ? '⋁' : '⋀'}
			</S.DateBtn>
			{isSetDate && <DatePickers setIsSetDate={setIsSetDate} />}
		</S.DateWrap>
	);
};

export default DateView;
