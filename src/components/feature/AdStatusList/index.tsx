import { useEffect, useState } from 'react';
import { AdStatusListWrap } from './styled';
import { Click, Conv, Cost, Imp, Revenue, Roas } from '../AdStatusItem';
import { getLocalStorage } from '@src/utils/StorageUtils';
import useTrendData from '@src/hooks/useTrendData';
import getKPI from '@src/utils/KPIUtils';
import { KPIRemoveDate } from '@src/utils/KPIUtils';
import { dateToString } from '@src/utils/DateUtils';

type Props = {
	daily: boolean;
};

const AdStatusList = (daily: Props) => {
	const { startDate, endDate } = getLocalStorage('FilterDate');
	const { requestTrendData, trendData } = useTrendData();
	const [kpiValue, setKpiValue] = useState<KPIRemoveDate[]>();

	useEffect(() => {
		requestTrendData();
		return;
	}, []);

	useEffect(() => {
		if (trendData.length !== 0) {
			const res = getKPI(trendData, dateToString(new Date(startDate)), dateToString(new Date(endDate)));
			setKpiValue(res);
		}
	}, [daily]);

	return (
		<>
			{trendData.length !== 0 && kpiValue ? (
				<AdStatusListWrap>
					<Roas sum={kpiValue[0].roas} exSum={kpiValue[1].roas} />
					<Cost sum={kpiValue[0].cost} exSum={kpiValue[1].cost} />
					<Imp sum={kpiValue[0].imp} exSum={kpiValue[1].imp} />
					<Click sum={kpiValue[0].click} exSum={kpiValue[1].click} />
					<Conv sum={kpiValue[0].conv} exSum={kpiValue[1].conv} />
					<Revenue sum={(kpiValue[0].roas * kpiValue[0].cost) / 100} exSum={(kpiValue[1].roas * kpiValue[1].cost) / 100} />
				</AdStatusListWrap>
			) : (
				<AdStatusListWrap>
					<Roas sum={0} exSum={0} />
					<Cost sum={0} exSum={0} />
					<Imp sum={0} exSum={0} />
					<Click sum={0} exSum={0} />
					<Conv sum={0} exSum={0} />
					<Revenue sum={0} exSum={0} />
				</AdStatusListWrap>
			)}
		</>
	);
};

export default AdStatusList;
