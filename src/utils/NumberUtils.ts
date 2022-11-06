const MAN_WON = 10000;

export const numberWithCommasConverter = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const moneyExpressionConverter = (money: number) => {
	return money / MAN_WON < 1
		? `${numberWithCommasConverter(money)}원`
		: `${numberWithCommasConverter(Math.floor(money / MAN_WON))}만원`;
};
