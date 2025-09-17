import { useEffect, useState } from "react"
import styles from './App.module.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {products} from "./data/products.js"
import ProductCard from "./components/ProductCard/ProductCard.jsx"

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ cartItems, setCartItems ] = useState(0)
  const themeStored = JSON.parse(localStorage.getItem('theme'))
  const [ isDark, setIsDark ] = useState(themeStored == 'light' || themeStored == null ? false : true)

  const handleAddToCart = () => {
    const updatedCount = cartItems + 1
    setCartItems(updatedCount)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', JSON.stringify(isDark ? 'dark' : 'light'))
  }, [isDark])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <NavBar cartCount={cartItems} isDark={isDark} onChange={() => setIsDark(!isDark)}/>
      <main className={styles.main}>
        <h2>Produtos</h2>
        <div className={styles.productsGrid}>
          {products.map(p => <ProductCard key={p.id} product={p} loading={loading} onAddToCart={handleAddToCart}/>)}
        </div>

      </main>
      <Footer/>
    </>
  )
}

export default App
