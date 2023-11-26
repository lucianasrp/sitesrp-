const fs = require('fs');
const http = require('http');
const https = require('https');
const papa = require('papaparse');

const sharp = require('sharp');
const webp = require('webp-converter');

const { split } = require('postcss/lib/list');

function slugify(str) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

async function cropPhoto(path, file, width, height) {
	const ext = 'tmp';
	const channels = 3;

	try {
		await sharp(`${path}/file.${ext}`, { raw: { width, height, channels } })
			.resize(width, height, {
				background: { r: 255, g: 255, b: 255, alpha: 1 },
				fit: sharp.fit.outside,
				gravity: sharp.gravity.center,
				position: sharp.strategy.entropy
			})
			.toFile(`${path}/${file}.webp`);
	} catch (error) {
		console.log(`${path}/${file} -> ${error}`);
	}
}

async function getData() {
	if (!fs.existsSync(`public/produtos`))
		fs.mkdirSync(`public/produtos`);

	// abrir e de itens
	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();
	
	papa.parse(productsData.substring(productsData.indexOf("\n") + 1), {
		worker: true,
		step: function(results) {
			const product = results.data;
			const slug = slugify(`${product[1]} - ${product[2]} - ${product[0]}`);
			const path = `public/produtos/${slug}`;

			// baixar a imagem do item
			if(product[4]) {
				//console.log(`${path} -> download iniciado`);
				if (!fs.existsSync(path))
					fs.mkdirSync(path);
	
				const ext = 'tmp';//split(product[4], '.').slice(-1);
				const file = fs.createWriteStream(`${path}/file.${ext}`);

				if( product[4].includes('https') )
					https.get(product[4], function(response) {
						response.pipe(file);
		
						file.on('finish', async () => {
							file.close();
							console.log(`${path} -> download finalizado`);

							await cropPhoto(path, 'thumb', 320, 240);
							await cropPhoto(path, 'photo', 1024, 760);
							console.log(`${path} -> conversão finalizada`);

							//fs.rmSync(`${path}/file.${ext}`);
							console.log(`${path} -> download apagado`);
						})
					})
				else
					http.get(product[4], function(response) {
						response.pipe(file);
		
						file.on('finish', async () => {
							file.close();
							console.log(`${path} -> download finalizado`);

							await cropPhoto(path, 'thumb', 320, 240);
							await cropPhoto(path, 'photo', 1024, 760);
							console.log(`${path} -> conversão finalizada`);

							//fs.rmSync(`${path}/file.${ext}`);
							console.log(`${path} -> download apagado`);
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