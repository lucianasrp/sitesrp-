export default function Section({ className, children, isFull }) {
	return (
		<>
			<section className={`${className} w-full py-16`}>
				<container className={`w-full ${!isFull && 'max-w-7xl'} mx-auto flex flex-col p-4 gap-8`}>
					{children}
				</container>
			</section>
		</>
	)
}