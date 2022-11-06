import React from 'react';
import Card from '../Card';
import * as S from './styled';

const CardList = () => {
	return (
		<S.Wrapper>
			<Card />
			<Card />
			<Card />
			<Card />
		</S.Wrapper>
	);
};
export default CardList;
