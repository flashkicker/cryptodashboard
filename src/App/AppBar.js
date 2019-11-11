import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"
// import { Button } from "semantic-ui-react"
import icon from "./icon.png"

const Logo = styled.div`
	display: grid;
	grid-template-columns: ${window.innerWidth < 767.98 ? "30px" : "40px"} 180px;
	margin: ${window.innerWidth < 767.98 ? "5px 0px 0px 10px" : "0px"};
	align-items: center;
`

const Bar = styled.div`
	display: grid;
	grid-template-columns: ${window.innerWidth < 767.98 ? "20px" : "220px"} auto 115px 100px;
	margin-bottom: 40px;
	${props =>
		props.active &&
		css`
			border-bottom: 3px solid;
		`}
`

const ControlButtonElem = styled.div`
	cursor: pointer;
	margin-right: ${window.innerWidth < 767.98 ? "15px" : "0px"};
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
					firstVisit={firstVisit}
				>
					<ControlButtonText>{name}</ControlButtonText>
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	)
}

// const ToggleButton = () => {
// 	return (
// 		<AppContext.Consumer>
// 			{({ theme, changeTheme }) => (
// 				<Button
// 					color={theme === "dark" ? "" : "grey"}
// 					onClick={changeTheme}
// 					style={{ display: "block", margin: "auto" }}
// 				>
// 					Dark Mode: {theme === "dark" ? "ON" : "OFF"}
// 				</Button>
// 			)}
// 		</AppContext.Consumer>
// 	)
// }

const AppBar = () => {
	return (
		<Bar>
			<Logo>
				<img
					alt="Cryptopium_Logo"
					src={icon}
					style={
						window.innerWidth < 767.98
							? { height: "20px", width: "20px", marginLeft: "15px" }
							: { height: "28px", width: "28px" }
					}
				/>
				<span
					style={
						window.innerWidth < 767.98
							? { fontSize: "20px", marginLeft: "10px" }
							: { fontSize: "32px" }
					}
				>
					Cryptopium
				</span>
			</Logo>
			{/* <ToggleButton /> */}
			<div />
			<ControlButton active name="Dashboard" />
			<ControlButton name="Settings" />
		</Bar>
	)
}

export default AppBar
