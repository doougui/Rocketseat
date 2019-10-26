function teste(x) {
	let y = 2;

	if (x > 5) {
		let y = 4;

		console.log(x, y);
	}
}

console.log(y); // Erro: Uncaught ReferenceError: y is not defined

teste(10);