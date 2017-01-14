import axios from 'axios';

const REQUEST_URL = 'http://diegovilarinho.dev/wp-json/wp/v2';

export const fetchPosts = () => {

	//Fazer request HTTP para obter todos os posts
	const request = axios.get(`${REQUEST_URL}/posts`);
	return {
		type: 'FETCH_POSTS',
		payload: request // Promise
	};
};

export const fetchPost = (id) => {

	const request = axios.get(`${REQUEST_URL}/posts/${id}`);
	return {
		type: 'FETCH_POST',
		payload: request
	};
};