import fs from 'fs';
import { parse } from 'papaparse';
import Title from "../../components/title";
import Section from "../../components/section";
import Link from 'next/link';

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
				<div className='flex dui-card-body p-4'>
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
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
					{ data.products.map((item, index) => 
						<>
							<Link className='' key={index} href={`/produtos/${slugify(item[0])}`}>
								<Card img={`/produtos/${item[5]}/photo.webp`}>
									<h3 className='dui-card-title text-base'>{item[0]}</h3>

									<div className=" flex-1 dui-card-actions justify-end">
										<div className="dui-badge dui-badge-primary">{item[1]}</div>
										<div className="dui-badge dui-badge-neutral">{item[2]}</div>
									</div>
								</Card>
							</Link>
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