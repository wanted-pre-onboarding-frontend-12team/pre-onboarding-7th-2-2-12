import * as S from './styled';
import dashboard from '../../../assets/images/dashboard.svg';
import admanagement from '../../../assets/images/admanagement.svg';
import blueDashboard from '../../../assets/images/blue dashboard.svg';
import blueAdmanagement from '../../../assets/images/blue admanagement.svg';
import { useLocation } from 'react-router-dom';

const MenuTab = () => {
	const location = useLocation();
	return (
		<S.MenuTabWrap>
			<S.MenuTab to="/" selected={location.pathname === '/'}>
				<S.MenuIcon src={location.pathname === '/' ? blueDashboard : dashboard} />
				<S.MenuText selected={location.pathname === '/'}>대시보드</S.MenuText>
			</S.MenuTab>
			<S.MenuTab to="/manager" selected={location.pathname === '/manager'}>
				<S.MenuIcon src={location.pathname === '/manager' ? blueAdmanagement : admanagement} />
				<S.MenuText selected={location.pathname === '/manager'}>광고관리</S.MenuText>
			</S.MenuTab>
		</S.MenuTabWrap>
	);
};

export default MenuTab;
