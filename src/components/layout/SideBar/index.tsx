import * as S from './styled';
import Guide from '@src/components/shared/Guide';
import SideBarLogo from '../../../assets/images/SideBarLogo.png';
import MenuTab from '../../shared/MenuTab';

const SideBar = () => {
	return (
		<S.SideBarWrap>
			<S.Separation>
				<S.LogoImg src={SideBarLogo} />
				<S.DividingLine />
				<S.SideSubTitle>서비스</S.SideSubTitle>
				<S.SideSubTitle>광고 센터</S.SideSubTitle>
				<MenuTab />
			</S.Separation>
			<Guide />
		</S.SideBarWrap>
	);
};
export default SideBar;
