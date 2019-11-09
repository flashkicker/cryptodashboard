import React from "react"

export default ({ coin, spotlight }) => {
	const { CoinSymbol, ImageUrl } = coin
	return (
		<img
			className="ui fluid image"
			alt={CoinSymbol}
			src={`http://cryptocompare.com/${ImageUrl}`}
			style={
				spotlight
					? { padding: window.innerWidth < 767.98 ? "50px" : "20px" }
					: { height: "50px", width: "50px", margin: "10px 0px 5px 0px" }
			}
		/>
	)
}
