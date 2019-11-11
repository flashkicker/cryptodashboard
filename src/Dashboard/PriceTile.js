import React from "react"
import styled, { css } from "styled-components"
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid"
import { SelectableTile } from "../Shared/Tile"
import {
	fontSize3,
	fontSizeBig,
	fontSize1,
	greenBoxShadow
} from "../Shared/Styles"
import { AppContext } from "../App/AppProvider"

const JustifyRight = styled.div`
	justify-self: right;
`

const TickerPrice = styled.div`
	${fontSizeBig}
	${props =>
		props.compact &&
		css`
			${fontSize1}
		`}
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
	${props =>
		props.currentFavorite &&
		css`
			${greenBoxShadow}
			pointer-events: none;
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

const PriceTile = ({ symbol, data, currentFavorite, setCurrentFavorite }) => {
	return (
		<PriceTileStyled
			onClick={setCurrentFavorite}
			currentFavorite={currentFavorite}
		>
			<CoinHeaderGridStyled>
				<div>{symbol}</div>
				<ChangePercent data={data} />
			</CoinHeaderGridStyled>
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyled>
	)
}

export default function({ price, index }) {
	let symbol = Object.keys(price)[0]
	let data = price[symbol]["USD"]

	return (
		<AppContext.Consumer>
			{({ currentFavorite, setCurrentFavorite }) => {
				return (
					<PriceTile
						symbol={symbol}
						data={data}
						currentFavorite={currentFavorite === symbol}
						setCurrentFavorite={() => setCurrentFavorite(symbol)}
					/>
				)
			}}
		</AppContext.Consumer>
	)
}
