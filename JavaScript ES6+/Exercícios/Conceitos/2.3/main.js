const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const googleEmployee = usuarios.find(usuario => usuario.empresa === 'Google');

console.log(googleEmployee);