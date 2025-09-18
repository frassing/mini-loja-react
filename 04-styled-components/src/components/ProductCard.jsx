import styled from "styled-components";
import ButtonStyled from "../components/ButtonStyled"
import Skeleton from "./Skeleton";

const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	max-width: 250px;
	background-color: var(--card-color);
	box-shadow: 0 0 5px var(--card-shadow);
	padding: calc(var(--padding-s)/2);
	border-radius: 3px;
	gap: 4px;
	position: relative;

	&:hover {
		box-shadow: 0 0 12px var(--card-shadow);
	}
`

const ImageContainer = styled.picture`
	width: 100%;
	min-width: 200px;
	min-height: 200px;
`

const CardImage = styled.img`
	width: 100%;
`

const CardTitle = styled.h3`
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	text-align: center;

	&:hover, &:focus {
		display: block;
		overflow: initial;
	}
`

const CardPrice = styled.p`
	font-size: 1.1em;
	font-weight: 600;
	text-align: center;
	margin: calc(var(--margin-s)/4);
	color: var(--fg-color);
`

const CardTag = styled.p`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	color: var(--text-light);
	background-color: var(--tag-bg);
	padding: calc(var(--padding-s)/4) calc(var(--padding-s)/3);
	font-weight: 600;
`

const RatingStar = styled.span`
	font-size: 1.3em;
	color: var(--star-color);
`

export default function ProductCard({product, loading, onAddToCart}) {
	const formatPrice = (p) => {
		return p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
	}

	let btnVariant = ''
	if (product.tag == 'promo') {
		btnVariant = 'solid'
	} else if (product.tag == 'especial' || product.tag == 'novo') {
		btnVariant = 'outline'
	}

	if (loading) {
		return <Skeleton/>
	} else {
		return <Article>
			<ImageContainer>
				<CardImage src={product.image} alt={product.name} loading="lazy"/>
			</ImageContainer>
			<CardTitle>{product.name}</CardTitle>
			<CardPrice>{formatPrice(product.price)}</CardPrice>
			<div aria-label={`Avaliações do produto. ${product.rating} de 5 estrelas`}>
				{[...Array(5)].map((_, i) => <RatingStar key={i} aria-hidden="true">{i < Math.floor(product.rating) ? '★' :'☆' }</RatingStar>)}
			</div>
			{product.tag && <CardTag>{product.tag}</CardTag>}
			<ButtonStyled variant={btnVariant} onAddToCart={onAddToCart}>Adicionar ao carrinho</ButtonStyled>
		</Article>
	}
}