import React from 'react';
import * as S from './styled';

type Props = {
	infoName: string;
	info: string;
	name?: string;
	editMode: boolean;
	type?: 'text' | 'date';
};

const CardInfo = ({ infoName, info, name, editMode, type = 'text' }: Props) => {
	return (
		<S.BlockWrapper editMode={editMode}>
			<S.NameFont htmlFor={name}>{infoName}</S.NameFont>
			{editMode ? <input type={type} name={name} defaultValue={info}></input> : <S.InfoFont>{info}</S.InfoFont>}
		</S.BlockWrapper>
	);
};

export default CardInfo;
