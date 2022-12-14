import { AdStatusWrap } from './styled';
import { numberWithCommasConverter } from '@src/utils/NumberUtils';
import { TriangleDownGreenIcon, TriangleUpRedIcon } from '@src/assets/icons';

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
				<span>{numberWithCommasConverter(Math.round(sum))}%</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? <img src={TriangleUpRedIcon} alt=""></img> : <img src={TriangleDownGreenIcon} alt=""></img>}
				<p>{numberWithCommasConverter(Math.round(Math.abs(gap)))}%</p>
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
				<span>{numberWithCommasConverter(sum)}원</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? <img src={TriangleUpRedIcon} alt=""></img> : <img src={TriangleDownGreenIcon} alt=""></img>}
				<p>{numberWithCommasConverter(Math.abs(gap))}원</p>
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
				<span>{numberWithCommasConverter(sum)}회</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? <img src={TriangleUpRedIcon} alt=""></img> : <img src={TriangleDownGreenIcon} alt=""></img>}
				<p>{numberWithCommasConverter(Math.abs(gap))}회</p>
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
				<span>{numberWithCommasConverter(sum)}회</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? <img src={TriangleUpRedIcon} alt=""></img> : <img src={TriangleDownGreenIcon} alt=""></img>}
				<p>{numberWithCommasConverter(Math.abs(gap))}회</p>
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
				<span>{numberWithCommasConverter(sum)}회</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? <img src={TriangleUpRedIcon} alt=""></img> : <img src={TriangleDownGreenIcon} alt=""></img>}
				<p>{numberWithCommasConverter(Math.abs(gap))}회</p>
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
				<span>{numberWithCommasConverter(Math.round(sum))}원</span>
			</div>
			<div className="compareDiv">
				{sum - exSum > 0 ? <img src={TriangleUpRedIcon} alt=""></img> : <img src={TriangleDownGreenIcon} alt=""></img>}
				<p>{numberWithCommasConverter(Math.round(Math.abs(gap)))}원</p>
			</div>
		</AdStatusWrap>
	);
};

export default { Roas, Cost, Imp, Click, Conv, Revenue };
