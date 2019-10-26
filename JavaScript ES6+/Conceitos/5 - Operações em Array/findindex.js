const arr = [1, 3, 4, 5, 8, 9];

// Retorna o indice do valor que satisfaz a condição
const findindex = arr.findIndex(item => {
	return item === 4; // 2
});

console.log(findindex);