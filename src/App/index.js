import React from "react"
import Settings from "../Settings"
import Content from "../Shared/Content"
import AppLayout from "./AppLayout"
import AppBar from "./AppBar"
import AppProvider from "./AppProvider"
import Dashboard from "../Dashboard"
import "./App.css"

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<Content>
					<Settings />
					<Dashboard />
				</Content>
			</AppProvider>
		</AppLayout>
	)
}

export default App
