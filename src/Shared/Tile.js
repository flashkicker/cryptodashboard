import styled, { css } from "styled-components"
import { greenBoxShadow, redBoxShadow } from "../Shared/Styles"

export const Tile = styled.div`
	padding: 10px;
	${props =>
		props.theme &&
		css`
			box-shadow: 0px 0px 5px 1px
				${props.theme === "light" ? "#a9b6ff" : "#ffffff"};
			background-color: ${props.theme === "light" ? "white" : "#061a44"};
		`}
`

export const SelectableTile = styled(Tile)`
	${props =>
		props.theme &&
		css`
			box-shadow: 0px 0px 5px 1px
				${props.theme === "light" ? "#a9b6ff" : "#ffffff"};
			background-color: ${props.theme === "light" ? "white" : "#061a44"};
		`}
	&:hover {
		cursor: pointer;
		${greenBoxShadow}
	}
`

export const DeletableTile = styled(SelectableTile)`
	${props =>
		props.theme &&
		css`
			box-shadow: 0px 0px 5px 1px
				${props.theme === "light" ? "#a9b6ff" : "#ffffff"};
			background-color: ${props.theme === "light" ? "white" : "#061a44"};
		`}
	&:hover {
		cursor: pointer;
		${redBoxShadow}
	}
`

export const DisabledTile = styled(Tile)`
	${props =>
		props.theme &&
		css`
			box-shadow: 0px 0px 5px 1px
				${props.theme === "light" ? "#a9b6ff" : "#ffffff"};
			background-color: ${props.theme === "light" ? "white" : "#061a44"};
		`}
	pointer-events: none;
	opacity: 0.4;
`
