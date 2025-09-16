export default function Skeleton() {
	return <div className="skeleton--container">
		<div className='skeleton--square'></div>
		<div className='skeleton--line'></div>
		<div className='skeleton--line'></div>
		<div>
			<div className='skeleton--line'></div>
			<div>
				{[...Array(5)].map((_, index) =>
					<span className='skeleton--sm-square' key={index}></span>
				)}
			</div>
		</div>
		<div className="skeleton--retangle"></div>
	</div>
}