function checaIdade(idade) {
 	return new Promise (function(resolve, reject) {
 		setTimeout(function() {

 			// Método 1

	 		if (idade >= 18) {
	 			resolve();
	 		} else {
	 			reject();
	 		}

	 		// Método 2

	 		return idade >= 18 ? resolve() : reject();
 		}, 2000);
 	});
}

checaIdade(20)
	.then(function() {
		console.log("Maior que 18");
	})
	.catch(function() {
		console.log("Menor que 18");
	});