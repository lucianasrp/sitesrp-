export default function Intro({className, children, img}) {
	return(
		<>
			<div className='dui-hero min-h-[90vh]' style={{ backgroundImage: `url("${img}")` }}>
				{children}
			</div>
		</>
	)
}