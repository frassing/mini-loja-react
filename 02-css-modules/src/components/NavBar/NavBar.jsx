import logoBlack from '../../assets/logo-black.png'
import logoWhite from '../../assets/logo-white.png'
import styles from './NavBar.module.css'

function NavBar({cartCount, isDark, onChange}) {

	return (
		<header className={styles.header}>
			<img src={isDark ? logoWhite : logoBlack} alt="Logo RFR" className={styles.logo}/>

			<div className={styles.switchTheme}>
				<input type="checkbox" name="alternar-tema" id="theme-chk" checked={isDark} onChange={onChange} />
				<label htmlFor="theme-chk">Ativar tema escuro</label>
			</div>
			<div className={styles.cart}>
				<span className={styles.cartIcon}>🛒</span>
				<span className={styles.cartItems}>{cartCount}</span>
			</div>
		</header>
	)
}

export default NavBar