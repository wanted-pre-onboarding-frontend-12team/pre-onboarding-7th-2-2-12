import * as S from './styled';
import Guide from '@src/components/shared/Guide';
import SideBarLogo from '../../../assets/images/SideBarLogo.png';
import MenuTab from '../../shared/MenuTab';
import DropDown from '@src/components/shared/DropDown';

const SideBar = () => {
	return (
		<S.SideBarWrap>
			<S.Separation>
				<S.LogoImg src={SideBarLogo} />
				<S.DividingLine />
				<S.SideSubTitle>서비스</S.SideSubTitle>
				<DropDown
					list={[
						{ value: '매드업', id: 1 },
						{ value: '서비스 추가하기', id: 2 },
					]}
					isBig={true}
				/>
				<S.SideSubTitle>광고 센터</S.SideSubTitle>
				<MenuTab />
			</S.Separation>
			<Guide />
		</S.SideBarWrap>
	);
};
export default SideBar;
