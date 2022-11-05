export type Report = {
	cost: number;
	convValue: number;
	roas: number;
};

export type AdProgress = {
	id: number;
	adType: 'web' | 'app';
	title: string;
	budget: number;
	status: 'active' | 'ended';
	startDate: string;
	endDate: string | null;
	report: Report;
};
