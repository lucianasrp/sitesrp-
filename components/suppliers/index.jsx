export default function Suppliers() {
	const suppliers = [
		{ img: '/fornecedores/logo_arquitech.png', label: 'Arquitech', href: '#' },
		{ img: '/fornecedores/logo_bauxita.webp', label: 'Bauxita', href: '#' },
		{ img: '/fornecedores/logo_belgotex.svg', label: 'Belgotex', href: '#' },
	];
	
	return(
		<>
			<div className='relative flex gap-4 justify-center items-center'>
				{ suppliers.map((item, index) => <a className='' key={index} href={item.href}><img className='min-h-10 max-h-10 w-auto' src={item.img} alt={item.label}/></a>) }
			</div>
		</>
	)
}