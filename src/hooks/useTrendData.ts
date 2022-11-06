import { useState } from 'react';
import { getTrendData } from '@src/api/trend_data';

const useTrendData = () => {
	const [trendData, setTrendData] = useState([]);

	const requestTrendData = async () => {
		const res = await getTrendData();
		setTrendData(res);
	};

	return { trendData, requestTrendData };
};

export default useTrendData;
