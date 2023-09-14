export default function Intro({ className, children, img }) {
	return (
		<>
			<div className={`dui-hero md:min-h-screen ${className}`} style={{ backgroundImage: `url("${img}")` }}>
				{children}
			</div>
		</>
	)
}