const arr = [1, 3, 4, 5, 8, 9];

const sum = arr.reduce((total, next) => {
	return total + next;
});

console.log(sum);

// 0
// 1

// 1
// 3

// 4
// 4