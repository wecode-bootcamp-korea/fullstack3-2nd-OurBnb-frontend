import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
