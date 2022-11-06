const TEN = 10;
const ONE_THOUSAND = 1_000;
const TEN_THOUSAND = 10_000;
const ONE_HUNDRED_THOUSAND = 100_000;

export const numberWithCommasConverter = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const moneyExpressionConverter = (money: number) => {
	if (money / TEN_THOUSAND < 1) return `${numberWithCommasConverter(money)}원`;
	if (money % TEN_THOUSAND === 0) return `${numberWithCommasConverter(Math.floor(money / TEN_THOUSAND))}만원`;
	if (money < ONE_HUNDRED_THOUSAND) return `${Math.floor(money / ONE_THOUSAND)}천원`;

	return Math.floor((money / ONE_THOUSAND) % TEN) > 0
		? `${Math.floor(money / TEN_THOUSAND)}만 ${Math.floor(money / ONE_THOUSAND) % TEN}천원`
		: `${Math.floor(money / TEN_THOUSAND)}만원`;
};
