import { useEffect } from "react"
import styles from './App.module.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {products} from "./data/products.js"
import ProductCard from "./components/ProductCard/ProductCard.jsx"

function App() {
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', 'dark')
  // }, [])

  return (
    <>
      <NavBar/>
      <main className={styles.main}>
        <h2>Produtos</h2>
        <div className={styles.productsGrid}>
          {products.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>

      </main>
      <Footer/>
    </>
  )
}

export default App
