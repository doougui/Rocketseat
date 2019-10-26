var buttonElement = document.querySelector('button');
var inputElement = document.querySelector('input');

function repositorio() {
 	return new Promise (function(resolve, reject) {
 		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://api.github.com/users/'+ inputElement.value + '/repos');
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('Erro');
				}
			}
		}

		.then(function(response) {
			var ulElement = document.querySelector('ul');

			for (i = 0; i <= 5; i++) {
				var liElement = new Array();
				liElement[i] = document.createElement('li');
			}
		})

 	});
}





// repositorio(axios.get('https://api.github.com/users/'+ inputElement.value + '/repos'))
// 	.then(function() {
// 		var ulElement = document.querySelector('ul');

// 		for (i = 0; i <= 5; i++) {
// 			var liElement = new Array();
// 			liElement[i] = document.createElement('li');

// 			console.log(liElement);
// 		}
// 	})
// 	.catch(function() {
		
// 	});