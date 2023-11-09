'use client';
import Section from '../section'
import Socials from '../socials';
import Image from 'next/image'
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
			<nav className={`fixed w-full p-0 z-[100] bg-base-100 ${className}`}>
				<container className={`w-full mx-auto grid grid-cols-5 md:grid-cols-8`}>
					<Link className='col-span-2 bg-primary p-2 lg:p-5' href='/'>
						<img
							className='ml-auto h-10 lg:h-24'
							src={src}
						/>
					</Link>

					<div className='col-span-5 
													hidden md:flex flex-col items-end justify-end gap-4 px-2
													transition-all duration-500 ease-in-out font-bold z-50'>
						<Socials className='hidden lg:flex' />
						<div className='flex'>
							<Link href='#' className='border-solid border-b-2 border-base-100 hover:border-primary px-8 py-4'>Menu 1</Link>
							<Link href='#' className='border-solid border-b-2 border-base-100 hover:border-primary px-8 py-4'>Menu 2</Link>
							<Link href='#' className='border-solid border-b-2 border-base-100 hover:border-primary px-8 py-4'>Menu 3</Link>
						</div>
					</div>
					<div className='col-span-3 
													flex md:hidden flex-row items-center justify-end gap-4 p-2
													transition-all duration-500 ease-in-out font-bold'>
						<div className='flex w-8 h-8 items-center justify-center cursor-pointer' onClick={ToggleMenu}>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
						</div>
					</div>
				</container>
			</nav>
			<div className='fixed flex flex-col items-center justify-center w-full h-full z-40 gap-6 backdrop-blur-md bg-white/30 transition-all duration-500' style={{top: (currentState ? '0%' : '-100%')}}>
				<div className='flex flex-col items-center max-h-[60vh] overflow-y-auto w-full text-2xl font-bold gap-4'>
					<Link href='#' className='border-solid border-b-2 border-base-100 hover:border-primary'>Menu 1</Link>
					<Link href='#' className='border-solid border-b-2 border-base-100 hover:border-primary'>Menu 2</Link>
					<Link href='#' className='border-solid border-b-2 border-base-100 hover:border-primary'>Menu 3</Link>
				</div>
				<div>
					<Socials />
				</div>
			</div>
		</>
	)
}