const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const novaIdade = usuarios.map(usuario => {
	usuario.idade *= 2;
	return usuario;
});

const maiorQue50 = novaIdade.filter(usuario => usuario.idade <= 50);

console.log(maiorQue50);