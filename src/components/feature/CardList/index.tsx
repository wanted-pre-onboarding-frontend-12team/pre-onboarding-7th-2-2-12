import { getADProgress } from '@src/constants/api';
import { AdProgress } from '@src/types/advertise';
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import * as S from './styled';

const CardList = () => {
	const [data, setData] = useState<AdProgress[]>([]);

	useEffect(() => {
		setTimeout(() => {
			let response = getADProgress() as AdProgress[];
			if (response) {
				setData(response);
			}
		}, 0);
	}, []);

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
