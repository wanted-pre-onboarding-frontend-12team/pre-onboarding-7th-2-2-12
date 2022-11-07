import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { getLocalStorage } from '@src/utils/StorageUtils';
import useTrendData from '@src/hooks/useTrendData';
import DropDown from '@src/components/shared/DropDown/index';
import { adList, dayWeekList } from '@src/constants/dropDownDataList';
import * as S from './styled';
import { dateToString } from '@src/utils/DateUtils';
const Chart = () => {
	const [state, setState] = useState('roas');
	const [subState, setSubState] = useState('선택');
	const [dayWeekState, setDayWeekState] = useState('day');

	const { trendData, requestTrendData } = useTrendData();

	useEffect(() => {
		requestTrendData();
	}, []);

	const filterdate = getLocalStorage('FilterDate');
	const realData = trendData.filter(
		(data) =>
			data.date >= dateToString(new Date(filterdate.startDate)) && data.date <= dateToString(new Date(filterdate.endDate)),
	);

	return (
		<>
			<S.DropDownList>
				<div className="ad-sort">
					<DropDown
						isAd={true}
						list={adList.filter((prev) => prev.name !== (subState || '선택'))}
						default={'ROAS'}
						setState={setState}
					/>
					<DropDown
						isAd={true}
						adColor={'green'}
						list={adList.filter((prev) => prev.name !== state)}
						default={'선택'}
						setState={setSubState}
					/>
				</div>
				<DropDown isBorder={false} list={dayWeekList} default={'일간'} setState={setDayWeekState} />
			</S.DropDownList>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={realData}
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
						interval={dayWeekState === 'day' ? 0 : 6}
					/>
					<YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#94A2AD' }} tickCount={6} />
					<YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#94A2AD' }} tickCount={6} />
					<Tooltip />
					<Line yAxisId="left" type="linear" dataKey={state} stroke="#4FADF7" dot={false} strokeWidth={2} />
					<Line yAxisId="right" type="linear" dataKey={subState} stroke="#85DA47" dot={false} strokeWidth={2} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};

export default Chart;
