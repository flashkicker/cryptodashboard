import React from "react"

import Page from "../Shared/Page"
import PriceGrid from "./PriceGrid"
import CoinSpotlight from "./CoinSpotlight"
import PriceChart from "./PriceChart"

export default () => {
	return (
		<Page name="Dashboard">
			<div className="ui container">
				<PriceGrid />
				<div className="ui stackable two column grid">
					<div className="four wide column">
						{window.innerWidth < 767.98 ? <div /> : <CoinSpotlight />}
					</div>
					<div className="twelve wide column">
						<PriceChart />
					</div>
				</div>
			</div>
		</Page>
	)
}
