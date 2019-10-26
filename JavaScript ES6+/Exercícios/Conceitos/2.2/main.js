const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const newUsuarios = usuarios.filter(usuario => {
	let {empresa, idade} = usuario;
	return empresa === 'Rocketseat' && idade > 18;
});

console.log(newUsuarios);