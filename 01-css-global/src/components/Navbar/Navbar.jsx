import { FaCartShopping } from 'react-icons/fa6'
import { MdSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import logoBlack from '../../assets/logo-black.png'
import logoWhite from '../../assets/logo-white.png'

export default function NavBar({theme, handleChangeTheme, cartCount}) {
	const count = cartCount > 0 ? cartCount : ''
	return (
		<header className='header--navbar'>
			<img src={theme == 'light'? logoBlack : logoWhite} alt="Logo RFR" className='header--logo' />
			<div>
				<button type="button" className={`header--toggleThemeBtn t-${theme}`} onClick={handleChangeTheme} aria-label={theme == 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'} aria-pressed={theme == 'light'}>
					<MdSunny aria-hidden='true' className={`header--theme-icon ${theme == 'light' ? 'active': ''}`}/>
					<FaMoon aria-hidden='true' className={`header--theme-icon ${theme == 'dark' ? 'active': ''}`}/>
				</button>

				<div className="header--cart">
					<FaCartShopping className="header--cart-icon" aria-hidden='true'/>
					<span className="header--cart-items" aria-label='Itens no carrinho'>{count}</span>
				</div>
			</div>
		</header>
	)
}