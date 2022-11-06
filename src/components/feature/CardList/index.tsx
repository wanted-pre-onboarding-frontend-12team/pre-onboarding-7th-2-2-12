import { getADProgress } from '@src/constants/api';
import { AdProgress } from '@src/types/advertise';
import { setLocalStorage } from '@src/utils/StorageUtils';
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import * as S from './styled';

type Props = {
	status: string;
};

const CardList = ({ status }: Props) => {
	const [data, setData] = useState<AdProgress[]>([]);

	useEffect(() => {
		setTimeout(() => {
			let response = getADProgress() as AdProgress[];
			if (status === 'active') {
				response = response.filter((item: AdProgress) => item.status === 'active');
				setData(response);
			} else if (status === 'ended') {
				response = response.filter((item: AdProgress) => item.status === 'ended');
				setData(response);
			} else {
				setData(response);
			}
		}, 2000);
		setLocalStorage('cardStatus', status);
	}, [status]);

	return (
		<S.Wrapper>
			{data &&
				data.map((item: AdProgress) => {
					return <Card key={item.id} item={item} data={data} setData={setData} />;
				})}
		</S.Wrapper>
	);
};
export default CardList;
