import React from "react"
import _ from "lodash"
import fuzzy from "fuzzy"
import { AppContext } from "../App/AppProvider"

const handleFilter = _.debounce((inputValue, setFilteredCoins, coinList) => {
	// Get all the coin symbols
	let coinSymbols = Object.keys(coinList)
	// Get all the coin names, map symbol to name
	let coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName)
	// Obtain an array of all coins as an object
	const coins = coinSymbols.map(coin => coinList[coin])
	let allStringsToSearch = coinSymbols.concat(coinNames)
	let fuzzyResults = fuzzy
		.filter(inputValue, allStringsToSearch, {})
		.map(result => result.string)

	let coinsArr = []
	for (let coin of fuzzyResults) {
		// check if array element is a symbol (ex. "BTC")
		if (coinSymbols.includes(coin)) {
			if (!coinsArr.includes(coin)) {
				coinsArr.push(coin)
			}
		}
		// check if array element is a name (ex. "Bitcoin")
		else if (coinNames.includes(coin)) {
			const coinObj = coins.find(obj => {
				return obj.CoinName === coin
			})
			if (!coinsArr.includes(coinObj.Symbol)) {
				coinsArr.push(coinObj.Symbol)
			}
		}
	}

	setFilteredCoins(coinsArr)
}, 500)

const filterCoins = (event, setFilteredCoins, coinList) => {
	let inputValue = event.target.value

	if (!inputValue) {
		setFilteredCoins(null)
		return
	}

	handleFilter(inputValue, setFilteredCoins, coinList)
}

const themeDecider = theme => ({
	backgroundColor: theme === "light" ? "white" : "#010e2c",
	fontSize: "1.5em",
	border: "1px solid",
	height: "35px",
	color: "#1163c9",
	placeSelf: "center left",
	width: "100%"
})

export default () => {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinList, theme }) => (
				<div className="ui left aligned stackable grid">
					<div className="four wide column">
						<h1>Search All Coins</h1>
					</div>
					<div
						className="twelve wide column"
						style={{ display: "inline-grid" }}
					>
						<input
							style={themeDecider(theme)}
							onKeyUp={event => filterCoins(event, setFilteredCoins, coinList)}
						/>
					</div>
				</div>
			)}
		</AppContext.Consumer>
	)
}
