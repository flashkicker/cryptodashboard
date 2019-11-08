import React from "react"
import styled from "styled-components"

import Page from "../Shared/Page"
import PriceGrid from "./PriceGrid"
import CoinSpotlight from "./CoinSpotlight"
import PriceChart from "./PriceChart"

const ChartGrid = styled.div`
	display: grid;
	margin-top: 30px;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
`

export default () => {
	return (
		<Page name="Dashboard">
			<div className="ui container">
				<PriceGrid />
				<div className="ui stackable two column grid">
					<div className="four wide column">
						<CoinSpotlight />
					</div>
					<div className="twelve wide column">
						<PriceChart />
					</div>
				</div>
			</div>
		</Page>
	)
}
