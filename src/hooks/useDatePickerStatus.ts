import { DatePickerStatusContext } from '@src/contexts/DatePickerStatusProvider';
import { useContext } from 'react';

const useDatePickerStatus = () => {
	const value = useContext(DatePickerStatusContext);
	return value;
};

export default useDatePickerStatus;
