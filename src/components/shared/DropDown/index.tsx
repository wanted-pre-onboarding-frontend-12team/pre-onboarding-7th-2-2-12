import React, { useState, useRef, PropsWithChildren } from 'react';

import { ListType } from '../../../constants/dropDownDataList';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import * as S from './styled';

type Props = {
	list: ListType[];
} & PropsWithChildren;

const DropDown = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [clickedData, setClickedData] = useState(props.list[0].value);
	const clickRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	useOutsideClick(clickRef, setIsOpen);

	return (
		<S.Container ref={clickRef}>
			<div>
				<button
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{clickedData}
				</button>
			</div>
			{isOpen && (
				<ul>
					{props.list.map((el) => (
						<li
							key={el.id}
							onClick={() => {
								setIsOpen(!isOpen);
								setClickedData(() => el.value);
							}}
						>
							{el.value}
						</li>
					))}
				</ul>
			)}
		</S.Container>
	);
};

export default DropDown;
