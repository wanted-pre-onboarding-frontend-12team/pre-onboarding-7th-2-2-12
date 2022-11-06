import * as S from './styled';
import SideBar from '@src/components/layout/SideBar';
import Header from '@src/components/layout/Header';
import Title from '@src/components/shared/Title';

const ADManagement = () => {
	return (
		<S.ADManagementWrap>
			<SideBar />
			<S.LayoutFlex>
				<Header />
				<Title path="manager" />
			</S.LayoutFlex>
		</S.ADManagementWrap>
	);
};

export default ADManagement;
