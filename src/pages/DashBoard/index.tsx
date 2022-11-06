import * as S from './styled';
import SideBar from '@src/components/layout/SideBar';
import Header from '@src/components/layout/Header';
import Title from '@src/components/shared/Title';
const DashBoard = () => {
	return (
		<S.DashBoardWrap>
			<SideBar />
			<S.LayoutFlex>
				<Header />
				<Title path="dash" />
			</S.LayoutFlex>
		</S.DashBoardWrap>
	);
};

export default DashBoard;
