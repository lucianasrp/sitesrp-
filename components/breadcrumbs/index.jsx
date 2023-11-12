'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
	const pathName = usePathname();
	const pathNames = pathName.split('/').filter( path => path );

	return (
		<>
			<div className="text-sm dui-breadcrumbs">
				<ul>
					<li><Link href='/'>home</Link></li> 
					{
						pathNames.map((item, index) => {
							const href = `/${pathNames.slice(0, index + 1).join('/')}`
							let label = item.split('-').join(' ').toLowerCase();

							if ( index + 1 === pathNames.length )
								return( <li key={index}>{label}</li> )
							else
								return( <li key={index}><Link href={href}>{label}</Link></li> )
						})
					}
				</ul>
			</div>
		</>
	)
}