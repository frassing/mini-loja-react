import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"
import products from "./data/products.json"

function App() {
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="bg-zinc-100 flex flex-col justify-between min-h-screen">
      <NavBar/>
      <section className="m-2 mb-8 flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold m-2 text-zinc-950">Produtos</h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 w-11/12 2xl:w-9/12 justify-items-center">
          {products.map(p => <ProductCard key={p.id} product={p} loading={loading}/>)}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App
