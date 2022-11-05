import { AdStatusWrap } from './styled';

const AdStatusItem = () => {
	return (
		<AdStatusWrap>
			<div className="currentDiv">
				<p>ROAS</p>
				<span>679%</span>
			</div>
			<div className="compareDiv">
				<img src="/src/assets/images/down.png" alt=""></img>
				<img src="/src/assets/images/up.png" alt=""></img>
				<p>18%</p>
			</div>
		</AdStatusWrap>
	);
};

export default AdStatusItem;
