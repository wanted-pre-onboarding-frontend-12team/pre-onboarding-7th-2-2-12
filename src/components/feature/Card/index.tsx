import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Button from '@src/components/shared/Button';
import * as S from './styled';
import { AdProgress } from '@src/types/advertise';
import { dateToString } from '@src/utils/DateUtils';

type Props = {
	item: AdProgress;
	data: AdProgress[];
	setData: Dispatch<SetStateAction<AdProgress[]>>;
};

const Card = ({ item, data, setData }: Props) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);
	const titleRef = useRef<HTMLInputElement>(null);
	const statusRef = useRef<HTMLSelectElement>(null);
	const startDateRef = useRef<HTMLInputElement>(null);
	const budgetRef = useRef<HTMLInputElement>(null);
	const roasRef = useRef<HTMLInputElement>(null);
	const convValueRef = useRef<HTMLInputElement>(null);
	const costRef = useRef<HTMLInputElement>(null);

	const onEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setEditMode((editMode) => !editMode);
	};

	const onSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		let updateInfo = {
			id: item.id,
			title: titleRef?.current?.value,
			budget: budgetRef.current?.value,
			status: statusRef.current?.value,
			startDate: startDateRef.current?.value,
			endDate: item.endDate,
			report: {
				roas: roasRef.current?.value,
				convValue: convValueRef.current?.value,
				cost: costRef.current?.value,
			},
		};
		const changingData = data.map((CItem: AdProgress) =>
			String(CItem.id) === String(item.id) ? updateInfo : CItem,
		) as AdProgress[];
		setData(changingData);
		setEditMode((editMode) => !editMode);
	};

	return (
		<S.Container>
			<S.CardForm onSubmit={onSubmit} ref={formRef}>
				<S.Title>
					{editMode ? (
						<input ref={titleRef} name="title" defaultValue={item.title}></input>
					) : (
						<S.TitleFont>
							{item.adType === 'app' ? '앱광고_' : '웹광고_'}
							{item.title}
						</S.TitleFont>
					)}
				</S.Title>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={item.status}>상태</S.NameFont>
					{editMode ? (
						<select ref={statusRef} id="status" name="status" defaultValue={item.status}>
							<option value="active">진행중</option>
							<option value="ended">중단됨</option>
						</select>
					) : (
						<S.InfoFont>{item.status === 'active' ? '진행중' : '중단됨'}</S.InfoFont>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={item.startDate}>광고 생성일</S.NameFont>
					{editMode ? (
						<input type="date" ref={startDateRef} defaultValue={dateToString(new Date(item.startDate))}></input>
					) : (
						<S.InfoFont>
							{dateToString(new Date(item.startDate))}
							{item.endDate ? ` (${dateToString(new Date(item.endDate))})` : ''}
						</S.InfoFont>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'budget'}>일 희망 예산</S.NameFont>
					{editMode ? (
						<input type="number" ref={budgetRef} defaultValue={item.budget}></input>
					) : (
						<S.InfoFont>{item.budget}원</S.InfoFont>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'roas'}>광고 수익률</S.NameFont>
					{editMode ? (
						<input type="number" ref={roasRef} defaultValue={item.report.roas}></input>
					) : (
						<S.InfoFont>{item.report.roas}%</S.InfoFont>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'convValue'}>매출</S.NameFont>
					{editMode ? (
						<input type="number" name={'convValue'} ref={convValueRef} defaultValue={item.report.convValue}></input>
					) : (
						<S.InfoFont>{item.report.convValue}원</S.InfoFont>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'cost'}>광고 비용</S.NameFont>
					{editMode ? (
						<input type="number" name={'cost'} ref={costRef} defaultValue={item.report.cost}></input>
					) : (
						<S.InfoFont>{item.report.cost}원</S.InfoFont>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.ButtonWrapper>
					<Button type={'button'} theme={'basic'} onClick={onEditMode}>
						<S.Font>{editMode ? '취소' : '수정하기'}</S.Font>
					</Button>
					{editMode && <S.InputButton type="submit" value="수정" />}
				</S.ButtonWrapper>
			</S.CardForm>
		</S.Container>
	);
};

export default Card;
