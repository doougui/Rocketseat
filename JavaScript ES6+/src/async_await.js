export default function async_await() {
	// Async / Await
	const minhaPromise = () => new Promise((resolve, reject) => {
		setTimeout(() => { resolve('OK') }, 2000);
	});

	const executaPromise = async () => {
		// also: async function executaPromise()
		const response = await minhaPromise();

		console.log(response);
	}

	// função async virá uma Promise
	executaPromise() 
		.then((response) => {
			console.log('Requisição concluída.');
		})
		.catch((err) => {
			console.log(err);
		});
}