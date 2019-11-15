import React from "react"
import { AppContext } from "../App/AppProvider"

const styles = {
	centerDiv: { display: "grid", justifyContent: "center" },
	confirm: {
		margin: "40px",
		fontSize: "1.5em",
		padding: "15px",
		cursor: "pointer"
	}
}

const ConfirmButton = () => {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<div style={styles.centerDiv}>
					<div
						onClick={confirmFavorites}
						style={styles.confirm}
						className="ui inverted green button"
					>
						Confirm Favorites
					</div>
				</div>
			)}
		</AppContext.Consumer>
	)
}

export default ConfirmButton
