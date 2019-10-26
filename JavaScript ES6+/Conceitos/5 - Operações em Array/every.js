const arr = [1, 3, 4, 5, 8, 9];

// Se todos os itens satisfazerem a condição, retorna true
const every = arr.every(item => {
	return item >= 1; // true. Todos os itens são maiores que 1
});

console.log(every);