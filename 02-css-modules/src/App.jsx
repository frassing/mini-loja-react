import { useEffect } from "react"
import styles from './App.module.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', 'dark')
  // }, [])

  return (
    <>
      <NavBar/>
      <Footer/>
    </>
  )
}

export default App
