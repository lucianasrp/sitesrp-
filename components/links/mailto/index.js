// <Link href={`tel: ${CONTACT.phone}`}>{CONTACT.phone}</Link>

import Link from "next/link";

import CONTACT from "../../../config/contact";

export default function MailTo({ className, email, children }) {
	email = (email == undefined ? CONTACT.email : email);

	return (
		<>
			<Link className={className} href={`mailto: ${email}`} target='_blank' rel='noreferrer'>{children}</Link>
		</>
	)
}
