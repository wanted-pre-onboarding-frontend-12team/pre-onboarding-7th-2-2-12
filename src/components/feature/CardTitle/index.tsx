import React from 'react';
import * as S from './styled';

type Props = {
	value?: string;
	editMode: boolean;
};

const CardTitle = ({ value, editMode }: Props) => {
	return <S.Title>{editMode ? <input name="title" defaultValue={value}></input> : <S.Font>{value}</S.Font>}</S.Title>;
};

export default CardTitle;
