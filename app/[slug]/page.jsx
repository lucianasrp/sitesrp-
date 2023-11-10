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

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Create Next App | ${params.slug}`,
  	description: 'Generated by create next app',
  }
}

export default async function Product({ params }) {
  return ( 
		<>
			<h1>teste ^^</h1>
			<p>{JSON.stringify(params)}</p>
		</> 
	)
}