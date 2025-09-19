const Button = ({variant, children, onClick}) => {
	let btnVariantStyles = ''
	if (variant == 'solid') {
		btnVariantStyles = 'border border-emerald-900 bg-emerald-900 text-white'
	} else if (variant == 'outline') {
		btnVariantStyles = 'border border-emerald-900'
	}

	return <button type="button" onClick={onClick} className={`p-1.5 min-w-20 my-1 mx-0.5 rounded-sm cursor-pointer transition-opacity text-emerald-950 hover:opacity-80 ${btnVariantStyles}`}>{children}</button>
}

export default Button