import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { getLocalStorage } from '@src/utils/StorageUtils';
import DropDown from '@src/components/shared/DropDown/index';
import { adList, dayWeekList } from '@src/constants/dropDownDataList';
import * as S from './styled';
import { dateToString } from '@src/utils/DateUtils';
import { Trend } from '@src/types/trend';
import { getTrendData } from '@src/api/trend';
import { isValidArray } from '@src/utils/ArrayUtils';

const Chart = () => {
	const [chartFirstFilter, setChartFirstFilter] = useState(
		getLocalStorage('chartFilter', { chartFirstFilter: 'roas', chartSecondFilter: 'cost' }).chartFirstFilter,
	);
	const [chartSecondFilter, setChartSecondFilter] = useState(
		getLocalStorage('chartFilter', { chartFirstFilter: 'roas', chartSecondFilter: 'cost' }).chartSecondFilter,
	);

	const [chartPeriod, setChartPeriod] = useState(getLocalStorage('chartFilter', 'day').chartPeriod);

	const chartDateFilter = getLocalStorage('dateFilter', { startDate: '2022-04-10', endDate: '2022-04-14' });

	const [trendData, setTrendData] = useState<Trend[]>([]);

	const realData = isValidArray(trendData)
		? trendData.filter(
				(data) =>
					data.date >= dateToString(new Date(chartDateFilter.startDate)) &&
					data.date <= dateToString(new Date(chartDateFilter.endDate)),
		  )
		: [];

	const newWorld = isValidArray(realData)
		? realData.map((el) => {
				return { ...el, amount: (el.roas * el.cost) / 100 };
		  })
		: [];

	const requestTrendData = async () => {
		const res = await getTrendData();
		setTrendData(res);
	};

	useEffect(() => {
		if (trendData.length === 0) {
			requestTrendData();
		}
	}, []);

	return (
		<>
			<S.DropDownList>
				<div className="ad-sort">
					<DropDown
						isAd={true}
						list={adList.filter((prev) => prev.name !== chartSecondFilter)}
						default={'선택'}
						targetName="chartFirstFilter"
						setState={setChartFirstFilter}
					/>
					<DropDown
						isAd={true}
						adColor="green"
						list={adList.filter((prev) => prev.name !== chartFirstFilter)}
						default={'선택'}
						targetName="chartSecondFilter"
						setState={setChartSecondFilter}
					/>
				</div>
				<DropDown isBorder={false} list={dayWeekList} default={'일간'} targetName="chartPeriod" setState={setChartPeriod} />
			</S.DropDownList>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={newWorld}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid stroke="#EDEFF1" vertical={false} strokeDasharray="0" />
					<XAxis
						dataKey="date"
						tick={{ fontSize: 12, fill: '#94A2AD' }}
						padding={{ left: 20, right: 20 }}
						dy={10}
						interval={chartPeriod === 'day' ? 0 : 6}
					/>
					<YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#94A2AD' }} tickCount={6} />
					<YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#94A2AD' }} tickCount={6} />
					<Tooltip />
					<Line yAxisId="left" type="linear" dataKey={chartFirstFilter} stroke="#4FADF7" dot={false} strokeWidth={2} />
					<Line yAxisId="right" type="linear" dataKey={chartSecondFilter} stroke="#85DA47" dot={false} strokeWidth={2} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};

export default Chart;
