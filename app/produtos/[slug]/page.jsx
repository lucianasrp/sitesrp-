import fs from 'fs'
import Title from "../../../components/title";
import Section from "../../../components/section";

export async function getStaticPaths() {
	// abrir e de itens

	// criar estrutura de diretório dos itens

	// baixar a imagem do item

	// adicionar os itens em seus paths
	const paths = [];
	paths.push({
		params: {
			slug: 'tapetes'
		}
	});

	return {
		paths,
		fallback: false
	}
}

export default async function Home({ params }) {
	return(
		<>
			{/* TITLE */}
			<Title>{params.slug}</Title>
		</>
	)
}