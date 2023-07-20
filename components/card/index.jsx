export default function Card({ img, children }) {
	return (
		<>
			<div className='dui-card min-h-full bg-base-100 shadow-md'>
				<figure><img src={img} /></figure>
				<div className='dui-card-body'>
					{children}
				</div>
			</div>
		</>
	)
}