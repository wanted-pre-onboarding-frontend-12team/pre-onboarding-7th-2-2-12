import React from 'react';
import * as S from './styled';

type Props = {
	value?: string;
	editMode: boolean;
	useRef: React.RefObject<HTMLInputElement>;
};

const CardTitle = ({ value, editMode, useRef }: Props) => {
	return (
		<S.Title>{editMode ? <input ref={useRef} name="title" defaultValue={value}></input> : <S.Font>{value}</S.Font>}</S.Title>
	);
};

export default CardTitle;
