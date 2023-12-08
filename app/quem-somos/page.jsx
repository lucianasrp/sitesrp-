
import Title from "../../components/title";
import Section from "../../components/section";
import Suppliers from "../../components/suppliers";

export const metadata = {
  title: 'Quem Somos : SRP Sartori Revert Pisos',
}

export default function Page() {
	return(
		<>
			{/* TITLE */}
			<Title>QUEM SOMOS</Title>
						
			<Section>
				<div className='flex flex-col md:flex-row gap-8'>
					{/* FOTO DA EQUIPE OU ESCRITÓRIO 
					<div>
						<img className='w-full max-w-5xl mx-auto' alt='Foto da Equipe' src='/quem-somos/equipe.jpg' />
						<p>aqui temos a foto da equipe ou do escritório</p>
					</div>*/}

					{/* DESCRITIVO */}
					<div className='flex flex-col gap-4'>
						<p>Fundada em 2014, nossa empresa surgiu com a missão de oferecer honestidade, responsabilidade e pontualidade no atendimento aos nossos clientes. Ao longo dos anos, nos especializamos em pisos, revestimentos, acessórios e decorações, tornando-nos referência no mercado.</p>
						<p>Com mais de 9 anos de experiência, construímos uma sólida reputação e contamos com uma estrutura física de primeira linha. Nossos produtos de qualidade incomparável e durabilidade excepcional são projetados para criar ambientes ideais para nossos clientes.</p>
						<p>Na <strong>SRP SARTORI REVEST PISOS</strong>, nosso maior patrimônio é o cliente. Buscamos entender e atender às suas necessidades, tornando seus sonhos realidade. Estabelecemos parcerias com as melhores marcas, fornecedores e prestadores de serviços, visando sempre a excelência e a satisfação total do cliente.</p>
						<p>Atendendo tanto o mercado residencial quanto o empresarial, contamos com uma equipe altamente qualificada. Ao longo dos anos, já ajudamos um número significativo de clientes a transformar seus espaços.</p>
					</div>
				</div>
			</Section>

			{/* NOSSOS TRABALHOS */}
			<Section>
				<h2>Nossos Trabalhos</h2>
				<p>Explore nossa galeria de projetos para ter uma visão mais aprofundada de como nossos serviços podem transformar diferentes ambientes. Cada imagem conta uma história de excelência, mostrando o antes e o depois de nossas instalações e revitalizações.</p>
				<p>Seja para um ambiente residencial, comercial, hospitalar ou industrial, a <strong>SRP SARTORI REVEST PISOS</strong> está comprometida em oferecer soluções personalizadas que atendam às suas necessidades específicas. De pisos inovadores a revestimentos de parede elegantes, estamos aqui para criar ambientes que refletem seu estilo e funcionalidade desejada.</p>

				<div>
				 	<h3>Piso Laminado Eucafloor - Nobile Resort Olímpia</h3>
				 	<div className='columns-2 md:columns-4'>
					 	<img src='/trabalhos/foto1a.jpeg' />
						<img src='/trabalhos/foto1b.jpeg' />
				 	</div>
				</div>

				<div>
				 	<h3>Piso Vinilico Tarkett - SESI Rio preto</h3>
				 	<div className='columns-2 md:columns-4'>
				 		<img src='/trabalhos/foto2a.jpeg' />
						<img src='/trabalhos/foto2b.jpeg' />
				 	</div>
				</div>
				
				<div>
				 	<h3>Piso Laminado Eucafloor - Rosa Chock</h3>
				 	<div className='columns-2 md:columns-4'>
				 		<img src='/trabalhos/foto3a.jpeg' />
						<img src='/trabalhos/foto3b.jpeg' />
				 	</div>
				</div>

				<div>
				 	<h3>Piso Vinilico Nelgotex - BR Mania Posto Pérola</h3>
				 	<div className='columns-2 md:columns-4'>
				 		<img src='/trabalhos/foto6a.jpeg' />
				 	</div>
				</div>

				<div>
				 	<h3>Piso Vinilico Durafloor - Academia W Fit</h3>
				 	<div className='columns-2 md:columns-4'>
						<img src='/trabalhos/foto8a.jpeg' />
				 	</div>	
				</div>

				<div>
					<h3>Outros Trabalhos</h3>
					<div className='columns-2 md:columns-4'>
						<img src='/trabalhos/foto4a.jpeg' />
						<img src='/trabalhos/foto5a.jpeg' />
						<img src='/trabalhos/foto7a.jpeg' />
						<img src='/trabalhos/foto9a.jpeg' />
					</div>
				</div>
			</Section>

			{ /* FORNECEDORES */}
			<Section Section className='relative' >
				<h2>Nossos Parceiros</h2>
				<Suppliers />
			</Section >
		</>
	)
}