import Image from 'next/image'
import styles from './page.module.css'
import Intro from '../components/intro'
import Section from '../components/section'
import OpenStreetMap from '../components/openstreetmap'
import ImageSlider from '../components/imageslider' 
import Socials from '../components/socials'

export default function Home() {
	const slides = [
		{ img: '/home/slideshow/slide_1.png', alt:'' },
		{ img: '/home/slideshow/slide_2.png', alt:'' },
		{ img: '/home/slideshow/slide_3.png', alt:'' },
	];

  return (
		<>
			{/* INTRODUÇÃO */}
			<Intro className='relative' img='home/hero-background.jpg'>
				<div className='grid grid-rows-7 md:grid-rows-5 md:grid-cols-8 w-full h-full'>
					<div className='flex flex-col gap-4 justify-end row-start-1 row-span-2 md:col-start-2 md:col-span-2 md:row-span-4 p-4 text-center md:text-right'>
						<h1 className='text-6xl'>Titulo</h1>
						<h2 className='text-xl'>
							Somos uma empresa especializada em transformar espaços através de pisos de alta qualidade e decorações sob medida. 
						</h2>
						<h2 className='text-xl'>
							Nossa equipe altamente qualificada garante resultados impressionantes que combinam beleza, durabilidade e funcionalidade. 
						</h2>
						<h2 className='text-xl'>
							Deixe-nos criar o ambiente dos seus sonhos!
						</h2>
					</div>

					<div className='hidden md:flex flex-col items-center justify-center row-start-7 row-span-1 bg-base-100 md:row-start-5 md:col-span-3 md:row-span-1 p-4 text-xl text-center'>
						<Socials />
					</div>

					<div className='row-start-3 row-span-4 md:col-start-4 md:col-span-5 md:row-span-full overflow-hidden'>
						<ImageSlider slides={slides} parentWidth={500} />		
					</div>
				</div>
			</Intro>

			{ /* APRESENTAÇÃO */}
			<Section Section className='relative overflow-hidden text-center' >
				nonono1
			</Section >

			{ /* SERVIÇOS */}
			<Section Section className='relative  overflow-hidden text-center' >
				nonono2
			</Section >
		</>
  )
}
