export const getLocalStorage = (key: string, defaultValue?: any) => {
	try {
		const serializedValue = localStorage.getItem(key);
		return serializedValue ? JSON.parse(serializedValue) : defaultValue;
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
