import axios from 'axios';

export const getTrendData = async () => {
	const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/trend_data`);
	return response.data;
};

export const getTrendDataByDate = async (date: string) => {
	const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/trend_data/${date}`);
	return response.data;
};
