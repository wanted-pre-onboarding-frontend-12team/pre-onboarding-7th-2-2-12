import { Layout, Button, CardList, Typography, Select } from '@src/components';
import { theme } from '@src/styles';
import { getLocalStorage } from '@src/utils/StorageUtils';
import { useState } from 'react';
import * as S from './styled';

const ADManagement = () => {
	const [status, setStatus] = useState<string>(getLocalStorage('cardStatus') ? getLocalStorage('cardStatus') : '');
	const handleDropBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStatus(e.target.value);
	};

	return (
		<Layout>
			<S.Container>
				<S.InnerContainer>
					<S.Header>
						<S.SelectWrapper>
							<Select
								value={status}
								padding="12px 20px 12px 20px"
								arrowPadding="20px"
								fontSize={theme.fontSizes.fs14}
								fontWeight={theme.fontWeights.fw500}
								onChange={handleDropBox}
							>
								<option value="all">전체 광고</option>
								<option value="active">진행중</option>
								<option value="ended">중단됨</option>
							</Select>
						</S.SelectWrapper>

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
