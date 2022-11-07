import axios from 'axios';

export const getTrendData = async () => {
	const response = await axios.get(`/mock/trend.json`);
	return response.data.trend;
};
