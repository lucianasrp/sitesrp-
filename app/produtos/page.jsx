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

	const output = {
		tags: [],
		products: products.data
	}

	// criar estrutura de diretório dos itens
	for (const product of products.data) {
		// organizar o tipo de item
	}

	// adicionar os itens em seus paths
	return output;
}

function Card({ img, children }) {
	return (
		<>
			<div className='dui-card min-h-full bg-base-100 shadow-md'>
				<figure className='max-h-32 overflow-hidden'><img className='min-h-[8rem]' src={img} /></figure>
				<div className='dui-card-body'>
					{children}
				</div>
			</div>
		</>
	)
}

export default async function ProductsPage() {
	const data = await getData()

	return(
		<>
			{/* TITLE */}
			<Title>PRODUTOS</Title>
			<Section className='flex gap-4'>
				<div>
					espaço para filtro por tipo de item (piso vilinico, piso laminado, acessório, rodapé e etc)
				</div>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
					{ data.products.map((item, index) => 
						<>
							<a className='' key={index} href='#'>
								<Card img={`/produtos/${item[5]}/photo.webp`}>
									<h3 className='dui-card-title text-base'>{item[0]}</h3>
									<div>
										<p></p>
									</div>
								</Card>
							</a>
						</>
					)}
				</div>
			</Section>
			<Section>
				
				{JSON.stringify(data)}
			</Section>
		</>
	)
}