import { FunctionComponent } from "react"
import React from 'react'

type TextProps = {
	text: string
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
	return <div>{text}</div>
}
export default Text