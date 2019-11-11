import React from "react"
import { AppContext } from "../App/AppProvider"

const WelcomeMessage = () => {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) => {
				return firstVisit ? (
					<div className="ui segment" style={{ backgroundColor: "#061a44" }}>
						<h4>Pick your favorite coins</h4>
						<span>
							Welcome to Cryptopium, you may select upto 15 favorite coins to
							begin.{" "}
						</span>
					</div>
				) : (
					<div className="ui segment" style={{ backgroundColor: "#061a44" }}>
						<h2>Here are your currently selected favorite coins</h2>
						<span>You can select upto 15 favorite coins. </span>
					</div>
				)
			}}
		</AppContext.Consumer>
	)
}

export default WelcomeMessage
