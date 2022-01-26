import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './components/Login/Login';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/list" element={<List />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/kakaologin" element={<KakaoLogin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
