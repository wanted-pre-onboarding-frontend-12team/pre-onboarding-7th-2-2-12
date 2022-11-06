import React, { useState } from 'react';
import Button from '@src/components/shared/Button';
import CardInfo from '@src/components/feature/Card/CardInfo';
import InfoTitle from '@src/components/feature/Card/CardTitle';
import * as S from './styled';
import { AdProgress } from '@src/types/advertise';
import { moneyConverter, prefixTitle } from '@src/utils/CardUtils';

const Card = ({ item, data, setData }: AdProgress) => {
	const [editMode, setEditMode] = useState<boolean>(false);

	const onEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setEditMode((editMode) => !editMode);
	};

	const onSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		let updateInfo = {
			title: e.target.title.value,
			budget: e.target.budget.value,
			status: e.target.status.value,
			startDate: e.target.startDate.value,
			report: {
				roas: e.target.roas.value,
				convValue: e.target.convValue.value,
				cost: e.target.cost.value,
			},
		};

		setData(data.map((item) => (String(item.id) === String(e.target.id) ? { ...item, ...updateInfo } : item)));
		setEditMode((editMode) => !editMode);
	};

	return (
		<S.Wrapper onSubmit={onSubmit} id={item.id}>
			<S.Space height={40} />
			<InfoTitle editMode={editMode} value={prefixTitle(item.title, item.adType)} />
			<S.Space height={40} />
			<S.Divider />
			<CardInfo infoName={'상태'} info={'진행 중'} name={'status'} editMode={editMode} />
			<S.Divider />
			<CardInfo infoName={'광고 생성일'} info={item.startDate} name={'startDate'} editMode={editMode} />
			<S.Divider />
			<CardInfo infoName={'일 희망 예산'} info={moneyConverter(item.budget)} name={'budget'} editMode={editMode} />
			<S.Divider />
			<CardInfo infoName={'광고 수익률'} info={`${item.report.roas}%`} name={'roas'} editMode={editMode} />
			<S.Divider />

			<CardInfo infoName={'매출'} info={moneyConverter(item.report.cost)} name={'convValue'} editMode={editMode} />
			<S.Divider />
			<CardInfo infoName={'광고 비용'} info={moneyConverter(item.report.convValue)} name={'cost'} editMode={editMode} />
			<S.Divider />
			<S.Action>
				<S.Space height={20} />
				<Button type={'button'} theme={'basic'} onClick={onEditMode}>
					<S.Font>{editMode ? `취소하기` : `수정하기`}</S.Font>
				</Button>
				{editMode && <S.InputButton type="submit" value="수정 완료하기" />}
				<S.Space height={21} />
			</S.Action>
		</S.Wrapper>
	);
};

export default Card;
