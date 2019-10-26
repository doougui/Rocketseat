// Quando a função tem um nome E UM CORPO, não é recomendado usar arrow functions

// Errado
const teste1 = () => {
	// some code
	return 'teste';
}
console.log(teste1());

// Correto
function teste2() {
	// some code
	return 'teste';
}
console.log(teste2());
