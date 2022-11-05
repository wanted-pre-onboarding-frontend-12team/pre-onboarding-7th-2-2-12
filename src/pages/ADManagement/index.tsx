import CardList from '@src/components/feature/CardList';
import Button from '@src/components/shared/Button';
import * as S from './styled';

const ADManagement = () => {
	return (
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
	);
};

export default ADManagement;
