import { createContext, PropsWithChildren, useState } from 'react';

export type DatePickerStatus = 'maintain' | 'update';

export type DatePickerStatusContextType = {
	datePickerStatusState: DatePickerStatus;
	setDatePickerStatusState: React.Dispatch<React.SetStateAction<DatePickerStatus>>;
};

export const DatePickerStatusContext = createContext<DatePickerStatusContextType | null>(null);

const DatePickerStatusProvider = (props: PropsWithChildren) => {
	const [datePickerStatusState, setDatePickerStatusState] = useState<DatePickerStatus>('maintain');

	return (
		<DatePickerStatusContext.Provider value={{ datePickerStatusState, setDatePickerStatusState }}>
			{props.children}
		</DatePickerStatusContext.Provider>
	);
};

export default DatePickerStatusProvider;
