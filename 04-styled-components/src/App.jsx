import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import FooterStyled from "./components/FooterStyled"
import NavBarStyled from './components/NavBarStyled'
import PRODUCTS from './data/products.json'
import ProductCard from './components/ProductCard'
import { useEffect, useState } from 'react'

const theme = {
  'dark': {
    bgColor: '#202020',
    color: '#f2f2f2',
    shadow: 'rgba(24, 24, 24, 0.753)',
    accent:'#06135f',
    star: '#c7a406',
    tag: '#06135f',
    card: '#e7e7e7',
    icon: '🌑',
  },
  'light': {
    bgColor: '#e9e7e7',
    color: '#0c0c0c',
    shadow: '#b6b6b688',
    accent: '#071a85',
    star: '#e4bc09',
    tag: '#202020',
    card: '#eeeded',
    icon: '☀️'
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --fg-color: ${props => props.theme.accent};
    --bg-color: ${props => props.theme.bgColor};
    --tag-bg: ${props => props.theme.tag};
    --card-color: ${props => props.theme.card};
    --card-shadow: ${props => props.theme.shadow};
    --star-color: ${props => props.theme.star};
    --text-primary: ${props => props.theme.color};
    --text-light: #fff;
    --skeleton-color: #b6b6b688;
    --padding-s: 12px;
    --margin-s: 12px;
  }

  body {
    background-color: var(--bg-color);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    transition: background 250ms;
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
  color: var(--text-primary);
  margin: var(--margin-s) auto;
`

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ cartCount, setCartCount ] = useState(0)
  const getThemePreferences = () => {
    let saved = localStorage.getItem('theme')
    if (saved == null || saved == 'light') {
      return theme.light
    } else {
      return theme.dark
    }
  } 
  const [ currentTheme, setCurrentTheme ] = useState(() => getThemePreferences)

  const handleToggleTheme = () => {
    const newTheme = currentTheme == theme.dark ? theme.light : theme.dark
    localStorage.setItem('theme', newTheme == theme.dark ? 'dark' : 'light')
    setCurrentTheme(newTheme)
  }

  const handleAddToCart = () => {
    const updatedCount = cartCount + 1
    setCartCount(updatedCount)
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBarStyled onChangeTheme={handleToggleTheme} cartItems={cartCount}/>
      <H2>Produtos</H2>
      <ProductsGrid>
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} loading={loading} onAddToCart={handleAddToCart}/>)}
      </ProductsGrid>
      <FooterStyled />
    </ThemeProvider>
  )
}

export default App
