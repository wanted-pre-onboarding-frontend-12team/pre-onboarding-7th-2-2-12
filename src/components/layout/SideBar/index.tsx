import { useState, useEffect } from 'react';
import { Select, Guide, MenuTab } from '@src/components';
import * as S from './styled';
import { theme } from '@src/styles';
import { getLocalStorage, setLocalStorage } from '@src/utils/StorageUtils';
import { Logo } from '@src/assets/icons';

const SideBar = () => {
	const [selectedService, setSelectedService] = useState(getLocalStorage('service') ? getLocalStorage('service') : '');

	const onSelectOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedService(event.currentTarget.value);
	};

	useEffect(() => {
		setLocalStorage('service', selectedService);
	}, [selectedService]);

	return (
		<S.SideBarWrap>
			<S.Separation>
				<S.LogoImg src={Logo} />
				<S.DividingLine />
				<S.SideSubTitle>서비스</S.SideSubTitle>

				<Select
					value={selectedService}
					padding="20px"
					fontSize={theme.fontSizes.fs16}
					fontWeight={theme.fontWeights.fw700}
					arrowPadding="20px"
					onChange={onSelectOptionChange}
				>
					<option value="">매드업</option>
					<option value="join">서비스 추가하기</option>
				</Select>

				<S.SideSubTitle>광고 센터</S.SideSubTitle>
				<MenuTab />
			</S.Separation>
			<Guide />
		</S.SideBarWrap>
	);
};
export default SideBar;
