import { graphql } from "gatsby"
import { FunctionComponent } from "react"
import React from 'react'
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const globalStyle = css`
	*{
		margin: 5;
		padding: 5;
		box-sizing: border-box;

		font-size: 30px;
	}
`

const TextStyle = css`
	font-size:18px;
	font-weight: 700;
	color: gray;
`

const Text1 = styled.div<{disable: boolean}>`
	font-size: 30px;
	font-weight: 700;
	color: blue;
	text-decoration: ${({disable})=> (disable ? 'line-through' : 'none')};
`

type InfoPageProps = {
	data: {
		site: {
		  siteMetadata: {
			title: string
			description: string
			author: string
		  }
		}
	}
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
	data: {
		site: {
			siteMetadata: {title, description, author}
		},
	},
}) {
	return (
		<div>
			<Global styles={globalStyle} />
			<Text1 disable={false}>{title}</Text1>
			{description}
			{author}
		</div>
	);
}

export default InfoPage

export const metadataQuery = graphql`
	{
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`