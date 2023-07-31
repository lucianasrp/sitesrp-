'use client';
import Image from 'next/image'
import Section from '../section'
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Navbar({ className, src, children }) {
	const [currentState, setCurrentState] = useState(false);

	function ToggleMenu() {
		const newState = !currentState;
		setCurrentState(newState);
	}

	return (
		<>
			<nav className={`relative w-full p-0 z-[100] bg-white ${className}`}>
				<container className={`w-full mx-auto grid grid-cols-8`}>
					<Link className='col-span-2 bg-primary p-2' href='/'>
						<Image
							className='ml-auto'
							src={src}
							alt='Home'
							width={96}
							height={96}
							priority
						/>
					</Link>

					<div className='col-span-5 
													flex flex-row items-center justify-end gap-4 p-2
													transition-all duration-500 ease-in-out font-bold'>
						<Link href='#' className='border-solid border-b-2 border-white hover:border-primary'>Menu 1</Link>
						<Link href='#' className='border-solid border-b-2 border-white hover:border-primary'>Menu 2</Link>
						<Link href='#' className='border-solid border-b-2 border-white hover:border-primary'>Menu 3</Link>
						<div className="divider md:divider-horizontal"></div>
						<Link href='#' className='border-solid border-b-2 border-white hover:border-primary'>Social</Link>
					</div>
				</container>
			</nav>
		</>
	)
}