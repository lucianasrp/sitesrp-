import Image from 'next/image'
import Socials from '../socials'
import FooterDialoga from '../footer-dialoga'

import COMPANY from '../../config/company'
import CONTACT from '../../config/contact'

export default function Footer({ className, src, children }) {
	return (
		<>
			<footer className='flex flex-col gap-4 p-10 bg-neutral text-neutral-content'>
				<div className='dui-footer'>
					<div className='flex gap-4'>
						<img
							src={src}
							alt='Logo'
							width={96}
							height={96}
						/>
						<div>
							<span className='dui-footer-title'>{COMPANY.name}</span>

							{/* desenha endereço */}
							<div className='flex gap-2'>
								<svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' className='fill-current' viewBox='0 0 384 512'><path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' /></svg>
								<p>{COMPANY.location.address}<br />{COMPANY.location.neighborhood} - {COMPANY.location.city}, {COMPANY.location.state}</p>
								<p>{COMPANY.worktime}</p>
							</div>

							{/* desenha numeros de telefone */}
							{CONTACT.phone &&
								<div className='flex gap-2'>
									<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' className='fill-current' viewBox='0 0 512 512'><path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' /></svg>
									<p>{CONTACT.phone}</p>
								</div>
							}

							{/* desenha CNPJ */}
							{COMPANY.cnpj &&
								<p>CNPJ {COMPANY.cnpj}</p>
							}
						</div>
					</div>
					<div>
						<span className='dui-footer-title'>Social</span>
						<Socials />
					</div>
				</div>
				<FooterDialoga />
			</footer>
		</>
	)
}