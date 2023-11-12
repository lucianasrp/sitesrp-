import Image from 'next/image'
import styles from './page.module.css'
import Intro from '../components/intro'
import Section from '../components/section'
import OpenStreetMap from '../components/openstreetmap'
import ImageSlider from '../components/imageslider' 
import Socials from '../components/socials'
import Suppliers from '../components/suppliers'

export default function Home() {
	const slides = [
		{ img: '/home/slideshow/slide_1.png', alt:'' },
		{ img: '/home/slideshow/slide_2.png', alt:'' },
		{ img: '/home/slideshow/slide_3.png', alt:'' },
		{ img: '/home/slideshow/slide_4.png', alt:'' },
		{ img: '/home/slideshow/slide_5.png', alt:'Aplicando Papel de Parede' },
	];

  return (
		<>
			{/* INTRODUÇÃO */}
			<Intro className='relative' img='home/hero-background.jpg'>
				<div className='grid grid-rows-7 md:grid-rows-5 md:grid-cols-8 w-full h-full'>
					<div className='flex flex-col gap-4 justify-end row-start-1 row-span-2 md:col-start-2 md:col-span-2 md:row-span-4 p-4 text-center md:text-right'>
						<h1 className='hidden md:block text-6xl'>Bem-Vindo</h1>
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

					<div className='row-start-3 min-h-[50vh] row-span-4 md:col-start-4 md:col-span-5 md:row-span-full overflow-hidden'>
						<ImageSlider slides={slides} parentWidth={500} />		
					</div>
				</div>
			</Intro>

			{ /* APRESENTAÇÃO */}
			<Section className='relative overflow-hidden text-center' >
				nonono1
			</Section >

			{ /* SERVIÇOS */}
			<Section className='relative overflow-hidden' >
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

					<div className='dui-card h-96 border border-solid'>
						<div className="dui-card-body flex flex-col justify-start p-10 gap-4">
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
							</div>
							<h2 className='dui-card-title'>Serviço 1</h2>
							<div>
								<h3>loren</h3>
							</div>
						</div>
					</div>

				</div>
			</Section >

			{ /* FORNECEDORES */}
			<Section>
				<Suppliers />
			</Section>
		</>
  )
}
