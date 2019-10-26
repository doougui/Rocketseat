const user = {
	name: 'Douglas',
	age: 17,
	address: {
		city: 'Jaguaruna',
		state: 'SC'
	}
};

function showUser({ name, age }) {
	console.log(name, age);
}

showUser(user);