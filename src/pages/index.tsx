import React from 'react'
import { FunctionComponent } from "react"
import Text from 'components/Text'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
	return( 
		<div>
			<Text text="welcome!!" />
			<Link to="/info/">To Info</Link>
			<a href="/info/">To Info</a>
		</div>
	)
}

export default IndexPage