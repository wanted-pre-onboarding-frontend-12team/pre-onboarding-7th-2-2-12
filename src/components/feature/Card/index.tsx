import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Button from '@src/components/shared/Button';
import * as S from './styled';
import { AdProgress } from '@src/types/advertise';
import { dateToString } from '@src/utils/DateUtils';
import Typography from '@src/components/shared/Typography';
import { theme } from '@src/styles';
import { moneyExpressionConverter } from '@src/utils/NumberUtils';

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
						<Typography variant="h2" fontWeight={700} lineHeight={'19px'} fontSize={'16px'} color={theme.colors.black}>
							{item.adType === 'app' ? '?????????_' : '?????????_'}
							{item.title}
						</Typography>
					)}
				</S.Title>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={item.status}>??????</S.NameFont>
					{editMode ? (
						<select ref={statusRef} id="status" name="status" defaultValue={item.status}>
							<option value="active">?????????</option>
							<option value="ended">?????????</option>
						</select>
					) : (
						<Typography variant="span" fontWeight={700} fontSize={'12px'} lineHeight="14px" color={theme.colors.black}>
							{item.status === 'active' ? '?????????' : '?????????'}
						</Typography>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={item.startDate}>?????? ?????????</S.NameFont>
					{editMode ? (
						<input type="date" ref={startDateRef} defaultValue={dateToString(new Date(item.startDate))}></input>
					) : (
						<Typography variant="span" fontWeight={700} fontSize={'12px'} lineHeight="14px" color={theme.colors.black}>
							{dateToString(new Date(item.startDate))}
							{item.endDate ? ` (${dateToString(new Date(item.endDate))})` : ''}
						</Typography>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'budget'}>??? ?????? ??????</S.NameFont>
					{editMode ? (
						<input type="number" ref={budgetRef} defaultValue={item.budget}></input>
					) : (
						<Typography variant="span" fontWeight={700} fontSize={'12px'} lineHeight="14px" color={theme.colors.black}>
							{moneyExpressionConverter(item.budget)}
						</Typography>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'roas'}>?????? ?????????</S.NameFont>
					{editMode ? (
						<input type="number" ref={roasRef} defaultValue={item.report.roas}></input>
					) : (
						<Typography variant="span" fontWeight={700} fontSize={'12px'} lineHeight="14px" color={theme.colors.black}>
							{item.report.roas}%
						</Typography>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'convValue'}>??????</S.NameFont>
					{editMode ? (
						<input type="number" name={'convValue'} ref={convValueRef} defaultValue={item.report.convValue}></input>
					) : (
						<Typography variant="span" fontWeight={700} fontSize={'12px'} lineHeight="14px" color={theme.colors.black}>
							{moneyExpressionConverter(item.report.convValue)}
						</Typography>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.BlockWrapper editMode={editMode}>
					<S.NameFont htmlFor={'cost'}>?????? ??????</S.NameFont>
					{editMode ? (
						<input type="number" name={'cost'} ref={costRef} defaultValue={item.report.cost}></input>
					) : (
						<Typography variant="span" fontWeight={700} fontSize={'12px'} lineHeight="14px" color={theme.colors.black}>
							{moneyExpressionConverter(item.report.cost)}
						</Typography>
					)}
				</S.BlockWrapper>
				<S.Divider />
				<S.ButtonWrapper>
					<Button type={'button'} theme={'basic'} onClick={onEditMode}>
						<Typography variant="h2" fontWeight={700} lineHeight={'19px'} fontSize={'16px'}>
							{editMode ? '??????' : '????????????'}
						</Typography>
					</Button>
					{editMode && <S.InputButton type="submit" value="??????" />}
				</S.ButtonWrapper>
			</S.CardForm>
		</S.Container>
	);
};

export default Card;
