import { useLocation } from 'react-router-dom';
import * as S from './styled';

const titleTable: { [key: string]: string } = {
	'/': '대시보드',
	'/manager': '광고관리',
};

const Title = () => {
	const locator = useLocation();

	return (
		<S.TitleWrap>
			<S.Title>{titleTable[locator.pathname]}</S.Title>
			{locator.pathname === '/' ? <S.SelectDate>2021년 11월 11일~2021년 11월 16일 ∧</S.SelectDate> : null}
		</S.TitleWrap>
	);
};

export default Title;
