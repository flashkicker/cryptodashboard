import React from "react"
import Settings from "../Settings"
import Content from "../Shared/Content"
import AppBar from "./AppBar"
import AppProvider from "./AppProvider"
import Dashboard from "../Dashboard"
import "./App.css"

function App() {
	return (
		<AppProvider>
			<AppBar />
			<Content>
				<Settings />
				<Dashboard />
			</Content>
		</AppProvider>
	)
}

export default App
