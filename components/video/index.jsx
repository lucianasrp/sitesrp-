export default function Video({src}) {
	return(
		<>
			<div className='aspect-w-16 aspect-h-9'>
				<iframe src={`https://www.youtube.com/embed/${src}`} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
			</div>
		</>
	)
}