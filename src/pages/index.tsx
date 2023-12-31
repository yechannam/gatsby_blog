import React from 'react'
import { FunctionComponent } from "react"
import GlobalStyle from 'components/Common/GlobalStyle'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Post/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image'

const CATEGORY_LIST = {
	All: 5,
	Web: 3,
	Mobile: 2,
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`

type IndexPageProps = {
	data: {
	  allMarkdownRemark: {
		edges: PostListItemType[]
	  }
	  file: {
		childImageSharp: {
		  gatsbyImageData: IGatsbyImageData
		}
	  }
	}
  }

const IndexPage: FunctionComponent<IndexPageProps> = function ({
	data: {
		allMarkdownRemark: { edges },
		file: {
		  childImageSharp: { gatsbyImageData },
		},
	  },
}) {
	return( 
		<Container>
			<GlobalStyle />
			<Introduction profileImage={gatsbyImageData}/>
			
			<CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST}></CategoryList>
			<PostList posts={edges}></PostList>
			
			<Footer />
			
		</Container>
	)
}

export default IndexPage

export const getPostList = graphql`
	query PostList {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData(width: 768, height: 400)
							}
						}
					}
				}
			}
		}
		file(name: { eq: "profile-image" }) {
			childImageSharp {
				gatsbyImageData(width: 120, height: 120)
			}
    	}
  }
`