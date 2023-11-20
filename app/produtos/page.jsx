import fs from 'fs';
import http from 'http';
import https from 'https';
import webp from 'webp-converter';

import Title from "../../components/title";
import Section from "../../components/section";
import { parse } from 'papaparse';

async function getData() {
	// abrir e de itens
	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();
	const products = parse(productsData.substring(productsData.indexOf("\n") + 1));

	// criar estrutura de diretório dos itens
	for (const product of products.data) {
		const path = `public/produtos/${product[5]}`;
		if (!fs.existsSync(path))
			fs.mkdirSync(path);

		// baixar a imagem do item
		if(product[4]) {
			const file = fs.createWriteStream(`${path}/file.jpg`);
			const request = https.get(product[4], function(response) {
				//console.log(response)

				/*
				let result = webp.buffer2webpbuffer(data,"jpg","-q 80");
    		result.then(function(result) {
      		// you access the value from the promise here
      		//console.log(result)
		    });
				*/

				response.pipe(file);

				file.on('finish', () => {
					file.close();
					console.log(`${path} -> download finalizado`);
				})
			})

			webp.cwebp(`${path}/file.jpg`, `${path}/file.webp`, "-q 80");
		}
	}

	// adicionar os itens em seus paths
	return products;
}

export default async function ProductsPage() {
	const data = await getData();

	return(
		<>
			{/* TITLE */}
			<Title>PRODUTOS</Title>
			<div>
				{JSON.stringify(data)}
			</div>
		</>
	)
}