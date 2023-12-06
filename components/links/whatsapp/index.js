// <Link href={`tel: ${CONTACT.phone}`}>{CONTACT.phone}</Link>

import Link from "next/link";

import CONTACT from "../../../config/contact";

export default function Whatsapp({ className, number, text, children }) {
	number = (number == undefined ? CONTACT.whatsapp.number : number);
	text = (text == undefined ? CONTACT.whatsapp.message : text);

	return (
		<>
			<Link className={className} href={(text ? `https://wa.me/${number}?text=${encodeURI(text)}` : `https://wa.me/${number}`)} target='_blank' rel='noreferrer'>
				{children}
			</Link>
		</>
	)
}
