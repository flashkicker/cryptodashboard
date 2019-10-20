import React from "react"
import WelcomeMessage from "./WelcomeMessage"
import CoinGrid from "./CoinGrid"
import ConfirmButton from "./ConfirmButton"

import Page from "../Shared/Page"

export default () => {
	return (
		<Page name="Settings">
			<WelcomeMessage />
			<ConfirmButton />
			<CoinGrid />
		</Page>
	)
}
