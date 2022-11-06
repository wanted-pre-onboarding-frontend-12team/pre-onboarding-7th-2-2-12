export const getLocalStorage = (key: string) => {
	try {
		const serializedValue = localStorage.getItem(key);
		if (!serializedValue) throw new Error(`Not exist key in Storage : ${key}`);

		const deSerializedValue = JSON.parse(serializedValue);
		return deSerializedValue;
	} catch (error) {
		// 에러 핸들링
	}
};

export const setLocalStorage = (key: string, value: unknown) => {
	try {
		const serializedValue = JSON.stringify(value);
		localStorage.setItem(key, serializedValue);
	} catch (error) {
		// 에러 핸들링
	}
};

export const removeLocalStorage = (key: string) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		// 에러 핸들링
	}
};

export const clearStorage = () => {
	localStorage.clear();
};
