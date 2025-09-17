import styles from "./Button.module.css"

function Button({children, variant}) {
	let className = `${styles.btn}`
	if (variant == 'outline') {
		className += ` ${styles.btnOutline}`
	} else if (variant == 'solid') {
		className += ` ${styles.btnSolid}`
	}
	
	return (
		<button type="button" className={className}>{children}</button>
	)
}

export default Button