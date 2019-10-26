const user = {
	name: 'Douglas',
	age: 17,
	address: {
		city: 'Jaguaruna',
		state: 'SC'
	}
};

// Ruim
const badName = user.name;
const badAge = user.age;
const badCity = user.address.city;

// Bom
const { name:username, age, address: { city } } = user;

console.log(username, age, city);