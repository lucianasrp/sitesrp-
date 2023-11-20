import Image from 'next/image'
import styles from './page.module.css'
import Intro from '../components/intro'
import Section from '../components/section'
import OpenStreetMap from '../components/openstreetmap'
import ImageSlider from '../components/imageslider' 
import Socials from '../components/socials'
import Suppliers from '../components/suppliers'
import Card from '../components/card'

export default function Home() {
	const slides = [
		{ img: '/home/slideshow/slide_1.webp', alt:'' },
		{ img: '/home/slideshow/slide_2.webp', alt:'' },
		{ img: '/home/slideshow/slide_3.webp', alt:'' },
		{ img: '/home/slideshow/slide_4.webp', alt:'' },
		{ img: '/home/slideshow/slide_5.webp', alt:'Aplicando Papel de Parede' },
	];

  return (
		<>
			{/* INTRODUÇÃO */}
			<Intro className='relative' img='/background_pattern.webp'>
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
					<Card img='/home/cards/instalacao.jpg'>
						<h2 className='dui-card-title'>Instalação</h2>
						<div>
							<p>Nossa expertise em Instalação de Pisos e Revestimentos abrange uma ampla variedade de opções, desde Pisos Laminados e Pisos de Madeira até Pisos Vinílicos e muito mais. Com mais de 9 anos de experiência no mercado, nossa equipe altamente qualificada assegura a instalação de alta qualidade, proporcionando ambientes duradouros e esteticamente agradáveis.</p>
						</div>
					</Card>

					<Card img='/home/cards/manutencao.jpg'>
						<h2 className='dui-card-title'>Manutenção</h2>
						<div>
							<p>Mantenha seus pisos em perfeitas condições com nossos serviços de Manutenção de Pisos. Oferecemos soluções de limpeza e impermeabilização, incluindo Limpeza de Piso Vinílico, para garantir a longevidade e a beleza de seus pisos. Deixe-nos cuidar da manutenção para que você possa desfrutar de um espaço impecável.</p>
						</div>
					</Card>

					<Card img='/home/cards/venda.jpg'>
						<h2 className='dui-card-title'>Venda</h2>
						<div>
							<p>Explore nossa ampla gama de produtos de alta qualidade para aprimorar seus espaços. Oferecemos desde Pisos Laminados, Pisos de Madeira e Pisos Vinílicos até Lustres, Papel de Parede, Persianas e muito mais. Garantimos a disponibilidade dos melhores produtos e acessórios para atender às suas necessidades de decoração e design.</p>
						</div>
					</Card>
				</div>
			</Section >

			{ /* FORNECEDORES */}
			<Section>
				<Suppliers />
			</Section>
		</>
  )
}
