import React from "react"
import { AppContext } from "../App/AppProvider"

const WelcomeMessage = () => {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) => {
				return firstVisit ? (
					<div className="ui segment" style={{ backgroundColor: "#061a44" }}>
						<h2>Pick Your Favorite Coins</h2>
						<span>
							Welcome to CryptoNite, you may select upto 15 favorite coins to begin.{" "}
						</span>
					</div>
				) : null
			}}
		</AppContext.Consumer>
	)
}

export default WelcomeMessage
