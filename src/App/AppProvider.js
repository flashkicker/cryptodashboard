import React, { Component } from "react"
import _ from "lodash"
import moment from "moment"

const cc = require("cryptocompare")
cc.setApiKey("a9e95efc366eb2cb8289f8f114fc891a11aa2de1296f8c6d974a0205695aef04")

export const AppContext = React.createContext()

const MAX_FAVORITES = 15
const TIME_UNITS = 10

class AppProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: "Dashboard",
			favorites: ["BTC", "LTC", "ETH", "XMR", "DOGE"],
			timeInterval: "months",
			...this.savedSettings(),
			setPage: this.setPage,
			addCoin: this.addCoin,
			removeCoin: this.removeCoin,
			isInFavorites: this.isInFavorites,
			confirmFavorites: this.confirmFavorites,
			setFilteredCoins: this.setFilteredCoins,
			setCurrentFavorite: this.setCurrentFavorite,
			changeChartSelect: this.changeChartSelect
		}
	}

	componentDidMount() {
		this.fetchCoins()
		this.fetchPrices()
		this.fetchHistoricalData()
	}

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data
		this.setState({ coinList })
	}

	fetchPrices = async () => {
		if (this.state.firstVisit) return
		let prices = await this.prices()
		prices = prices.filter(price => Object.keys(price).length)
		this.setState({ prices })
	}

	fetchHistoricalData = async () => {
		if (this.state.firstVisit) return
		let results = await this.historicalData()
		let historicalData = [
			{
				name: this.state.currentFavorite,
				data: results.map((ticker, index) => [
					moment()
						.subtract({ [this.state.timeInterval]: TIME_UNITS - index })
						.valueOf(),
					ticker.USD
				])
			}
		]

		this.setState({ historicalData })
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

	historicalData = () => {
		let promises = []
		for (let units = TIME_UNITS; units > 0; units--) {
			promises.push(
				cc.priceHistorical(
					this.state.currentFavorite,
					["USD"],
					moment()
						.subtract({ [this.state.timeInterval]: units })
						.toDate()
				)
			)
		}

		return Promise.all(promises)
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
				currentFavorite,
				prices: null,
				historicalData: null
			},
			() => {
				this.fetchPrices()
				this.fetchHistoricalData()
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
		this.setState(
			{
				currentFavorite: symbol,
				historicalData: null
			},
			this.fetchHistoricalData
		)

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

	changeChartSelect = timeInterval => {
		this.setState(
			{ timeInterval, historicalData: null },
			this.fetchHistoricalData
		)
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
