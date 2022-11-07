import React, { useRef, PropsWithChildren } from 'react';
import useDropdown from '@src/hooks/useDropdown';
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
	isBorder?: boolean;
	list: ListType[];
	default: string;
	name?: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
} & PropsWithChildren;

const DropDown = ({ ...props }: Props) => {
	const clickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const { selectedItem, handleSelectBoxToggle, handleSelectItem, isToggled, setIsToggled } = useDropdown(props.default);

	useOutsideClick(clickRef, setIsToggled);

	return (
		<S.Container isBig={props.isBig} ref={clickRef}>
			<S.SeletedData isBig={props.isBig} isBorder={props.isBorder} onClick={handleSelectBoxToggle}>
				{props.isAd && (props.adColor === 'blue' ? <img src={bluecircle} /> : <img src={greencircle} />)}
				<p>{selectedItem}</p>
				<img className="arrow" src={UpArrow} />
			</S.SeletedData>
			{isToggled && (
				<S.DropData isBig={props.isBig}>
					{props.list.map((el) => (
						<li
							className="data-list"
							key={el.value}
							onClick={() => {
								handleSelectItem(el.value);
								props.setState(el.name);
							}}
						>
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
	isBorder: true,
};
