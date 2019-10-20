import React from "react"
import styled, { css } from "styled-components"
import Settings from "../Settings"
import AppLayout from "./AppLayout"
import AppBar from "./AppBar"
import AppProvider from "./AppProvider"
import "./App.css"

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<Settings />
			</AppProvider>
		</AppLayout>
	)
}

export default App
