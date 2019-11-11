import React from "react"
import { AppContext } from "../App/AppProvider"

export default props => {
	return (
		<AppContext.Consumer>
			{({ coinList, prices, firstVisit }) => {
				if (!coinList) {
					return (
						<div className="ui active dimmer">
							<div className="ui text loader">Loading Coins</div>
						</div>
					)
				}

				if (!firstVisit && !prices) {
					return (
						<div className="ui active dimmer">
							<div className="ui text loader">Loading Price Data</div>
						</div>
					)
				}

				return <div className="ui container">{props.children}</div>
			}}
		</AppContext.Consumer>
	)
}
