// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ]; // [1, 2, 3, 4, 5, 6]

console.log(arr3);

const user1 = {
	name: 'Douglas',
	age: 17,
	company: 'DevType'
}

const user2 = { ...user1, name: 'Rogério' }; // { name: 'Rogério', age: 17, company: 'DevType' } 

console.log(user2);