'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

export default function Breadcrumbs({ background, img, url, children }) {
  const pathName = usePathname();
	const pathArray = pathName.split('/');

	return (
		<>
			{/*<div className="text-sm dui-breadcrumbs">
				<ul>
					<li><a>Home</a></li> 
					<li><a>Documents</a></li> 
					<li>Add Document</li>
				</ul>
			</div>*/}
		</>
	)
}