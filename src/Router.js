import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './components/Login/Login';
import Help from './pages/Oops/Oops';
import Review from './pages/Detail/components/Review';
import RoomOptionModal from './pages/Detail/components/RoomOptionModal';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/:location/room" element={<List />} />
					<Route path="/room/:roomid" element={<Detail />} />
					<Route path="/kakaologin" element={<KakaoLogin />} />
					{/* <Route path="/wishlists" element={<Wishlists />} /> */}
					{/* <Route path="/trips" element={<Trips />} /> */}
					<Route path="*" element={<Help />} />
					<Route path="rm" element={<RoomOptionModal />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
