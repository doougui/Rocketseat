// Herança

class List {
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.push(data);
		console.log(this.data);
	}
}

class TodoList extends List { 
	constructor() {
		super(); // Chama o construtor da classe pai

		this.usuario = 'Douglas';
	}

	mostraUsuario() {
		console.log(this.usuario);
	}
}

const MinhaLista = new TodoList();

document.querySelector('#novotodo').addEventListener('click', _ => {
	MinhaLista.add('Novo todo');
});

MinhaLista.mostraUsuario();