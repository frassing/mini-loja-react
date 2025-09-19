const Skeleton = ({hasTag}) => {
	return <article className='max-w-64 p-1.5 mt-8.5 flex flex-col gap-2 items-center justify-around relative rounded-sm shadow shadow-gray-300 bg-neutral-100 dark:shadow-zinc-800'>
	<div className='min-w-54 aspect-square w-full bg-neutral-300'></div>
	<div className='bg-neutral-300 w-10/12 h-7'></div>
	<div className='mb-1 bg-neutral-300 w-10/12 h-7'></div>
	<div className='bg-neutral-300 w-6/12 h-5 m-1.5'></div>
	<div className="flex gap-1 m-1.5">
		{[...Array(5)].map((_, i) => <div key={i} className='bg-neutral-300 w-4 h-4'></div>)}
	</div>
	{hasTag && <div className='bg-neutral-300 w-14 h-7 absolute -top-7 left-0 p-1 rounded-sm'></div>}
	<div className="bg-neutral-300 h-9 w-9/12"></div>
</article>
}

export default Skeleton