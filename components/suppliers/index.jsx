export default function Suppliers() {
	const suppliers = [
		{ img: '/fornecedores/logo_arquitech.png', label: 'Arquitech', href: '#' },
		{ img: '/fornecedores/logo_bauxita.webp', label: 'Bauxita', href: '#' },
		{ img: '/fornecedores/logo_belgotex.svg', label: 'Belgotex', href: '#' },
		{ img: '/fornecedores/logo_daud.png', label: 'Daud', href: '#' },
		{ img: '/fornecedores/logo_dipiso.png', label: 'Dipiso', href: '#' },
		{ img: '/fornecedores/logo_erbus.webp', label: 'Erbus', href: '#' },
		{ img: '/fornecedores/logo_eucafloor.png', label: 'Eucafloor', href: '#' },
		{ img: '/fornecedores/logo_kasfloor.webp', label: 'Kasfloor', href: '#' },
		{ img: '/fornecedores/logo_madebene.png', label: 'Madepene', href: '#' },
		{ img: '/fornecedores/logo_santaluzia.png', label: 'Santaluzia', href: '#' },
		{ img: '/fornecedores/logo_tarkett.svg', label: 'Tarkett', href: '#' },
	];
	
	return(
		<>
			<div className='relative flex flex-wrap gap-4 justify-center items-center'>
				{ suppliers.map((item, index) => <a className='' key={index} href={item.href}><img className='min-h-10 max-h-10 w-auto' src={item.img} alt={item.label}/></a>) }
			</div>
		</>
	)
}