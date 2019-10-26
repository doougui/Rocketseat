const arr = [1, 3, 4, 5, 8, 9];

// Passando por cada item, se a condição for satisfeita e retornar true, adiciona o item em um novo array
const filter = arr.filter(item => {
	return item % 2 === 0; // Retorna [4, 8]
});

console.log(filter);