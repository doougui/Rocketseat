// Ex 02 and Ex 03

const listElement = document.querySelector('ul');
const inputElement = document.querySelector('input[name=user]');

function renderRepos(response) {
	for (repo of response) {
		const liElement = document.createElement('li');
		const liText = document.createTextNode(repo.name);

		liElement.appendChild(liText);
		listElement.appendChild(liElement);
	}
}

function searchRepos() {
	listElement.innerHTML = '';

	gitUser = inputElement.value;

	const liLoad = document.createElement('li');
	const liLoadText = document.createTextNode('Carregando...');

	liLoad.appendChild(liLoadText);
	listElement.appendChild(liLoad);

	console.log(listElement);

	axios.get(`https://api.github.com/users/${gitUser}/repos`)
		.then(response => {
			renderRepos(response.data);

			listElement.removeChild(liLoad);
		})

		.catch(error => {
			alert(error);
			inputElement.value = '';

			listElement.removeChild(liLoad);
		});
}