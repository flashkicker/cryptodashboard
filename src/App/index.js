import React from "react"
import styled, { css } from "styled-components"
import WelcomeMessage from "./WelcomeMessage"
import AppLayout from "./AppLayout"
import AppBar from "./AppBar"
import AppProvider from "./AppProvider"
import "./App.css"

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<WelcomeMessage />
			</AppProvider>
		</AppLayout>
	)
}

export default App
