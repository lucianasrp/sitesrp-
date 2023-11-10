export default function Intro({ className, children, img }) {
	return (
		<>
			<div className={`dui-hero mt-14 min-h-[calc(100vh-56px)] md:mt-0 md:min-h-[calc(100vh-136px)] ${className}`} style={{ backgroundImage: `url("${img}")` }}>
				{children}
			</div>
		</>
	)
}