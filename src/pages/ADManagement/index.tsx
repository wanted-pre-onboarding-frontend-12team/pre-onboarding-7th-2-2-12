import { Layout, Button, CardList, Typography } from '@src/components';
import { theme } from '@src/styles';
import { useState } from 'react';
import * as S from './styled';

const ADManagement = () => {
	const [status, setStatus] = useState<string>('');
	const handleDropBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStatus(e.target.value);
	};

	return (
		<Layout>
			<S.Container>
				<S.InnerContainer>
					<S.Header>
						<S.Select id="status" name="status" onChange={handleDropBox} defaultValue="all">
							<option value="all">전체 광고</option>
							<option value="active">진행중</option>
							<option value="ended">중단됨</option>
						</S.Select>
						<Button type={'button'} theme={'main'}>
							<Typography variant="h2" fontWeight={700} lineHeight={'19px'} fontSize={'16px'} color={theme.colors.white}>
								광고 만들기
							</Typography>
						</Button>
					</S.Header>
					<section>
						<CardList status={status} />
					</section>
				</S.InnerContainer>
			</S.Container>
		</Layout>
	);
};

export default ADManagement;
