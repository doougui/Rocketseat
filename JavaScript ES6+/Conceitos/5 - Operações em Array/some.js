const arr = [1, 3, 4, 5, 8, 9];

// Se pelo menos um item satisfazer a condição, retorna true
const some = arr.some(item => {
	return item > 20; // false
});

console.log(some);