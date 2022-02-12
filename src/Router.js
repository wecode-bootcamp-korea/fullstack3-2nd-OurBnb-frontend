import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './components/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Trips from './pages/Trips/Trips';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/:location/room" element={<List />} />
					<Route path="/room/:roomid" element={<Detail />} />
					<Route path="/kakaologin" element={<KakaoLogin />} />
					<Route path="page-not-found" element={<PageNotFound />} />
					<Route path="/trips" element={<Trips />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
