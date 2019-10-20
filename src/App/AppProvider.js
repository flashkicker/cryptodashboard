import React, { Component } from "react"
import _ from "lodash"

const cc = require("cryptocompare")

export const AppContext = React.createContext()

const MAX_FAVORITES = 15

class AppProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: "Dashboard",
			favorites: ["BTC", "LTC", "ETH", "XMR", "DOGE"],
			...this.savedSettings(),
			setPage: this.setPage,
			addCoin: this.addCoin,
			removeCoin: this.removeCoin,
			isInFavorites: this.isInFavorites,
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

	addCoin = key => {
		let favorites = [...this.state.favorites]
		if (favorites.length < MAX_FAVORITES) {
			favorites.push(key)
			this.setState({ favorites })
		}
	}

	removeCoin = key => {
		let favorites = [...this.state.favorites]
		this.setState({ favorites: _.pull(favorites, key) })
	}

	isInFavorites = key => {
		return _.includes(this.state.favorites, key)
	}

	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: "Dashboard"
		})

		localStorage.setItem(
			"cryptodash",
			JSON.stringify({
				favorites: this.state.favorites
			})
		)
	}

	savedSettings = () => {
		let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"))
		if (!cryptoDashData) {
			return { page: "Settings", firstVisit: true }
		}

		let { favorites } = cryptoDashData
		return { favorites }
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
