import React from "react"
import HighchartsConfig from "./HighchartsConfig"
import { Tile } from "../Shared/Tile"
import ReactHighcharts from "react-highcharts"
import { AppContext } from "../App/AppProvider"
import HighchartsTheme from "./HighchartsTheme"
import ChartSelect from "./ChartSelect"

ReactHighcharts.Highcharts.setOptions(HighchartsTheme)

export default () => {
	return (
		<AppContext.Consumer>
			{({ historicalData, changeChartSelect }) => {
				return (
					<Tile>
						<ChartSelect
							defaultValue="months"
							onChange={event => changeChartSelect(event.target.value)}
						>
							<option value="days">Days</option>
							<option value="weeks">Weeks</option>
							<option value="months">Months</option>
						</ChartSelect>
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
