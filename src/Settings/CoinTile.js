import React from "react"
import { AppContext } from "../App/AppProvider"
import { SelectableTile, DisabledTile, DeletableTile } from "../Shared/Tile"
import CoinHeaderGrid from "./CoinHeaderGrid"
import CoinImage from "../Shared/CoinImage"

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
	return topSection
		? () => {
				removeCoin(coinKey)
		  }
		: () => {
				addCoin(coinKey)
		  }
}

export default ({ coinKey, topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, addCoin, removeCoin, isInFavorites }) => {
				const coin = coinList[coinKey]
				const { CoinName, Symbol } = coin

				let TileClass = SelectableTile
				if (topSection) {
					TileClass = DeletableTile
				} else if (isInFavorites(coinKey)) {
					TileClass = DisabledTile
				}

				return (
					<TileClass
						onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
					>
						<CoinHeaderGrid
							name={CoinName}
							symbol={Symbol}
							topSection={topSection}
						/>
						<CoinImage coin={coin} />
					</TileClass>
				)
			}}
		</AppContext.Consumer>
	)
}
