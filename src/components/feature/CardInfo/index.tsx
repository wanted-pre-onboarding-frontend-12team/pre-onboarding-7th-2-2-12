import React from 'react';
import * as S from './styled';

type Props = {
	infoName: string;
	info: string;
	name?: string;
	editMode: boolean;
};

const CardInfo = ({ infoName, info, name, editMode }: Props) => {
	return (
		<S.BlockWrapper editMode={editMode}>
			<S.NameFont htmlFor={name}>{infoName}</S.NameFont>
			{editMode ? <input name={name} defaultValue={info}></input> : <S.InfoFont>{info}</S.InfoFont>}
		</S.BlockWrapper>
	);
};

export default CardInfo;
