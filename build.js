const fs = require('fs');
const http = require('http');
const https = require('https');
const webp = require('webp-converter');
const papa = require('papaparse');
const { split } = require('postcss/lib/list');

async function getData() {
	if (!fs.existsSync(`public/produtos`))
		fs.mkdirSync(`public/produtos`);

	// abrir e de itens
	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();
	
	await papa.parse(productsData.substring(productsData.indexOf("\n") + 1), {
		worker: true,
		step: function(results) {
			const product = results.data;
			const path = `public/produtos/${product[5]}`;

			// baixar a imagem do item
			if(product[4]) {
				if (!fs.existsSync(path))
					fs.mkdirSync(path);
	
				const ext = split(product[4], '.').slice(-1);
				const file = fs.createWriteStream(`${path}/file.${ext}`);
				const request = https.get(product[4], function(response) {
					response.pipe(file);
	
					file.on('finish', () => {
						file.close();
						console.log(`${path} -> download finalizado`);
	
						const result = webp.cwebp(`${path}/file.${ext}`, `${path}/photo.webp`,"-q 80",logging="-v");
						result.then((response) => {
							console.log(response);
							fs.rmSync(`${path}/file.${ext}`);
						})
					})
				})
			}
		}
	});

	/*
	const products = papa.parse(productsData.substring(productsData.indexOf("\n") + 1));

	// criar estrutura de diretório dos itens
	for (const product of products.data) {
		const path = `public/produtos/${product[5]}`;

		// baixar a imagem do item
		if(product[4]) {
			if (!fs.existsSync(path))
				fs.mkdirSync(path);

			const ext = split(product[4], '.').slice(-1);
			const file = fs.createWriteStream(`${path}/file.${ext}`);
			const request = https.get(product[4], function(response) {
				response.pipe(file);

				file.on('finish', () => {
					file.close();
					console.log(`${path} -> download finalizado`);

					const result = webp.cwebp(`${path}/file.${ext}`, `${path}/photo.webp`,"-q 80",logging="-v");
					result.then((response) => {
						console.log(response);
						fs.rmSync(`${path}/file.${ext}`);
					})
				})
			})
		}
	}
	*/
}

getData();

console.log('teste');