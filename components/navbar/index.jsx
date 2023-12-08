'use client';
import Link from 'next/link';
import Tel from '../links/tel';
import Whatsapp from '../links/whatsapp';

import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, createRef } from "react";

import Section from '../section';
import Socials from '../socials';
import CONTACT from '../../config/contact'

const navmenu = [
	{ label: 'Produtos', href: '/produtos' },
	{ label: 'Serviços', href: '/servicos' },
	//{ label: 'Obras Realizadas', href: '/obras-realizadas' },
	{ label: 'Quem Somos', href: '/quem-somos' },
	{ label: 'Contato', href: '/contato' },
];

export default function Navbar({ className, src, children }) {
  const pathName = usePathname();
	const pathNames = pathName.split('/').filter( path => path );
	
	const toggleButtonRef = createRef(null);

	useEffect(() => {
    setCurrentState(false);
		toggleButtonRef.current.checked = false;
  }, [pathName]);
	
	const [currentState, setCurrentState] = useState(false);
	function ToggleMenu() {
		const newState = !currentState;
		//toggleButtonRef.checked = newState;
		setCurrentState(newState);
	}

	return (
		<>
			<nav className={`fixed md:relative w-full p-0 z-[100] bg-base-100 ${className}`}>
				<div className={`w-full mx-auto grid grid-cols-5 md:grid-cols-8`}>
					<Link className='col-span-2 bg-primary p-2 lg:p-5' href='/'>
						<img className='ml-auto h-10 lg:h-24' width='auto' height='auto' src={src} />
					</Link>

					<div className='col-span-5 
													hidden md:flex flex-col items-end justify-end gap-4 px-2
													transition-all duration-500 ease-in-out font-bold z-50'>
						<div className='flex gap-6'>
							{/* telefone */}
							<Tel>
								<div className='flex gap-2 items-center'>
									<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
									<h3>{ CONTACT.phone }</h3>
								</div>
							</Tel>

							{/* whatsapp */}
							<Whatsapp>
								<div className='flex gap-2 items-center'>
									<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
									<h3>Whatsapp</h3>
								</div>
							</Whatsapp>
						</div>
						<div className='flex'>
							{ 
								navmenu.map((item, index) => {
									let isSelected = false;
									if(pathNames.length > 0)
										isSelected = (`/${pathNames[0]}` === item.href);

									return (
										<Link key={index} href={item.href} title={item.label} className={`border-solid border-b-2 border-base-100 hover:border-primary px-8 py-4 ${(isSelected ? 'bg-primary border-primary' : '')}`}>{item.label}</Link>
									)
								}) 
							}
						</div>
					</div>
					<div className='col-span-3 
													flex md:hidden flex-row items-center justify-end gap-4 p-2
													transition-all duration-500 ease-in-out font-bold'>
						<label className="dui-btn dui-btn-circle dui-btn-ghost dui-swap dui-swap-rotate">
							{/* this hidden checkbox controls the state */}
							<input type="checkbox" ref={toggleButtonRef} onChange={ToggleMenu} />
							{/* hamburger icon */}
							<svg className="dui-swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>								
							{/* close icon */}
							<svg className="dui-swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
						</label>
					</div>
				</div>
			</nav>
			<div className='fixed flex md:hidden flex-col items-center justify-center w-full h-full z-40 gap-6 backdrop-blur-md bg-white/30 transition-all duration-500' style={{top: (currentState ? '0%' : '-100%')}}>
				<div className='flex flex-col items-center max-h-[60vh] overflow-y-auto w-full text-2xl font-bold gap-4'>
							{ 
								navmenu.map((item, index) => {
									let isSelected = false;
									if(pathNames.length > 0)
										isSelected = (`/${pathNames[0]}` === item.href);

									return (
										<Link key={index} href={item.href} title={item.label} className={`border-solid border-b-2 border-base-100 hover:border-primary ${(isSelected ? 'bg-primary border-primary rounded-md px-4' : '')}`}>{item.label}</Link> 
									)
								}) 
							}
				</div>
				<div>
					<Socials />
				</div>
			</div>
		</>
	)
}