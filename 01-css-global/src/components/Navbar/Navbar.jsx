import { FaCartShopping } from 'react-icons/fa6'
import { MdSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import logoBlack from '../../assets/logo-black.png'
import logoWhite from '../../assets/logo-white.png'

export default function NavBar({theme, handleChangeTheme}) {
	return (
		<header className='header--navbar'>
			<img src={theme == 'light'? logoBlack : logoWhite} alt="Logo RFR" className='header--logo' />
			<h1>Mini Loja</h1>
			<div>
				<button type="button" className={`header--toggleThemeBtn t-${theme}`} onClick={handleChangeTheme}>
					<MdSunny className={`header--theme-icon ${theme == 'light' ? 'active': ''}`}/>
					<FaMoon className={`header--theme-icon ${theme == 'dark' ? 'active': ''}`}/>
				</button>

				<div className="header--cart">
					<FaCartShopping className="header--cart-icon"/>
					<span className="header--cart-items">0</span>
				</div>
			</div>
		</header>
	)
}