import Breadcrumbs from "../breadcrumbs";
import Section from "../section";

export default function Title({children}) {
	return (
		<>
			<Section>
				<h1 className='text-5xl md:text-6xl'>{children}</h1>
				<Breadcrumbs />
			</Section>
		</>
	)
}