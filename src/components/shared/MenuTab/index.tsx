import * as S from './styled';
import { DashBoardIcon, DashBoardBlueIcon, AdManagementIcon, AdManagementBlueIcon } from '@src/assets/icons';
import { useLocation } from 'react-router-dom';

const MenuTab = () => {
	const location = useLocation();
	return (
		<S.MenuTabWrap>
			<S.MenuTab to="/" selected={location.pathname === '/'}>
				<S.MenuIcon src={location.pathname === '/' ? DashBoardBlueIcon : DashBoardIcon} />
				<S.MenuText selected={location.pathname === '/'}>대시보드</S.MenuText>
			</S.MenuTab>
			<S.MenuTab to="/manager" selected={location.pathname === '/manager'}>
				<S.MenuIcon src={location.pathname === '/manager' ? AdManagementBlueIcon : AdManagementIcon} />
				<S.MenuText selected={location.pathname === '/manager'}>광고관리</S.MenuText>
			</S.MenuTab>
		</S.MenuTabWrap>
	);
};

export default MenuTab;
