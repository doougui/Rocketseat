const arr = [1, 3, 4, 5, 8, 9];

// Retorna o valor que satisfaz a condição
const find = arr.find(item => {
	return item === 4; // 4
});

console.log(find);