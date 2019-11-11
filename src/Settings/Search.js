import React from "react"
import styled from "styled-components"
import _ from "lodash"
import fuzzy from "fuzzy"
import { backgroundColor2, fontSize2 } from "../Shared/Styles"
import { AppContext } from "../App/AppProvider"

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 250px 1fr;
`

const SearchInput = styled.input`
	${backgroundColor2}
	${fontSize2}
    border: 1px solid;
	height: 25px;
	color: #1163c9;
	place-self: center left;
	width: 50%;
`

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

export default () => {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinList }) => (
				<SearchGrid>
					<h2>Search All Coins</h2>
					<SearchInput
						onKeyUp={event => filterCoins(event, setFilteredCoins, coinList)}
					/>
				</SearchGrid>
			)}
		</AppContext.Consumer>
	)
}
