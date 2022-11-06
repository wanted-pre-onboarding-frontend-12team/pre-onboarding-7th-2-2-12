import React, { useState, useRef, PropsWithChildren } from 'react';

import UpArrow from '@src/assets/images/UpArrow.svg';
import bluecircle from '@src/assets/images/bluecircle.svg';
import greencircle from '@src/assets/images/greencircle.svg';
import { ListType } from '../../../constants/dropDownDataList';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import * as S from './styled';

type Props = {
	isAd?: boolean;
	adColor?: string;
	isBig?: boolean;
	list: ListType[];
} & PropsWithChildren;

const DropDown = ({ ...props }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [clickedData, setClickedData] = useState(props.list[0].value);
	const clickRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	useOutsideClick(clickRef, setIsOpen);

	const handleClick = (value: string): React.MouseEventHandler<HTMLLIElement> | undefined | void => {
		setIsOpen(!isOpen);
		setClickedData(value);
	};

	return (
		<S.Container isBig={props.isBig} ref={clickRef}>
			<S.SeletedData
				isBig={props.isBig}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{props.isAd && (props.adColor === 'blue' ? <img src={bluecircle} /> : <img src={greencircle} />)}
				<p>{clickedData}</p>
				<img className="arrow" src={UpArrow} />
			</S.SeletedData>

			{isOpen && (
				<S.DropData isBig={props.isBig}>
					{props.list.map((el) => (
						<li className="data-list" key={el.id} onClick={() => handleClick(el.value)}>
							{el.value}
						</li>
					))}
				</S.DropData>
			)}
		</S.Container>
	);
};

export default DropDown;

DropDown.defaultProps = {
	isAd: false,
	adColor: 'blue',
	isBig: false,
};
