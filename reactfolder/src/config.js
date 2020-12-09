let dev = 1; // dev = 1 => local
// dev = 0 => heroku

let server_dev = 'http://localhost:5000/';
let server_heroku = '/';

export default {
	server: dev ? server_dev : server_heroku,
};
