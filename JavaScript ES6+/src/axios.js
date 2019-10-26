import Usuario, { idade as IdadeUsuario } from './functions';
import async_await from './async_await';
import axios from 'axios';

class Api {
	static async getUserInfo(username) {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`);
			console.log(response.data);
		} catch (err) {
			console.warn('Erro na API');
		}

	}
}

Api.getUserInfo('doougui');