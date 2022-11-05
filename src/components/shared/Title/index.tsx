import * as S from './styled';

const Title = ({ path }) => {
	const title = {
		dash: '대시보드',
		manager: '광고관리',
	};

	return (
		<S.TitleWrap>
			<S.Title>{title[path]}</S.Title>
			{path === 'manager' ? <S.SelectDate>2021년 11월 11일~2021년 11월 16일 ∧</S.SelectDate> : null}
		</S.TitleWrap>
	);
};

export default Title;
