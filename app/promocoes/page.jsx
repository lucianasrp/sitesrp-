import Link from 'next/link'

import Title from "../../components/title";
import Section from "../../components/section";

export default function Page() {
	return(
		<>
			{/* TITLE */}
			<Title>SUPER OFERTAS</Title>

			<Section>
				<h2>Ofertas de Março!</h2>
				<div className='flex flex-col md:grid md:grid-cols-3 gap-10'>
					<Link href='https://www.instagram.com/p/C3-5o-6unNN/' target='_blank'><img src='/promocoes/promo-2403-01.jpeg'/></Link>
					<Link href='https://www.instagram.com/p/C3-5lFtOG3w/' target='_blank'><img src='/promocoes/promo-2403-02.jpeg'/></Link>
					<Link href='https://www.instagram.com/p/C3-5cQDuD9G/' target='_blank'><img src='/promocoes/promo-2403-03.jpeg'/></Link>
					<Link href='https://www.instagram.com/p/C3-5To4uc4C/' target='_blank'><img src='/promocoes/promo-2403-04.jpeg'/></Link>
					<Link href='https://www.instagram.com/p/C3-5Kkyus1o/' target='_blank'><img src='/promocoes/promo-2403-05.jpeg'/></Link>
				</div>
			</Section>
		</>
	)
}