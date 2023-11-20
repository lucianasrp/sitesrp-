import fs from 'fs';
import { parse } from 'papaparse';
import Title from "../../../components/title";
import Section from "../../../components/section";

// TODO: COLOCAR ISSO NUMA LIB!
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

export async function getStaticPaths() {
	// abrir e de itens
	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();
	const products = parse(productsData.substring(productsData.indexOf("\n") + 1));
	const paths = [];

	// criar estrutura de diretório dos itens
	for (const product of products.data) {
		paths.push({
			params: {
				slug: slugify(product[0]),
			}
		})
	}

	// criar estrutura de diretório dos itens

	// baixar a imagem do item

	// adicionar os itens em seus paths

	return {
		paths,
		fallback: false
	}
}

async function getData({slug}) {
	const buffer = fs.readFileSync('private/produtos.tsv');
	const productsData = buffer.toString();
	const products = parse(productsData.substring(productsData.indexOf("\n") + 1));

	for (const product of products.data) {
		if(slugify(product[0]) === slug) 
			return product;
	}

	return null;
}

export default async function Home({ params }) {
	const product = await getData(params);

	return(
		<>
			{/* TITLE */}
			<Title>
				{product[0]}
			</Title>

			{ /* PRODUTO */}
			<Section>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div>
						<img
							className='mx-auto'
							src={`/produtos/${product[5]}/photo.webp`}
							alt={product[0]}
							width={512}
							height={512}
							priority
						/>
					</div>
					<div className='col-span-2 flex flex-col gap-4'>
						<div className='flex flex-row gap-4'>
							<div className="dui-badge dui-badge-primary">{product[1]}</div>
							<div className="dui-badge dui-badge-neutral">{product[2]}</div>
						</div>

						<div className='product-content flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: product[6] }} />
					</div>
				</div>
			</Section>
		</>
	)
}