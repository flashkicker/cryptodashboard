import React from "react"
import styled, { css } from "styled-components"

const CoinImageStyled = styled.img`
	padding: 10px 0px 5px 5px;
	height: 50px;
	${props =>
		props.spotlight &&
		css`
			height: 200px;
			display: block;
			margin: auto;
		`}
`

export default ({ coin, spotlight }) => {
	const { CoinSymbol, ImageUrl } = coin
	return (
		<CoinImageStyled
			spotlight={spotlight}
			alt={CoinSymbol}
			src={`http://cryptocompare.com/${ImageUrl}`}
		/>
	)
}
