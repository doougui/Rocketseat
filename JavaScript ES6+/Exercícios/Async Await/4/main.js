import axios from 'axios';

const buscaUsuario = async usuario => {
	try {
		const response = await axios.get(`https://api.github.com/users/${usuario}`);
		console.log(response.data);
	} catch (err) {
		console.log('Usuário não existe');
	}
}

buscaUsuario('diego3g');