export default function Card({ img, children }) {
	return (
		<>
			<div className='dui-card min-h-full bg-base-100 border border-solid'>
				<figure><img src={img} /></figure>
				<div className='dui-card-body p-4'>
					{children}
				</div>
			</div>
		</>
	)
}