import { Trend } from '@src/types/trend';

type KPIProps = Pick<Trend, 'roas' | 'cost' | 'click' | 'imp' | 'conv' | 'date'>;

export type KPIRemoveDate = {
	[key: string]: any;
};

const getKPI = (trendData: KPIProps[], startDate: string, endDate: string) => {
	const startIndex = trendData.findIndex((el: KPIProps) => el.date === startDate);
	const endIndex = trendData.findIndex((el: KPIProps) => el.date === endDate);
	const gapDate = endIndex - startIndex;

	const selectedDates: KPIRemoveDate[] = trendData.slice(startIndex, endIndex + 1);
	const exSelectedDates: KPIRemoveDate[] = trendData.slice(startIndex - gapDate - 1, startIndex);

	const KPIs: KPIRemoveDate = {
		roas: 0,
		cost: 0,
		imp: 0,
		click: 0,
		conv: 0,
	};

	const exKPIs: KPIRemoveDate = {
		roas: 0,
		cost: 0,
		imp: 0,
		click: 0,
		conv: 0,
	};

	for (let i = 0; i <= gapDate; i++) {
		for (let key of Object.keys(KPIs)) {
			KPIs[key] += selectedDates[i][key];
			exKPIs[key] += exSelectedDates[i][key];
		}
	}

	return [KPIs, exKPIs];
};

export default getKPI;
