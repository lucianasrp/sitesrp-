import Link from "next/link";
import Tel from "../../components/links/tel";
import Whatsapp from "../../components/links/whatsapp";
import MailTo from "../../components/links/mailto";

import Title from "../../components/title";
import Section from "../../components/section";
import Socials from "../../components/socials";

import COMPANY from "../../config/company";
import CONTACT from "../../config/contact";

export const metadata = {
  title: 'Contato : SRP Sartori Revert Pisos',
  description: 'Generated by create next app',
}

export default function Page() {
	return(
		<>
			{/* TITLE */}
			<Title>CONTATO</Title>
			<Section>
				<div className='flex flex-col md:grid md:grid-cols-5 gap-8'>
					<div className='flex flex-col gap-4 col-span-2'>
						<h3>Adoramos explorar novos projetos e desafios criativos!</h3>
						<h3>Por favor, compartilhe conosco o máximo de detalhes possível para que possamos enriquecer nosso primeiro encontro.</h3>
						<h3>Estamos entusiasmados para descobrir mais sobre o seu projeto e como podemos transformar a sua visão em uma realidade encantadora!</h3>
						<Socials />
					</div>
					<div className='flex flex-col col-span-3'>
						<div className='md:grid md:grid-cols-3 md:text-xl border-solid border-y p-2'>
							<p className='font-normal'>e-mail</p>
							<p className='col-span-2 font-bold'><MailTo>{CONTACT.email}</MailTo></p>
						</div>
						<div className='md:grid md:grid-cols-3 md:text-xl border-solid border-y p-2'>
							<p className='font-normal'>telefone</p>
							<p className='col-span-2 font-bold'><Tel>{CONTACT.phone}</Tel></p>
						</div>
						<div className='md:grid md:grid-cols-3 md:text-xl border-solid border-y p-2'>
							<p className='font-normal'>whatsapp</p>
							<p className='col-span-2 font-bold'><Whatsapp>{CONTACT.whatsapp.label}</Whatsapp></p>
						</div>
						<div className='md:grid md:grid-cols-3 md:text-xl border-solid border-y p-2'>
							<p className='font-normal'>endereço</p>
							<p className='col-span-2 font-bold'>{COMPANY.location.address}<br />{COMPANY.location.neighborhood} - {COMPANY.location.city}, {COMPANY.location.state}</p>
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}