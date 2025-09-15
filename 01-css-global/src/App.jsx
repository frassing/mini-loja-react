import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/Navbar'

function App() {
  const storedTheme = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(() => storedTheme ?? 'light')

  const onChangeTheme = () => {
    if (theme == 'light') {
      localStorage.setItem('theme', JSON.stringify('dark'))
      setTheme('dark')
    } else {
      localStorage.setItem('theme', JSON.stringify('light'))
      setTheme('light')
    }
  }


  return (
    <div className='app-main' data-theme={theme}>
      <NavBar theme={theme} handleChangeTheme={onChangeTheme}/>
      <main>
        <h2>Produtos</h2>
      </main>
    </div>
  )
}

export default App
