import { useState } from 'react';
import DatePickers from '@src/components/DatePicker';
import AdStatusList from '@src/components/feature/AdStatusList';

const DashBoard = () => {
	const [daily, setDaily] = useState(false);

	return (
		<div>
			<DatePickers setDaily={setDaily} />
			<AdStatusList daily={daily} />
		</div>
	);
};

export default DashBoard;
