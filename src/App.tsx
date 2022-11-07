import Router from '@src/router';
import DatePickerStatusProvider from './contexts/DatePickerStatusProvider';

export const App = () => {
	return (
		<DatePickerStatusProvider>
			<Router />
		</DatePickerStatusProvider>
	);
};

export default App;
