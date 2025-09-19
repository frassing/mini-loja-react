import LogoBlack from '../assets/logo-black.png'
import LogoWhite from '../assets/logo-white.png'

const NavBar = ({cartItems, onThemeChange, theme}) => {
	return <header className="sticky top-0 z-1 flex items-center justify-between py-1.5 px-3 backdrop-blur-sm bg-linear-to-t from-transparent to-emerald-100 border-b border-b-emerald-100 dark:to-emerald-900 dark:border-b-emerald-950">
		<img src={theme == 'light' ? LogoBlack : LogoWhite} alt="Logo RFR" className='max-w-9'/>

		<button type="button" onClick={onThemeChange} className="cursor-pointer rounded-sm p-1.5 border border-emerald-600 text-base text-emerald-800 hover:bg-emerald-700 hover:text-emerald-100 transition-colors dark:text-emerald-100 dark:border-emerald-100 focus-within:outline-1 focus-within:outline-amber-400" aria-pressed={theme === 'dark'}>Ativar tema escuro</button>

		<div className="flex gap-1 items-center text-xl text-emerald-900 dark:text-zinc-50">
			<span aria-hidden='true'>🛒</span>
			<span aria-label='Itens no carrinho'>{cartItems}</span>
		</div>

	</header>
}

export default NavBar