var listElement = document.querySelector('#main ul');
var inputElement = document.querySelector('#main input');
var buttonElement = document.querySelector('#main button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
	listElement.innerHTML = '';

	for (todo of todos) {
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var pos = todos.indexOf(todo);

		var linkElement = document.createElement('a');
		var linkText = document.createTextNode('Delete');
		linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')')

		linkElement.setAttribute('href', '#');
		linkElement.appendChild(linkText);

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
		todoElement.appendChild(linkElement);
	}
}

renderTodos();

function createTodo() {
	var todoText = inputElement.value;
	todos.push(todoText + ' ');
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}

buttonElement.onclick = createTodo;

function removeTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}