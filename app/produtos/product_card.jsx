export default function ProductCard({children, img}) {
	return (
		<>
			<div className='dui-card min-h-full bg-base-100 border border-solid'>
				<figure className='max-h-32 overflow-hidden'><img className='min-h-[8rem]' src={img} /></figure>
				<div className='flex dui-card-body p-4'>
					{children}
				</div>
			</div>
		</>
	)
}