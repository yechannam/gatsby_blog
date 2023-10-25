import React from 'react'
import { FunctionComponent } from "react"
import { Link } from 'gatsby'
import ProfileImage from 'components/Main/ProfileImage'
import GlobalStyle from 'components/Common/GlobalStyle'
import styled from '@emotion/styled'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%
`

const IndexPage: FunctionComponent = function () {
	return( 
		<div>
			<GlobalStyle />
			<ProfileImage />
			<Link to="/info/">To Info</Link>
		</div>
	)
}

export default IndexPage