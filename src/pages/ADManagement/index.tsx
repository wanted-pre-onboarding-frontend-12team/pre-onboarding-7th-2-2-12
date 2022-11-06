import { Layout, Button, CardList } from '@src/components';
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
						<select id="status" name="status" onChange={handleDropBox} defaultValue="all">
							<option value="all">전체 광고</option>
							<option value="active">진행중</option>
							<option value="ended">중단됨</option>
						</select>
						<Button type={'button'} theme={'main'}>
							<S.Font>광고 만들기</S.Font>
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
