import { Layout, Button, CardList } from '@src/components';
import * as S from './styled';

const ADManagement = () => {
	return (
		<Layout>
			<S.Container>
				<S.InnerContainer>
					<S.Header>
						<Button type={'button'} theme={'basic'}>
							<S.Font>전체 광고</S.Font>
						</Button>
						<Button type={'button'} theme={'main'}>
							<S.Font>광고 만들기</S.Font>
						</Button>
					</S.Header>
					<section>
						<CardList />
					</section>
				</S.InnerContainer>
			</S.Container>
		</Layout>
	);
};

export default ADManagement;
