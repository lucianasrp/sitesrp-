export async function getStaticPaths() {
	const paths = [];

	paths.push({
		params: {
			slug: 'aeiou'
		}
	});

	return {
		paths,
		fallback: false
	}
}

export default async function Home({ params }) {
  return ( 
		<>
			<h1>teste ^^</h1>
		</> 
	)
}