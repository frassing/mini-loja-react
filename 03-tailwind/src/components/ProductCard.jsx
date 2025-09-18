import Button from './Button'

const ProductCard = ({product}) => {
	const formatPrice = (p) => {
		return p.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
	}

	let btnVariant = ''
	if (product.tag == 'novo' || product.tag == 'especial') {
		btnVariant = 'outline'
	} else if (product.tag == 'promo') {
		btnVariant = 'solid'
	}

	return <article className='max-w-64 p-1.5 mt-8.5 flex flex-col gap-2 items-center justify-around relative rounded-sm bg-neutral-50 shadow shadow-gray-300'>
		<picture className='w-full min-w-52 min-h-52'>
			<img src={product.image} alt={product.name} className='w-full'/>
		</picture>
		<h3 className='text-center mb-1 font-bold text-xl text-ellipsis line-clamp-2 hover:line-clamp-none'>{product.name}</h3>
		<p className='font-medium text-lg'>{formatPrice(product.price)}</p>
		<div aria-label={`Avaliações: ${product.rating} de 5 estrelas`}>
			{[...Array(5)].map((_, i) => <span key={i} className='text-amber-400 text-xl' aria-hidden='true'>{i < Math.round(product.rating) ? '★' :'☆'}</span>)}
		</div>
		<p className='text-yellow-500 text-sm uppercase font-bold absolute -top-7 left-0 p-1 rounded-sm'>{product.tag && product.tag+`!`}</p>
		<Button variant={btnVariant}>Adicionar ao carrinho</Button>
	</article>
}

export default ProductCard