import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"

const Logo = styled.div`
	font-size: 1.5em;
`

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 115px 100px;
	margin-bottom: 40px;
	align-items: baseline;
`

const ControlButtonElem = styled.div`
	cursor: pointer;
	${props =>
		props.active &&
		css`
			box-shadow: 0px 0px 4px 2px #ffffff;
			padding: 8px;
			border-radius: 5px;
			border: 1px solid;
		`}
`

const ControlButtonText = styled.span`
	display: block;
	text-align: center;
`

const ControlButton = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage }) => (
				<ControlButtonElem active={page === name} onClick={() => setPage(name)}>
					<ControlButtonText>{name}</ControlButtonText>
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	)
}

const AppBar = () => {
	return (
		<Bar>
			<Logo>CryptoNite</Logo>
			<div />
			<ControlButton active name="Dashboard" />
			<ControlButton name="Settings" />
		</Bar>
	)
}

export default AppBar
