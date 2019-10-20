import React, { Component } from "react"

const cc = require("cryptocompare")

export const AppContext = React.createContext()

class AppProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: "Dashboard",
			...this.savedSettings(),
			setPage: this.setPage,
			confirmFavorites: this.confirmFavorites
		}
	}

	componentDidMount() {
		this.fetchCoins()
	}

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data
		this.setState({ coinList })
	}

	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: "Dashboard"
		})

		localStorage.setItem(
			"cryptodash",
			JSON.stringify({
				test: "eh"
			})
		)
	}

	savedSettings = () => {
		let cryptoDash = JSON.parse(localStorage.getItem("cryptodash"))
		if (!cryptoDash) {
			return { page: "Settings", firstVisit: true }
		}

		return {}
	}

	setPage = page => {
		this.setState({ page })
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		)
	}
}

export default AppProvider
