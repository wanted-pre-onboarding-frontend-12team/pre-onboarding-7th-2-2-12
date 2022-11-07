import * as S from './styled';
import bulb from '../../../assets/images/bulb.svg';

const Guide = () => {
	const mainUrl = 'https://lever.me/';
	const TermsUrl =
		'https://biz.lever.me/terms/use?_gl=1*1bahqyt*_ga*NTI1NDc2MTUxLjE2Njc3NzkyMzM.*_ga_LBR1QQNRBZ*MTY2Nzc3OTIzMy4xLjAuMTY2Nzc3OTIzNy41Ni4wLjA.';
	return (
		<S.GuideWrap>
			<S.GuideBox href={mainUrl}>
				<S.BulbIconWrap>
					<S.BulbIcon src={bulb} />
				</S.BulbIconWrap>
				<S.GuideTextWrap>
					<S.GuideTitle>레버 이용 가이드</S.GuideTitle>
					<S.GuideLink>시작하기 전에 알아보기</S.GuideLink>
				</S.GuideTextWrap>
			</S.GuideBox>
			<S.Slogan>레버는 함께 만들어갑니다.</S.Slogan>
			<S.Terms href={TermsUrl}>이용약관</S.Terms>
		</S.GuideWrap>
	);
};
export default Guide;
