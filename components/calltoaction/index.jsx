export default function CallToAction({ background, img, url, children }) {
	if (img == null) img = '/calltoaction_guy.png';

	return (
		<>
			<div className='dui-hero min-h-[512px] bg-base-200 bg-fixed' style={{ backgroundImage: `url('${background}')` }}>
				<div className='dui-hero-overlay bg-opacity-80'></div>
				<div className='dui-hero-content flex-row md:pb-0'>
					<img src={img} className='hidden md:block max-w-sm' />
					<div className='dui-hero-content text-center text-neutral-content'>
						<div className='max-w-md'>
							{children}
							<a href={url} className='dui-btn dui-btn-primary'>Fale Conosco!</a>
						</div>
					</div>
				</div>
			</div>


			{/*
			<div className='dui-hero min-h-[512px] bg-base-200 bg-fixed' style={{ backgroundImage: `url('${img}')` }}>
				<div className='dui-hero-overlay bg-opacity-60'></div>

				<div className='hero-content flex-col lg:flex-row'>
					<img src='/calltoaction_guy.png' className='max-w-sm rounded-lg shadow-2xl' />
					<div className='dui-hero-content text-center text-neutral-content'>
						<div className='max-w-md'>
							{children}
							<button className='dui-btn dui-btn-primary'>Get Started</button>
						</div>
					</div>
				</div>
			</div>
	*/}
		</>
	)
}