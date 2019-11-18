import React from "react"
import styled from "styled-components"
import { AppContext } from "../App/AppProvider"
import PriceTile from "./PriceTile"

const PriceGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 15px;
	margin-top: 40px;
	margin-bottom: 40px;
`

export default () => {
	return (
		<AppContext.Consumer>
			{({ prices }) => {
				return (
					<PriceGrid>
						{prices.map((price, index) => (
							<div key={`priceTile-${index}`}>
								<PriceTile index={index} price={price} />
							</div>
						))}
					</PriceGrid>
				)
			}}
		</AppContext.Consumer>
	)
}
