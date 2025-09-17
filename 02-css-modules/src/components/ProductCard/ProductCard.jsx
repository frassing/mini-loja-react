import Button from '../Button/Button.jsx'
import Skeleton from '../Skeleton/Skeleton.jsx'
import styles from './ProductCard.module.css'

function ProductCard({product, loading, onAddToCart}) {
	const formatPrice = (p) => {
		return p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
	}

	let btnVariant = '' 
	if (product.tag == 'promo') {
		btnVariant = 'solid'
	} else if (product.tag == 'especial' || product.tag == 'popular') {
		btnVariant = 'outline'
	}

	if (loading) {
		return <Skeleton/>
	} else {
		return (
			<article className={styles.cardContainer}>
				<picture>
					<img src={product.image_path} alt={product.title} loading='lazy' className={styles.cardImg}/>
				</picture>
				<h3>{product.title}</h3>
				<p className={styles.description}>{product.description}</p>
				<p className={styles.price}>{formatPrice(product.price)}</p>

				<div className={styles.rating}>
					{[...Array(5)].map((_, idx) => <span key={idx} aria-hidden="true">{idx < Math.round(product.rating) ? '★' :'☆'}</span>)}
					{product.rating > 0 && <span className={styles.ratingValue} aria-label='Avaliação do produto de 1 a 5'>{product.rating}</span>}
				</div>

				{product.tag && <p className={styles.tag}>{product.tag}</p>}
				<Button variant={btnVariant} onClick={onAddToCart}>Adicionar ao carrinho</Button>
			</article>
		)
	}
}

export default ProductCard