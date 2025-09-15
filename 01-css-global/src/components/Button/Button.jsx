export default function Button({variant, children, onClick}) {
	let className = 'button'
	if (variant == 'solid' || variant == 'outline' || variant == 'ghost') {
		className += ` btn-${variant}`
	}
	return <button className={className} type="button" onClick={onClick}>{children}</button>
}