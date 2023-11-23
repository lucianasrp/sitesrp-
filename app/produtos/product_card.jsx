import Image from "next/image";

export default function ProductCard({children, img}) {
	return (
		<>
			<div className='dui-card min-h-full bg-base-100 border border-solid'>
				<figure className='max-h-32 overflow-hidden'><Image className='min-h-[8rem]' src={img} width={512} height={512} loading="lazy" /></figure>
				<div className='flex dui-card-body p-4'>
					{children}
				</div>
			</div>
		</>
	)
}