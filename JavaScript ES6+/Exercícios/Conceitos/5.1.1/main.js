function soma(...nums) {
	const soma = nums.reduce((item, next) => {
		return item + next;
	});

	return soma;
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3