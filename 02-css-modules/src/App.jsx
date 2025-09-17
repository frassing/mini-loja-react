import { useEffect, useState } from "react"
import styles from './App.module.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {products} from "./data/products.js"
import ProductCard from "./components/ProductCard/ProductCard.jsx"

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ cartItems, setCartItems ] = useState(0)

  const handleAddToCart = () => {
    const updatedCount = cartItems + 1
    setCartItems(updatedCount)
  }
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', 'dark')
  // }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <NavBar cartCount={cartItems}/>
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
