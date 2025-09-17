import styled from "styled-components";

const Button = styled.button`
	padding: calc(var(--padding-s)/2);
	min-width: 100px;
	border: ${({$variant}) => ($variant ? '1px solid var(--fg-color)' : 'transparent')};
	border-radius: 4px;
	cursor: pointer;
	font-size: 1em;
	color: ${({$variant}) => ($variant == 'solid' ? 'var(--text-light)' : 'var(--fg-color)')};
	background-color: ${({$variant}) => ($variant == 'solid' ? 'var(--fg-color)' : 'transparent')};
	transition: all 200ms;

	&:hover, &:focus-within{
		filter: opacity(.8);
	}
`

export default function ButtonStyled({children, variant}){
	return <Button $variant={variant} type="button">{children}</Button>
}