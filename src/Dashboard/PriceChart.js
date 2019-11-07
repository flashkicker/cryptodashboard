import React from "react"
import HighchartsConfig from "./HighchartsConfig"
import { Tile } from "../Shared/Tile"
import ReactHighcharts from "react-highcharts"
import { AppContext } from "../App/AppProvider"
import HighchartsTheme from "./HighchartsTheme"

ReactHighcharts.Highcharts.setOptions(HighchartsTheme)

export default () => {
	return (
		<AppContext.Consumer>
			{() => (
				<Tile>
					<ReactHighcharts config={HighchartsConfig()} />
				</Tile>
			)}
		</AppContext.Consumer>
	)
}
