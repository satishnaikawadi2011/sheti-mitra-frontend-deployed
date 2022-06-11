import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import HomePage from '../pages';
import NotFoundPage from '../pages/not-found';
import RecommendCropPage from '../pages/recommend-crop';
import { ActiveLinkType } from '../store';

export interface RouteType {
	path: ActiveLinkType;
	element: JSX.Element;
}

const ClientRoutes: RouteType[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/recommend-crop', element: <RecommendCropPage /> }
];

const UnauthenticatedRoutes = () => {
	return (
		<Router>
			<Routes>
				{ClientRoutes.map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default UnauthenticatedRoutes;
