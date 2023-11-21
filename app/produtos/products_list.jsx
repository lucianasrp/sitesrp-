"use client";

import Link from "next/link"
import ProductCard from "./product_card"

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

export default function ProductsList({products}) {
	return (
		<>
			<div>
				<div className="dui-btn-group justify-center flex-wrap">
					<button className="dui-btn dui-tab-bordered dui-btn-active">Todos</button>
					{products.map((categoria, index) => <button key={index} className="dui-btn dui-tab-bordered capitalize">{categoria[2]}</button>)}
				</div>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
				{ products.map((item, index) => 
					<>
						<Link className='' key={index} href={`/produtos/${slugify(item[0])}`}>
							<ProductCard img={`/produtos/${item[5]}/photo.webp`}>
								<h3 className='dui-card-title text-base'>{item[0]}</h3>

								<div className=" flex-1 dui-card-actions justify-end">
									<div className="dui-badge dui-badge-primary">{item[1]}</div>
									<div className="dui-badge dui-badge-neutral">{item[2]}</div>
								</div>
							</ProductCard>
						</Link>
					</>
				)}
			</div>
		</>
	)
}