import { AdStatusWrap } from './styled';

type Props = {
	sum: number;
	exSum: number;
};

export const Roas = ({ sum, exSum }: Props) => {
	const gap = sum - exSum;
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>Roas</p>
				<span>{Math.round(sum)}%</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? (
					<img src="/src/assets/images/up.png" alt=""></img>
				) : (
					<img src="/src/assets/images/down.png" alt=""></img>
				)}
				<p>{Math.round(Math.abs(gap))}%</p>
			</div>
		</AdStatusWrap>
	);
};
export const Cost = ({ sum, exSum }: Props) => {
	const gap = sum - exSum;
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>광고비</p>
				<span>{sum}원</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? (
					<img src="/src/assets/images/up.png" alt=""></img>
				) : (
					<img src="/src/assets/images/down.png" alt=""></img>
				)}
				<p>{Math.abs(gap)}원</p>
			</div>
		</AdStatusWrap>
	);
};
export const Imp = ({ sum, exSum }: Props) => {
	const gap = sum - exSum;
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>노출수</p>
				<span>{sum}회</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? (
					<img src="/src/assets/images/up.png" alt=""></img>
				) : (
					<img src="/src/assets/images/down.png" alt=""></img>
				)}
				<p>{Math.abs(gap)}회</p>
			</div>
		</AdStatusWrap>
	);
};
export const Click = ({ sum, exSum }: Props) => {
	const gap = sum - exSum;
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>클릭수</p>
				<span>{sum}회</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? (
					<img src="/src/assets/images/up.png" alt=""></img>
				) : (
					<img src="/src/assets/images/down.png" alt=""></img>
				)}
				<p>{Math.abs(gap)}회</p>
			</div>
		</AdStatusWrap>
	);
};
export const Conv = ({ sum, exSum }: Props) => {
	const gap = sum - exSum;
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>전환수</p>
				<span>{sum}회</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? (
					<img src="/src/assets/images/up.png" alt=""></img>
				) : (
					<img src="/src/assets/images/down.png" alt=""></img>
				)}
				<p>{Math.abs(gap)}회</p>
			</div>
		</AdStatusWrap>
	);
};
export const Revenue = ({ sum, exSum }: Props) => {
	const gap = sum - exSum;
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>매출</p>
				<span>{Math.round(sum)}원</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? (
					<img src="/src/assets/images/up.png" alt=""></img>
				) : (
					<img src="/src/assets/images/down.png" alt=""></img>
				)}
				<p>{Math.round(Math.abs(gap))}원</p>
			</div>
		</AdStatusWrap>
	);
};
