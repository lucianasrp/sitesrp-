import Image from 'next/image'
import styles from './page.module.css'
import Intro from '../components/intro'
import Section from '../components/section'
import OpenStreetMap from '../components/openstreetmap'
import ImageSlider from '../components/imageslider' 

export default function Home() {
	const slides = [
		{ img: '/header_1.jpg' },
		{ img: '/header_2.jpg' },
		{ img: '/header_3.jpg' },
		{ img: '/header_4.jpg' },
		{ img: '/header_5.jpg' }
	];

  return (
		<>
			{/* INTRODUÇÃO */}
			<Intro className='relative' img='home/hero-background.jpg'>
				<div className='grid grid-rows-6 grid-rows-7 md:grid-rows-5 md:grid-cols-7 w-full h-full'>
					<div className='flex flex-col gap-4 justify-end row-start-1 row-span-2 md:row-start-3 md:col-span-4 md:row-span-2 p-4 text-center md:text-right'>
						<h1 className='text-6xl'>Sistema de Telefonia IP Pegasus PABX</h1>
						<h2 className='text-xl'>Transforme o atendimento da sua empresa com a melhor tecnologia!</h2>
					</div>

					<div className='flex flex-col justify-center row-start-7 row-span-1 bg-base-100 md:row-start-5 md:col-span-4 md:row-span-1 p-4 text-xl text-center'>
						<h2 className=''>Transforme o atendimento da sua empresa com a melhor tecnologia!</h2>
					</div>

					<div className='row-start-3 row-span-4 md:col-start-5 md:col-span-3 md:row-span-full overflow-hidden'>
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

			{ /* FORNECEDORES */}
			<Section Section className='relative bg-primary overflow-hidden text-center' >
				nonono3
			</Section >

			{/* CALL TO ACTION */}

			{/* MAPA */}
			<div className='gmap_canvas dui-hero min-h-[384px]'>
				<OpenStreetMap lat={-22.345084517418233} lon={-47.1692419052124} zoom={19} />
			</div>
		</>
  )
}
