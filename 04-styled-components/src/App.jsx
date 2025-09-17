import styled, { createGlobalStyle } from 'styled-components'
import FooterStyled from "./components/FooterStyled"
import NavBarStyled from './components/NavBarStyled'
import PRODUCTS from './data/products.json'
import ProductCard from './components/ProductCard'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --fg-color: #071a85;
    --bg-color: #f1f1f1;
    --tag-bg: #202020;
    --card-color: #eeeded;
    --card-shadow: #b6b6b688;
    --text-dark: #0c0c0c;
    --text-light: #fff;

    --padding-s: 12px;
    --margin-s: 12px;
  }

  body {
    background-color: var(--bg-color);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
`
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: var(--margin-s) auto;
  justify-items: center;
  padding: var(--padding-s);

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
	}

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
	}
`

const H2 = styled.h2`
  text-align: center;
  color: var(--text-dark);
  margin: var(--margin-s) auto;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBarStyled />
      <H2>Produtos</H2>
      <ProductsGrid>
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
      </ProductsGrid>
      <FooterStyled />
    </>
  )
}

export default App
