import { useState } from 'react';
import { Layout } from '@src/components';
import DatePickers from '@src/components/DatePicker';
import AdStatusList from '@src/components/feature/AdStatusList';

const DashBoard = () => {
	const [daily, setDaily] = useState(false);

	return (
		<Layout>컨텐츠 영역
			<DatePickers setDaily={setDaily} />
			<AdStatusList daily={daily} />
		</Layout>;
	);

export default DashBoard;
