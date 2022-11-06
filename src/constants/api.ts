const dummyData = {
	count: 4,
	ads: [
		{
			id: 1,
			adType: 'web',
			title: '매드업 레버 광고 1234',
			budget: 500000,
			status: 'active',
			startDate: '2020-10-19T00:00:00',
			endDate: null,
			report: {
				cost: 267144117,
				convValue: 1157942685,
				roas: 433,
			},
		},
		{
			id: 2,
			adType: 'web',
			title: '매드업 레버 광고 12345',
			budget: 200000,
			status: 'ended',
			startDate: '2021-01-22T00:00:00',
			endDate: '2021-12-21T23:59:59',
			report: {
				cost: 169837362,
				convValue: 745438798,
				roas: 438,
			},
		},
		{
			id: 3,
			adType: 'web',
			title: '원티드 레버 광고 1234',
			budget: 150000,
			status: 'active',
			startDate: '2022-01-01T00:00:00',
			endDate: null,
			report: {
				cost: 699481243,
				convValue: 898716259,
				roas: 1284,
			},
		},
		{
			id: 4,
			adType: 'app',
			title: '매드업 앱광고 광고 9912',
			budget: 240000,
			status: 'active',
			startDate: '2022-02-10T00:00:00',
			endDate: null,
			report: {
				cost: 9300222,
				convValue: 38234789,
				roas: 411,
			},
		},
	],
};

export const getADProgress = new Promise((resolve, reject) => {
	if (true) {
		setTimeout(() => {
			resolve(dummyData.ads);
		}, 2000);
	} else {
		reject(new Error('not working...'));
	}
});

//https://s3.us-west-2.amazonaws.com/secure.notion-static.com/05a1a9db-897f-4e9d-87bd-1e81a03d8e04/wanted_FE_ad-list-data-set.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221105T064308Z&X-Amz-Expires=86400&X-Amz-Signature=06cf53efffa78bea41fb67dc30da38d9dbcaedce9bccba9071fc494767258a8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22wanted_FE_ad-list-data-set.json%22&x-id=GetObject
