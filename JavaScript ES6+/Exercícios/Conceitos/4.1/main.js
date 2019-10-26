const empresa = {
	nome: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC'
	}
};

let { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC