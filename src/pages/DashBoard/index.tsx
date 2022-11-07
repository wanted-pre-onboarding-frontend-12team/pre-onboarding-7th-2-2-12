import { useState } from 'react';
import { Layout, Typography } from '@src/components';
import DatePickers from '@src/components/DatePicker';
import AdStatusList from '@src/components/feature/AdStatusList';
import Chart from '@src/components/feature/Chart/Chart';
import { DashBoardWrap } from './styled';

const DashBoard = () => {
	const [daily, setDaily] = useState(false);

	return (
		<Layout>
			<Typography margin={'40px 0 0 0'} variant={'h3'} fontSize={'16px'} fontWeight={700} color={'#3A474E;'}>
				통합 광고 현황
			</Typography>
			<DashBoardWrap>
				<DatePickers setDaily={setDaily} />
				<AdStatusList daily={daily} />
				<Chart />
			</DashBoardWrap>
		</Layout>
	);
};

export default DashBoard;
