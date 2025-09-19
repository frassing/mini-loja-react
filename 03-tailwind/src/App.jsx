import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"
import products from "./data/products.json"

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ cartItemsCount, setCartItemsCount ] = useState(0)
  const storedTheme = localStorage.getItem('theme')
  const [ theme, setTheme ] = useState(storedTheme || 'light')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleAddToCart = () => {
    let updatedCart = cartItemsCount + 1
    setCartItemsCount(updatedCart)
  }

  const handleThemeChange = () => {
    let newTheme = theme == 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <div className="dark:bg-zinc-900 bg-zinc-100 transition-all font-Roboto flex flex-col justify-between min-h-screen">
      <NavBar cartItems={cartItemsCount} theme={theme} onThemeChange={handleThemeChange}/>
      <section className="m-2 mb-8 flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold m-2 text-zinc-950 dark:text-zinc-50">Produtos</h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 w-11/12 2xl:w-9/12 justify-items-center">
          {products.map(p => <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} loading={loading}/>)}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App
