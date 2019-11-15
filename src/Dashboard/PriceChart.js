import React from "react"
import HighchartsConfig from "./HighchartsConfig"
import { Tile } from "../Shared/Tile"
import ReactHighcharts from "react-highcharts"
import { AppContext } from "../App/AppProvider"
import HighchartsTheme from "./HighchartsTheme"

const themeDecider = theme => ({
	color: "#1163c9",
	border: "1px solid",
	margin: 5,
	height: 25,
	float: "right",
	fontSize: "1em",
	backgroundColor: theme === "light" ? "white" : "#010e2c"
})

export default () => {
	return (
		<AppContext.Consumer>
			{({ historicalData, changeChartSelect, theme }) => {
				ReactHighcharts.Highcharts.setOptions(HighchartsTheme(theme))
				return (
					<Tile theme={theme}>
						<select
							style={themeDecider(theme)}
							defaultValue="months"
							onChange={event => changeChartSelect(event.target.value)}
						>
							<option value="days">Days</option>
							<option value="weeks">Weeks</option>
							<option value="months">Months</option>
						</select>
						{historicalData ? (
							<div style={{ width: "100%" }}>
								<ReactHighcharts config={HighchartsConfig(historicalData)} />
							</div>
						) : (
							<div className="ui active dimmer">
								<div className="ui text loader">Loading Historical Data</div>
							</div>
						)}
					</Tile>
				)
			}}
		</AppContext.Consumer>
	)
}
