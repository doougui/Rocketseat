// REST

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4]

function soma(...params) {
	return params.reduce((total, next) => total + next); // 6
}

console.log(soma(1, 2, 3));