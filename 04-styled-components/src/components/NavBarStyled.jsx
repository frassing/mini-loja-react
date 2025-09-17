import styled from "styled-components";
import LogoBlack from '../assets/logo-black.png'
import LogoWhite from '../assets/logo-white.png'

const Header = styled.header`
	background-color: var(--fg-color);
	padding: calc(var(--padding-s)/4) calc(var(--padding-s)/2);
	color: var(--text-light);
	position: sticky;
	top: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

const Logo = styled.img`
	max-width: 34px;
`

const ThemeToggle = styled.button`
	background-color: transparent;
	color: var(--text-light);
	padding: var(--padding-s);
	border: none;
	cursor: pointer;
	font-size: 1.2em;

	&:hover {
		filter: opacity(.8);
	}
`

const ThemeIcon = styled.span`
	margin-right: 4px;
`

const CartCount = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

const CartIcon = styled.span`
	transform: rotateY(180deg);
	font-size: 1.3em;
`

const CartLabel = styled.span`
	font-size: 1.3em;
`

export default function NavBarStyled() {
	return <Header>
		<Logo src={LogoWhite} alt="Logo RFR"/>

		<ThemeToggle type="button">
			<ThemeIcon>🌑</ThemeIcon>
			Mudar tema
		</ThemeToggle>

		<CartCount>
			<CartIcon>🛒</CartIcon>
			<CartLabel>0</CartLabel>
		</CartCount>
	</Header>
}