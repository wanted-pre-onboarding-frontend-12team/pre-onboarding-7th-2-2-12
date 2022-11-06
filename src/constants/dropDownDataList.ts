export type ListType = {
	id: number;
	value: string;
};

export const serviceList: ListType[] = [
	{ id: 0, value: '매드업' },
	{ id: 1, value: '서비스 추가하기' },
];

export const adList: ListType[] = [
	{ id: 0, value: 'ROAS' },
	{ id: 1, value: '광고비' },
	{ id: 2, value: '노출수' },
	{ id: 3, value: '클릭수' },
	{ id: 4, value: '전환 수' },
	{ id: 5, value: '매출' },
];

export const administrationList: ListType[] = [
	{ id: 0, value: '전체 광고' },
	{ id: 1, value: '진행 중' },
	{ id: 2, value: '중단됨' },
];
