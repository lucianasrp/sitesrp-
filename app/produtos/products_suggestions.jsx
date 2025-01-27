"use client";

import Link from "next/link"
import ProductCard from "./product_card"
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

export default function ProductsSuggestions({products}) {
	const [selected, setSelected] = useState([])
	 
	useEffect(() => {
		const shuffled = products.sort(() => 0.5 - Math.random());
		setSelected(shuffled.slice(0, 4));
	}, [])

	return (
		<>
			{ 
				selected.map((item, index) => 
				<>
					<Link className='' key={index} href={`/produtos/${item[5]}`}>
						<ProductCard img={`/produtos/${item[5]}/thumb.webp`}>
							<h3 className='dui-card-title text-base'>{item[0]}</h3>
	
							<div className=" flex-1 dui-card-actions justify-end">
								<div className="dui-badge dui-badge-primary">{item[1]}</div>
								<div className="dui-badge dui-badge-neutral">{item[2]}</div>
							</div>
						</ProductCard>
					</Link>
				</>
			)}
		</>
	)
}