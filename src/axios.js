import axios from 'axios';

/** base url  to make requests to the movies database */
const instance = axios.create({
	baseURL: 'https://API.themoviedb.org/3'
});

export default instance;
//instance.get('/foo-bar');

//https://API.themoviedb.org/3/foo-bar
