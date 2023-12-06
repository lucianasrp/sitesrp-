// <Link href={`tel: ${CONTACT.phone}`}>{CONTACT.phone}</Link>

import Link from "next/link";

import CONTACT from "../../../config/contact";

export default function Tel({ className, number, children }) {
	number = (number == undefined ? CONTACT.phone : number);

	return (
		<>
			<Link className={className} href={`tel: ${number}`} target='_blank' rel='noreferrer'>{children}</Link>
		</>
	)
}
