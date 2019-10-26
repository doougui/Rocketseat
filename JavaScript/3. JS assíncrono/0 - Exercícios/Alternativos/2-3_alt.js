// Ex 02 and Ex 03

const listElement = document.querySelector('ul');
const inputElement = document.querySelector('input[name=user]');

function getRepos(user) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', `https://api.github.com/users/${user}/repos`);
		xhr.send(null);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('O usuário não existe');
				}
			}
		}
	});
}

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

	getRepos(gitUser)
		.then(response => {
			renderRepos(response);

			listElement.removeChild(liLoad);
		})

		.catch(error => {
			alert(error);
			inputElement.value = '';

			listElement.removeChild(liLoad);
		});
}