import styles from "./Button.module.css"

function Button({children, variant, onClick}) {
	let className = `${styles.btn}`
	if (variant == 'outline') {
		className += ` ${styles.btnOutline}`
	} else if (variant == 'solid') {
		className += ` ${styles.btnSolid}`
	}
	
	return (
		<button type="button" className={className} onClick={onClick}>{children}</button>
	)
}

export default Button