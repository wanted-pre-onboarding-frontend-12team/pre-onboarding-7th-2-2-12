import * as S from './styled';
import bulb from '../../../assets/images/bulb.svg';

const Guide = () => {
	return (
		<S.GuideWrap>
			<S.GuideBox>
				<S.BulbIconWrap>
					<S.BulbIcon src={bulb} />
				</S.BulbIconWrap>
				<S.GuideTextWrap>
					<S.GuideTitle>레버 이용 가이드</S.GuideTitle>
					<S.GuideLink>시작하기 전에 알아보기</S.GuideLink>
				</S.GuideTextWrap>
			</S.GuideBox>
			<S.Slogan>레버는 함께 만들어갑니다.</S.Slogan>
			<S.Terms>이용약관</S.Terms>
		</S.GuideWrap>
	);
};
export default Guide;
