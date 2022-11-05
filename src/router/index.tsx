import { Routes, Route } from 'react-router-dom';
import { DashBoard, ADManagement, NotFound } from '@src/pages';
import ROUTE_PATHS from '@src/router/routePath';
import { isValidArray } from '@src/utils/ArrayUtils';

const routes = [
	{
		id: 1,
		path: ROUTE_PATHS.DASH_BOARD,
		element: <DashBoard />,
	},
	{
		id: 2,
		path: ROUTE_PATHS.AD_MANAGER,
		element: <ADManagement />,
	},
	{
		id: 3,
		path: ROUTE_PATHS.NOT_FOUND,
		element: <NotFound />,
	},
];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
