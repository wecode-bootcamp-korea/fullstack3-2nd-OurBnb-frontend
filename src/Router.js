import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import ReservationCard from './pages/Detail/components/ReservationCard';
import List from './pages/List/List';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/list" element={<List />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/card" element={<ReservationCard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
