import fs from 'fs';
import Papa from 'papaparse';
import Title from "../../components/title";
import Section from "../../components/section";
import Link from 'next/link';
import Card from './product_card';
import ProductsList from './products_list';

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

async function getData() {

	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();

	const products = [];
	await Papa.parse(productsData.substring(productsData.indexOf("\n") + 1), {
		worker: true,
		step: function(results) {
			results.data[3] = results.data[4] = '';
			products.push(results.data);
		}
	});

	const output = {
		tags: [],
		products: products
	}

	// criar estrutura de diretório dos itens
	for (const product of products) {
		// organizar o tipo de item
	}

	// adicionar os itens em seus paths
	return output;
}

export default async function ProductsPage() {
	const data = await getData()

	return(
		<>
			{/* TITLE */}
			<Title>PRODUTOS</Title>

			{/* LISTA DE PRODUTOS */}
			<Section className='flex gap-4'>
				<ProductsList products={data.products} />
			</Section>

			{/* DEBUG */}
			<Section>				
				{JSON.stringify(data)}
			</Section>
		</>
	)
}