import * as S from './styled';
import SideBar from '@src/components/layout/SideBar';
import Header from '@src/components/layout/Header';
import Title from '@src/components/shared/Title';
import CardList from '@src/components/feature/CardList';
import Button from '@src/components/shared/Button';

const ADManagement = () => {
	return (
		<S.ADManagementWrap>
			<SideBar />
			<S.LayoutFlex>
				<Header />
				<Title path="manager" />
				<S.Wrapper>
					<S.Header>
						<Button type={'button'} theme={'basic'}>
							<S.Font>전체 광고</S.Font>
						</Button>
						<Button type={'button'} theme={'main'}>
							<S.Font>광고 만들기</S.Font>
						</Button>
					</S.Header>
					<S.Space height={40} />
					<S.Content>
						<CardList />
					</S.Content>
				</S.Wrapper>
			</S.LayoutFlex>
		</S.ADManagementWrap>
	);
};

export default ADManagement;
