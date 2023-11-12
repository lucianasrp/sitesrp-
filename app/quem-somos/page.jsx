import Breadcrumbs from "../../components/breadcrumbs";
import Section from "../../components/section";
import Suppliers from "../../components/suppliers";

export default function Page() {
	return(
		<>
			{/* HEADER */}
			<Section>
				<h1 className='text-6xl'>QUEM SOMOS</h1>
				<Breadcrumbs />
			</Section>
			
			<Section>
				<div className='flex flex-col md:flex-row gap-8'>
					{/* FOTO DA EQUIPE OU ESCRITÓRIO */}
					<div>
						<img className='w-full max-w-5xl mx-auto' alt='Foto da Equipe' src='/quem-somos/equipe.jpg' />
						<p>aqui temos a foto da equipe ou do escritório</p>
					</div>

					{/* DESCRITIVO */}
					<div className='flex flex-col gap-4'>
						<p>Fundada em 2014, nossa empresa surgiu com a missão de oferecer honestidade, responsabilidade e pontualidade no atendimento aos nossos clientes. Ao longo dos anos, nos especializamos em pisos, revestimentos, acessórios e decorações, tornando-nos referência no mercado.</p>
						<p>Com mais de 9 anos de experiência, construímos uma sólida reputação e contamos com uma estrutura física de primeira linha. Nossos produtos de qualidade incomparável e durabilidade excepcional são projetados para criar ambientes ideais para nossos clientes.</p>
						<p>Na SRP SARTORI REVEST PISOS, nosso maior patrimônio é o cliente. Buscamos entender e atender às suas necessidades, tornando seus sonhos realidade. Estabelecemos parcerias com as melhores marcas, fornecedores e prestadores de serviços, visando sempre a excelência e a satisfação total do cliente.</p>
						<p>Atendendo tanto o mercado residencial quanto o empresarial, contamos com uma equipe altamente qualificada. Ao longo dos anos, já ajudamos um número significativo de clientes a transformar seus espaços.</p>
					</div>
				</div>
			</Section>

			{/* APRESENTAÇÃO DOS SÓCIOS */}
			<Section>
				<h2>Nossa Equipe</h2>
				<div className='grid grid-cols-1 md:grid-cols-4'>

				</div>
				espaço para apresentar a equipe ou sócios da empresa
			</Section>

			{/* ESTATÍSTICAS */}
			<Section>
				espaço para apresentar estatísticas da empresa, como total de serviços prestados, total de clientes e etc
			</Section>

			{ /* FORNECEDORES */}
			<Section Section className='relative' >
				<h2>Nossos Parceiros</h2>
				<Suppliers />
			</Section >
		</>
	)
}