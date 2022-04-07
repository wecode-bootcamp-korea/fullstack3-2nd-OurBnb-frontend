import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './components/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Trips from './pages/Trips/Trips';
import ImgLoader from './pages/List/ImgLoader';

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
					<Route path="/img" element={<ImgLoader />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
