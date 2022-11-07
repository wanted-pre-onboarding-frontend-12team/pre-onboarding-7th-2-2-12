import { useState } from 'react';
import { getTrendData } from '@src/api/trend';
import { Trend } from '@src/types/trend';

const useTrendData = () => {
	const [trendData, setTrendData] = useState<Trend[]>([]);

	const requestTrendData = async () => {
		const res = await getTrendData();
		setTrendData(res);
	};

	return { trendData, requestTrendData };
};

export default useTrendData;
