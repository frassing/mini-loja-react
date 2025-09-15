import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ProductCard from './components/ProductCard/ProductCard'
import productsList from './data/products.json'

function App() {
  const storedTheme = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(() => storedTheme ?? 'light')
  const [cartCount, setCartCount] = useState(0)

  const onChangeTheme = () => {
    if (theme == 'light') {
      localStorage.setItem('theme', JSON.stringify('dark'))
      setTheme('dark')
    } else {
      localStorage.setItem('theme', JSON.stringify('light'))
      setTheme('light')
    }
  }

  const onAddToCart = () => {
    let updatedCount = cartCount + 1
    setCartCount(updatedCount)
  }

  return (
    <div className='app-container' data-theme={theme}>
      <NavBar theme={theme} handleChangeTheme={onChangeTheme} cartCount={cartCount}/>
      <main>
        <h2>Produtos</h2>
        <div className='products-grid'>
          {productsList.map(p => <ProductCard key={p.id} product={p} handleAddToCart={onAddToCart} />)}
        </div>
      </main>
    </div>
  )
}

export default App
