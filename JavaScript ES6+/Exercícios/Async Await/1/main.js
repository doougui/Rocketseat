// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
	try {
		await delay();
		console.log('1s');

		await delay();
		console.log('2s');

		await delay();
		console.log('3s');
	} catch (err) {
		console.log(err);
	}
}

umPorSegundo();