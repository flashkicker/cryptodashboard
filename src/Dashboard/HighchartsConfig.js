export default historicalData => {
	return {
		title: {
			text: ""
		},

		chart: {
			height: 300,
			marginBottom: 100
		},

		yAxis: {
			title: {
				text: "Price"
			}
		},
		xAxis: {
			type: "datetime"
		},
		legend: {
			align: "center",
			verticalAlign: "bottom",
			x: 0,
			y: 0
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 2010
			}
		},

		series: historicalData,

		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						yAxis: {
							title: {
								text: ""
							}
						}
					}
				}
			]
		}
	}
}
