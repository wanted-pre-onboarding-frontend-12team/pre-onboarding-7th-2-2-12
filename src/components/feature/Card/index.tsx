import React, { useState } from 'react';
import Button from '@src/components/shared/Button';
import CardInfo from '@src/components/feature/CardInfo';
import InfoTitle from '@src/components/feature/CardTitle';
import * as S from './styled';

const Card = () => {
	const [editMode, setEditMode] = useState<boolean>(false);

	const onEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setEditMode((editMode) => !editMode);
	};

	const onSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<S.Container>
			<S.CardForm onSubmit={onSubmit}>
				<InfoTitle editMode={editMode} value={'웹광고_20210603123030'} />
				<S.Divider />
				<CardInfo infoName={'상태'} info={'진행 중'} name={'status'} editMode={editMode} />
				<S.Divider />
				<CardInfo infoName={'광고 생성일'} info={'2021-06-04'} name={'startDate'} editMode={editMode} />
				<S.Divider />
				<CardInfo infoName={'일 희망 예산'} info={'40만원'} name={'budget'} editMode={editMode} />
				<S.Divider />
				<CardInfo infoName={'광고 수익률'} info={'694%'} name={'roas'} editMode={editMode} />
				<S.Divider />
				<CardInfo infoName={'매출'} info={'26,071만원'} name={'convValue'} editMode={editMode} />
				<S.Divider />
				<CardInfo infoName={'광고 비용'} info={'3,759만원'} name={'cost'} editMode={editMode} />
				<S.Divider />
				<S.ButtonWrapper>
					<Button type={'button'} theme={'basic'} onClick={onEditMode}>
						<S.Font>수정하기</S.Font>
					</Button>
				</S.ButtonWrapper>
			</S.CardForm>
		</S.Container>
	);
};

export default Card;
