'use client';
import Image from 'next/image'
import Section from '../section'
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Navbar({ className, src, children, isFull }) {
	const [currentState, setCurrentState] = useState(false);

	function ToggleMenu() {
		const newState = !currentState;
		setCurrentState(newState);
	}

	return (
		<>
			<nav className={`relative w-full p-0 z-[100] ${className}`}>
				<container className={`w-full ${!isFull && 'max-w-7xl'} mx-auto flex justify-between gap-4 p-4`}>
					<Link href='/'>
						<Image
							src={src}
							alt='Home'
							width={64}
							height={64}
							priority
						/>
					</Link>

					<div className='fixed left-0 right-0 top-0 bottom-0 bg-slate-900 transition-all duration-500 ease-in-out md:hidden' onClick={() => { if (currentState) ToggleMenu(); }} style={{ opacity: (currentState ? '0.7' : '0'), pointerEvents: (currentState ? 'auto' : 'none') }}></div>
					<div className='fixed h-screen top-0 bottom-0 p-8 bg-slate-50 flex flex-col gap-4 transition-all duration-500 ease-in-out font-bold md:static md:p-4 md:h-auto md:flex-row' style={{ right: (currentState ? '0%' : '-100%') }}>
						<Link href='/linha_industrial' className='border-solid border-b-2 border-white hover:border-primary'>Linha Industrial</Link>
						<Link href='/linha_agricola' className='border-solid border-b-2 border-white hover:border-primary'>Linha Agrícola</Link>
						<Link href='/transporte_logistica' className='border-solid border-b-2 border-white hover:border-primary'>Transporte e Logística</Link>
						<div className="divider md:divider-horizontal"></div>
						<Link href='/' className='border-solid border-b-2 border-white hover:border-primary'>Voltar</Link>
					</div>
					<div className="flex-none md:hidden">
						<button className="btn btn-square btn-ghost" onClick={ToggleMenu}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
						</button>
					</div>
				</container>
			</nav>
		</>
	)
}