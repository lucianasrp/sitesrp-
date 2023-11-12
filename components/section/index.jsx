export default function Section({ className, children, isFull }) {
	return (
		<>
			<section className={`${className} w-full py-16`}>
				<div className={`container w-full ${!isFull && 'max-w-7xl'} mx-auto flex flex-col p-4 gap-4`}>
					{children}
				</div>
			</section>
		</>
	)
}