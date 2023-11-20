import fs from 'fs';
import { parse } from 'papaparse';
import Title from "../../components/title";
import Section from "../../components/section";

async function getData() {
	if (!fs.existsSync(`public/produtos`))
		fs.mkdirSync(`public/produtos`);

	// abrir e de itens
	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();
	const products = parse(productsData.substring(productsData.indexOf("\n") + 1));

	// criar estrutura de diretório dos itens
	for (const product of products.data) {
	
	}

	// adicionar os itens em seus paths
	return products;
}

export default async function ProductsPage() {
	const data = await getData()

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