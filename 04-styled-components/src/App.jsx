import { createGlobalStyle } from 'styled-components'
import FooterStyled from "./components/FooterStyled"
import NavBarStyled from './components/NavBarStyled'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --fg-color: #071a85;
    --bg-color: #eee;
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

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBarStyled/>
      <FooterStyled/>
    </>
  )
}

export default App
