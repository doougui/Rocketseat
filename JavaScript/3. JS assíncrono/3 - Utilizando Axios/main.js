axios.get('https://api.github.com/users/doougui')
	.then(function(response) {
		console.log(response.data.name);
	})
	.catch(function(error) {
		console.log(error);
	});