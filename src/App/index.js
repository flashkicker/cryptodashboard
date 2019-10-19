import React from "react"
import styled, { css } from "styled-components"
import WelcomeMessage from "./WelcomeMessage"
import "./App.css"

const MyButton = styled.button`
	color: green;
	${props =>
		props.primary &&
		css`
			color: palevioletred;
		`}
`

const TomatoButton = styled(MyButton)`
	color: tomato;
	border-color: tomato;
`

function App() {
	return (
		<div>
			<WelcomeMessage />
		</div>
	)
}

export default App
