export type ListType = {
	id: number;
	value: string;
	name: string;
};

export const serviceList: ListType[] = [
	{ id: 0, value: '매드업', name: 'mad' },
	{ id: 1, value: '서비스 추가하기', name: 'add' },
];

export const adList: ListType[] = [
	{ id: 1, value: 'ROAS', name: 'roas' },
	{ id: 2, value: '광고비', name: 'cost' },
	{ id: 3, value: '노출수', name: 'imp' },
	{ id: 4, value: '클릭수', name: 'click' },
	{ id: 5, value: '전환수', name: 'cov' },
	{ id: 6, value: '매출', name: 'amount' },
	{ id: 7, value: '선택', name: 'option' },
];

export const administrationList: ListType[] = [
	{ id: 0, value: '전체 광고', name: 'all' },
	{ id: 1, value: '진행 중', name: 'active' },
	{ id: 2, value: '중단됨', name: 'ended' },
];

export const dayWeekList: ListType[] = [
	{ id: 0, value: '일간', name: 'day' },
	{ id: 1, value: '주간', name: 'week' },
];
