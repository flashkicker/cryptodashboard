import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"
import Toggle from "react-toggle"
import icon from "./icon.png"
import "./AppBarStyles.css"

const Logo = styled.div`
	display: grid;
	grid-template-columns: ${window.innerWidth < 767.98 ? "30px" : "40px"} 180px;
	margin: ${window.innerWidth < 767.98 ? "5px 0px 0px 10px" : "0px"};
	align-items: center;
`

const Bar = styled.div`
	display: grid;
	grid-template-columns: ${window.innerWidth < 767.98
		? "170px auto 50px 50px"
		: "240px auto 115px 100px"};
	margin-bottom: 40px;
	padding: ${window.innerWidth < 767.98 ? "0px 0px 10px 0px" : "20px"};
	background-color: #b7c6cd;
	${props =>
		props.active &&
		css`
			border-bottom: 3px solid;
		`}
	${props =>
		props.theme === "dark" &&
		css`
			background-color: #061a44;
		`}
`

const ControlButtonElem = styled.div`
	cursor: pointer;
	margin-right: ${window.innerWidth < 767.98 ? "10px" : "0px"};
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

const ControlButton = ({ name, icon }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage, firstVisit }) => (
				<ControlButtonElem
					active={page === name}
					hidden={firstVisit && name === "Dashboard"}
					onClick={() => setPage(name)}
					firstVisit={firstVisit}
				>
					<ControlButtonText>
						{window.innerWidth < 767.98 ? <i className={icon} /> : name}
					</ControlButtonText>
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	)
}

const AppBar = () => {
	return (
		<AppContext.Consumer>
			{({ theme, changeTheme }) => (
				<Bar theme={theme}>
					<Logo>
						<img
							alt="Cryptopium_Logo"
							src={icon}
							style={
								window.innerWidth < 767.98
									? { height: "20px", width: "20px", marginLeft: "7px" }
									: { height: "28px", width: "28px" }
							}
						/>
						<span
							style={
								window.innerWidth < 767.98
									? { fontSize: "20px", marginLeft: "5px" }
									: { fontSize: "32px" }
							}
						>
							Cryptopium
						</span>
					</Logo>
					<div style={{ display: "block", margin: "10px auto auto auto" }}>
						<label>
							<Toggle
								id="theme"
								defaultChecked={theme}
								onChange={changeTheme}
								icons={{
									checked: (
										<i className="sun icon" style={{ marginTop: "4px" }} />
									),
									unchecked: (
										<i className="moon icon" style={{ marginTop: "4px" }} />
									)
								}}
							/>
						</label>
					</div>
					<ControlButton active name="Dashboard" icon="desktop icon" />
					<ControlButton name="Settings" icon="cog icon" />
				</Bar>
			)}
		</AppContext.Consumer>
	)
}

export default AppBar
