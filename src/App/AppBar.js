import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"
import { Button } from "semantic-ui-react"
import icon from "./icon.png"

const Logo = styled.div`
	display: grid;
	grid-template-columns: 40px 180px;
	align-items: center;
`

const Bar = styled.div`
	display: grid;
	grid-template-columns: 220px auto 115px 100px;
	margin-bottom: 40px;
`

const ControlButtonElem = styled.div`
	cursor: pointer;
	padding: 8px;
	${props =>
		props.active &&
		css`
			border-bottom: 3px solid;
		`}
	${props =>
		props.hidden &&
		css`
			display: none;
		`}
`

const ControlButtonText = styled.span`
	display: block;
	text-align: center;
`

const ControlButton = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage, firstVisit }) => (
				<ControlButtonElem
					active={page === name}
					hidden={firstVisit && name === "Dashboard"}
					onClick={() => setPage(name)}
				>
					<ControlButtonText>{name}</ControlButtonText>
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	)
}

const ToggleButton = () => {
	return (
		<AppContext.Consumer>
			{({ theme, changeTheme }) => (
				<Button
					color={theme === "dark" ? "" : "grey"}
					onClick={changeTheme}
					style={{ display: "block", margin: "auto" }}
				>
					Dark Mode: {theme === "dark" ? "ON" : "OFF"}
				</Button>
			)}
		</AppContext.Consumer>
	)
}

const AppBar = () => {
	return (
		<Bar>
			<Logo>
				<img src={icon} style={{ height: "28px", width: "28px" }} />
				<span style={{ fontSize: "32px" }}>CryptoNite</span>
			</Logo>
			{/* <ToggleButton /> */}
			<div />
			<ControlButton active name="Dashboard" />
			<ControlButton name="Settings" />
		</Bar>
	)
}

export default AppBar
