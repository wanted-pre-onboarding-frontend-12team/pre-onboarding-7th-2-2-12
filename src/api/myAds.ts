import axios from 'axios';

export const getMyAds = async () => {
	const response = await axios.get('/mock/myAds.json');
	return response.data.ads;
};
