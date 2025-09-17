import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	max-width: 250px;
	background-color: var(--card-color);
	box-shadow: 0 0 5px var(--card-shadow);
	padding: calc(var(--padding-s)/2);
	border-radius: 3px;
	gap: 8px;
`

const Square = styled.div`
	min-width: 240px;
	min-height: 240px;
	width: 100%;
	background-color: var(--card-shadow); 
`

const Line = styled.div`
	background-color: var(--card-shadow); 
	width: ${({$type}) => ($type == 'm' ? '60%' : '100%')};
	height: ${({$type}) => ($type == 'm' ? '1.6em' : '2.5em')};
`
const SquareSM = styled.span`
	background-color: var(--card-shadow); 
	display: inline-block;
	height: 1.3em;
	width: 1.3em;
	margin-right: 4px;
`

const Retangle = styled.div`
	background-color: var(--card-shadow); 
	width: 80%;
	height: 36px;
`

export default function Skeleton() {
	return <Container>
		<Square/>
		<Line/>
		<Line $type='m'/>
		<div>
			{[...Array(5)].map((_, i) => <SquareSM key={i}/>)}
		</div>
		<Retangle/>
	</Container>
}