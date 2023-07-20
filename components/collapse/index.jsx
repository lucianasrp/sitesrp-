export default function Collapse ({title, children}) {
	return (
		<>
			<div className="dui-collapse dui-collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type='checkbox' /> 
				<div className="dui-collapse-title text-xl font-medium">
					{title}
				</div>
				<div className="dui-collapse-content"> 
					{children}
				</div>
			</div>
		</>
	)
}