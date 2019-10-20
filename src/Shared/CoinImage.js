import React from "react"
import styled from "styled-components"

const CoinImageStyled = styled.div`
	// padding-top: 10px;
	// padding-left: 5px;
	padding: 10px 0px 5px 5px;
`

export default ({ coin, style }) => {
	const { CoinSymbol, ImageUrl } = coin
	return (
		<CoinImageStyled>
			<img
				alt={CoinSymbol}
				style={style || { height: "50px" }}
				src={`http://cryptocompare.com/${ImageUrl}`}
			/>
		</CoinImageStyled>
	)
}
