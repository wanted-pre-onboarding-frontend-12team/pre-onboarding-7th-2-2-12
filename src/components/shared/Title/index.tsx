import * as S from './styled';

type Props = {
	path: string;
};

const Title = ({ path }: Props) => {
	const title: any = {
		dash: '대시보드',
		manager: '광고관리',
	};

	return (
		<S.TitleWrap>
			<S.Title>{title[path]}</S.Title>
			{path === 'dash' ? <S.SelectDate>2021년 11월 11일~2021년 11월 16일 ∧</S.SelectDate> : null}
		</S.TitleWrap>
	);
};

export default Title;
