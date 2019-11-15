import React from "react"
import { AppContext } from "../App/AppProvider"

const segmentColor = theme => ({
	backgroundColor: theme === "light" ? "white" : "#061a44"
})

const WelcomeMessage = () => {
	return (
		<AppContext.Consumer>
			{({ firstVisit, theme }) => {
				return firstVisit ? (
					<div className="ui segment" style={segmentColor(theme)}>
						<h4>Pick your favorite coins</h4>
						<span>
							Welcome to Cryptopium, you may select upto 15 favorite coins to
							begin.{" "}
						</span>
					</div>
				) : (
					<div className="ui segment" style={segmentColor(theme)}>
						<h2>Here are your currently selected favorite coins</h2>
						<span>You can select upto 15 favorite coins. </span>
					</div>
				)
			}}
		</AppContext.Consumer>
	)
}

export default WelcomeMessage
