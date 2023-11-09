import Image from 'next/image'
import styles from './page.module.css'
import Intro from '../components/intro'
import Section from '../components/section'
import OpenStreetMap from '../components/openstreetmap'

export default function Home() {
  return (
		<>
			{/* INTRODUÇÃO */}
			<Intro className='relative' img='home/hero-background.jpg'>
				{/*
				<div className='grid md:grid-cols-7 p-4 pt-40 md:pt-4 gap-6 w-full max-w-7xl'>
					<div className='flex self-end flex-col md:col-span-3 text-white'>
						<h1 className='text-6xl text-center md:text-left'>Sistema de Telefonia IP Pegasus PABX</h1>
						<h2 className='text-xl text-center md:text-left'>Transforme o atendimento da sua empresa com a melhor tecnologia!</h2>
					</div>
					<div className='md:col-span-4'>
						<img className='w-full' src='home/hero-photo.png' />
					</div>
				</div>
				*/}
			</Intro>

			{ /* APRESENTAÇÃO */}
			<Section Section className='relative bg-primary overflow-hidden text-center' >
			</Section >

			{ /* SERVIÇOS */}
			<Section Section className='relative bg-primary overflow-hidden text-center' >
			</Section >

			{ /* FORNECEDORES */}
			<Section Section className='relative bg-primary overflow-hidden text-center' >
			</Section >

			{/* CALL TO ACTION */}

			{/* MAPA */}
			<div className='gmap_canvas dui-hero min-h-[384px]'>
				<OpenStreetMap lat={-22.345084517418233} lon={-47.1692419052124} zoom={19} />
			</div>
		</>
  )
}
