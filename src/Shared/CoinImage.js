import React from "react"

export default ({ coin, style }) => {
	const { CoinSymbol, ImageUrl } = coin
	return (
		<img
			alt={CoinSymbol}
			style={style || { height: "50px" }}
			src={`http://cryptocompare.com/${ImageUrl}`}
		/>
	)
}
