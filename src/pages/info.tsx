import Text from "components/Text"
import { graphql } from "gatsby"
import { FunctionComponent } from "react"
import React from 'react'


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
			<Text text={title} />
			<Text text={description} />
			<Text text={author} />
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