const BASE_URL = process.env.REACT_APP_BASE_URL;

const GET_LIST_API = `${BASE_URL}/rooms/`;
const GET_OPTION_API = `${BASE_URL}/rooms/options`;
const GET_DETAIL_API = `${BASE_URL}/rooms/detail`;
const GET_LOGIN_API = `${BASE_URL}/users/kakaologin`;
const GET_RESERVATION_API = `${BASE_URL}/users/trip`;

const POST_RESERVATION_API = `${BASE_URL}/rooms/detail/reservation`;
const POST_LIKE_API = `${BASE_URL}/rooms/detail/like`;

export {
	BASE_URL,
	GET_LIST_API,
	GET_OPTION_API,
	GET_DETAIL_API,
	GET_LOGIN_API,
	GET_RESERVATION_API,
	POST_RESERVATION_API,
	POST_LIKE_API,
};
