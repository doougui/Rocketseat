const usuario = {
	nome: 'Diego',
	idade: 23,
	endereco: {
		cidade: 'Rio do Sul',
		uf: 'SC',
		pais: 'Brasil'
	}
};

const usuario2 = {
	...usuario,
	nome: 'Gabriel'
};

console.log(usuario2);

const usuario3 = {
	...usuario,
	endereco: {
		cidade: 'Lontras'
	}
}

console.log(usuario3);