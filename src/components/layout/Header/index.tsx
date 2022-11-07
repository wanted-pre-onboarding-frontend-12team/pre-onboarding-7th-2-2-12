import * as S from './styled';
import { AlarmIcon, SettingIcon, UserIcon } from '@src/assets/icons';

const Header = () => {
	return (
		<S.HeaderWrap>
			<S.AlarmIcon src={AlarmIcon} alt="알림 아이콘" />
			<S.SettingIcon src={SettingIcon} alt="설정 아이콘" />
			<S.ProfileWrap>
				<S.ProfileIcon src={UserIcon} alt="유저 아이콘" />
			</S.ProfileWrap>
			<S.UserName>원티드 님</S.UserName>
		</S.HeaderWrap>
	);
};

export default Header;
