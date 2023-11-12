import Title from "../../../components/title";
import Section from "../../../components/section";

export async function getStaticPaths() {
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