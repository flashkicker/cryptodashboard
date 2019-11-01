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
	let allStringsToSearch = coinSymbols.concat(coinNames)
	let fuzzyResults = fuzzy
		.filter(inputValue, allStringsToSearch, {})
		.map(result => result.string)

	let filteredCoins = _.pickBy(coinList, (result, symbolKey) => {
		let coinName = result.CoinName
		return (
			_.includes(fuzzyResults, symbolKey) || _.includes(fuzzyResults, coinName)
		)
    })
    
	setFilteredCoins(filteredCoins)
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
