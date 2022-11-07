import { useEffect } from 'react';
import { Layout, Typography, AdStatusList, Chart } from '@src/components/';
import { DashBoardWrap } from './styled';
import { DatePickerStatusContextType } from '@src/contexts/DatePickerStatusProvider';
import useDatePickerStatus from '@src/hooks/useDatePickerStatus';
import { getLocalStorage, setLocalStorage } from '@src/utils/StorageUtils';

const DashBoard = () => {
	const { datePickerStatusState, setDatePickerStatusState } = useDatePickerStatus() as DatePickerStatusContextType;

	useEffect(() => {
		if (!getLocalStorage('chartFilter')) {
			setLocalStorage('chartFilter', { chartFirstFilter: '선택', chartSecondFilter: '선택', chartPeriod: 'day' });
		}
		if (!getLocalStorage('dateFilter')) {
			setLocalStorage('dateFilter', { startDate: '2022-04-10', endDate: '2022-04-14' });
		}
		setDatePickerStatusState('maintain');
	}, [datePickerStatusState]);

	return (
		<Layout>
			<Typography margin={'40px 0 0 0'} variant={'h3'} fontSize={'16px'} fontWeight={700} color={'#3A474E;'}>
				통합 광고 현황
			</Typography>
			<DashBoardWrap>
				<AdStatusList datePickerStatus={datePickerStatusState} />
				<Chart />
			</DashBoardWrap>
		</Layout>
	);
};

export default DashBoard;
