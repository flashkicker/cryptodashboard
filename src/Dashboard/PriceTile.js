import React from "react"
import styled, { css } from "styled-components"
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid"
import { SelectableTile } from "../Shared/Tile"
import { fontSize3, fontSizeBig } from "../Shared/Styles"

const JustifyRight = styled.div`
	justify-self: right;
`

const JustifyLeft = styled.div`
	justify-self: left;
`

const TickerPrice = styled.div`
	${fontSizeBig}
`

const ChangePct = styled.div`
	color: green;
	${props =>
		props.red &&
		css`
			color: red;
		`}
`

const numberFormat = number => {
	return +(number + "").slice(0, 5)
}

const PriceTileStyled = styled(SelectableTile)`
	${props =>
		props.compact &&
		css`
            ${fontSize3}
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
            justify-items: right;
		`}
`

const ChangePercent = ({ data }) => {
	return (
		<JustifyRight>
			<ChangePct red={data.CHANGEPCT24HOUR < 0}>
				{numberFormat(data.CHANGEPCT24HOUR)}%
			</ChangePct>
		</JustifyRight>
	)
}

const PriceTile = ({ symbol, data }) => {
	return (
		<PriceTileStyled>
			<CoinHeaderGridStyled>
				<div>{symbol}</div>
				<ChangePercent data={data} />
			</CoinHeaderGridStyled>
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyled>
	)
}

const PriceTileCompact = ({ symbol, data }) => {
	return (
		<PriceTileStyled compact>
			<JustifyLeft>{symbol}</JustifyLeft>
			<ChangePercent data={data} />
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyled>
	)
}

export default function({ price, index }) {
	let symbol = Object.keys(price)[0]
	let data = price[symbol]["USD"]
	let TileClass = index < 5 ? PriceTile : PriceTileCompact

	return <TileClass symbol={symbol} data={data} />
}
