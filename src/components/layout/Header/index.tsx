import * as S from './styled';
import alarm from '../../../assets/images/alarm.svg';
import setting from '../../../assets/images/setting.svg';
import userIcon from '../../../assets/images/userIcon.svg';

const Header = () => {
	return (
		<S.HeaderWrap>
			<S.AlarmIcon src={alarm} />
			<S.SettingIcon src={setting} />
			<S.ProfileWrap>
				<S.ProfileIcon src={userIcon} />
			</S.ProfileWrap>
			<S.UserName>원티드 님</S.UserName>
		</S.HeaderWrap>
	);
};

export default Header;
