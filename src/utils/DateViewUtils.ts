export const dateToKoString = (date: Date) => {
	return date.getFullYear() + `년 ` + (date.getMonth() + 1).toString() + `월 ` + date.getDate().toString() + `일`;
};
