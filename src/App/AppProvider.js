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
			confirmFavorites: this.confirmFavorites,
			setFilteredCoins: this.setFilteredCoins,
			setCurrentFavorite: this.setCurrentFavorite
		}
	}

	componentDidMount() {
		this.fetchCoins()
		this.fetchPrices()
	}

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data
		this.setState({ coinList })
	}

	prices = async () => {
		const { favorites } = this.state
		let returnData = []
		for (let i = 0; i < favorites.length; i++) {
			try {
				let priceData = await cc.priceFull(favorites[i], "USD")
				returnData.push(priceData)
			} catch (e) {
				console.warn("fetch price error", e)
			}
		}

		return returnData
	}

	fetchPrices = async () => {
		if (this.state.firstVisit) return
		let prices = await this.prices()
		prices = prices.filter(price => Object.keys(price).length)
		this.setState({ prices })
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
		const currentFavorite = this.state.favorites[0]
		this.setState(
			{
				firstVisit: false,
				page: "Dashboard",
				currentFavorite
			},
			() => {
				this.fetchPrices()
			}
		)

		localStorage.setItem(
			"cryptodash",
			JSON.stringify({
				favorites: this.state.favorites,
				currentFavorite
			})
		)
	}

	setCurrentFavorite = symbol => {
		this.setState({
			currentFavorite: symbol
		})
		localStorage.setItem(
			"cryptodash",
			JSON.stringify({
				...JSON.parse(localStorage.getItem("cryptodash")),
				currentFavorite: symbol
			})
		)
	}

	savedSettings = () => {
		let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"))
		if (!cryptoDashData) {
			return { page: "Settings", firstVisit: true }
		}

		let { favorites, currentFavorite } = cryptoDashData
		return { favorites, currentFavorite }
	}

	setPage = page => {
		this.setState({ page })
	}

	setFilteredCoins = filteredCoins => {
		this.setState({ filteredCoins })
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
