import LogoBlack from '../assets/logo-black.png'

const NavBar = () => {
	return <header className="sticky top-0 z-1 flex items-center justify-between py-1.5 px-3 backdrop-blur-sm bg-linear-to-t from-transparent to-emerald-100 border-b border-b-emerald-100">
		<img src={LogoBlack} alt="Logo RFR" className='max-w-9'/>

		<button type="button" className="cursor-pointer rounded-sm p-1 border border-emerald-600 text-base  text-emerald-800 hover:border-emerald-700 hover:text-emerald-900 transition-colors">Ativar tema escuro</button>

		<div className="flex gap-1 items-center text-xl text-emerald-900">
			<span aria-hidden='true'>🛒</span>
			<span aria-label='Itens no carrinho'>0</span>
		</div>

	</header>
}

export default NavBar