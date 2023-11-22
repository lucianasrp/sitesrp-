'use client';

import Link from 'next/link'
import ProductCard from './product_card'
import { useState, useEffect } from 'react'

function slugify(str) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

export default function ProductsList({products, tags}) {
	const [selected, setSelected] = useState(-1);

	return (
		<>
			<div>
				{selected}
			</div>
			{/* TAGS */}
			<div>
				<div className='dui-tabs dui-tabs-boxed'>
					<a className={`dui-tab ${selected == -1 ? 'dui-tab-active' : ''}`} onClick={()=>setSelected(-1)}>Todos</a> 
					{tags.map((tag, index) => <a key={index} className={`dui-tab ${selected === tag ? 'dui-tab-active' : ''} capitalize`} onClick={()=>setSelected(tag)}>{tag}</a>)}
				</div>
			</div>

			{/* PRODUTOS */}
			<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
				{ products.map((item, index) => 
					<>
						<Link className={selected == -1 || selected === item[2] ? '' : `hidden`} key={index} href={`/produtos/${slugify(item[0])}`}>
							<ProductCard img={`/produtos/${item[5]}/photo.webp`}>
								<h3 className='dui-card-title text-base'>{item[0]}</h3>

								<div className='flex-1 dui-card-actions justify-end'>
									<div className='dui-badge dui-badge-primary'>{item[1]}</div>
									<div className='dui-badge dui-badge-neutral'>{item[2]}</div>
								</div>
							</ProductCard>
						</Link>
					</>
				)}
			</div>
		</>
	)
}