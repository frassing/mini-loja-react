import styled from 'styled-components'

const Footer = styled.footer`
	background-color: var(--fg-color);
	color: var(--text-light);
	padding: var(--padding-s);
	margin-top: var(--margin-s);
	font-size: 1.1em;
	text-align: center;
`
export default function FooterStyled() {
	return <Footer>
		<p>Feito por Raquel Roessing | 2025.</p>
	</Footer>
}