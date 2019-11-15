import React from "react"
import { AppContext } from "../App/AppProvider"

export default props => {
	return (
		<AppContext.Consumer>
			{({ coinList, prices, firstVisit, theme }) => {
				if (!coinList) {
					return (
						<div
							className={`ui active ${
								theme === "light" ? "inverted" : ""
							} dimmer`}
						>
							<div className="ui text loader">Loading Coins</div>
						</div>
					)
				}

				if (!firstVisit && !prices) {
					return (
						<div
							className={`ui active ${
								theme === "light" ? "inverted" : ""
							} dimmer`}
						>
							<div className="ui text loader">Loading Price Data</div>
						</div>
					)
				}

				return <div className="ui container">{props.children}</div>
			}}
		</AppContext.Consumer>
	)
}
