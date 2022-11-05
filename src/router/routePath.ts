type PageKey = 'DASH_BOARD' | 'AD_MANAGER' | 'NOT_FOUND';
type PageValue = '/' | '/manager' | '*';
type RoutePaths = Record<PageKey, PageValue>;

const ROUTE_PATHS: RoutePaths = {
	DASH_BOARD: '/',
	AD_MANAGER: '/manager',
	NOT_FOUND: '*',
};

export default ROUTE_PATHS;
