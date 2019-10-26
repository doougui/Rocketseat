const arr = [1, 3, 4, 5, 8, 9];

// Realiza a função para cada item do array
const newArr = arr.map((item, index) => {
	return item + index; // [1, 4, 6, 8, 12, 14]
});

console.log(newArr);