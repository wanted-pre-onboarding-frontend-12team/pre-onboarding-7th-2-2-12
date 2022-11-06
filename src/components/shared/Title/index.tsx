import { useLocation } from 'react-router-dom';
import * as S from './styled';
import DateView from '../DateView';

const titleTable: { [key: string]: string } = {
	'/': '대시보드',
	'/manager': '광고관리',
};

const Title = () => {
	const locator = useLocation();

	return (
		<S.TitleWrap>
			<S.Title>{titleTable[locator.pathname]}</S.Title>
			{locator.pathname === '/' && <DateView />}
		</S.TitleWrap>
	);
};

export default Title;
