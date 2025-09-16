import Button from '../Button/Button'

export default function ProductCard({product, handleAddToCart}){
	const formatPrice = (price) => {
		return price.toString().replace('.', ',')
	}

	return (
		<article className="product-card--container">
			<picture className='product-card--picture'>
				<img src={product.image} alt={product.name}/>
			</picture>
			<section className='product-card--content'>
				<h3 className='product-card--name'>{product.name}</h3>
				<p className='product-card--price'>R$ {formatPrice(product.price)}</p>
				<div className='product-card--rating'>
					{[...Array(5)].map((_, index) => 
						<span className='product-card--rating-stars' key={index}>{index < Math.floor(product.rating) ? '★' :'☆' }</span>
					)}
				</div>
			</section>
			{product.tag && <p className='product-card--tag'>{product.tag}</p>}
			<Button variant='solid' onClick={handleAddToCart}>Adicionar ao carrinho</Button>
		</article>
	)
}