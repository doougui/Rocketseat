// Métodos estáticos

class Matematica {
	static soma(a, b) { // Métodos estáticos não "enxergam o restante da classe"
		return a + b;
	}
}

console.log(Matematica.soma(2, 5));