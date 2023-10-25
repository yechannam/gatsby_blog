import { IGatsbyImageData } from "gatsby-plugin-image"

export type PostFrontmatterType = {
	title: string
	date: string
	categories: string[]
	thumbnail: {
		thumbnail: {
			childImageSharp: {
			  gatsbyImageData: IGatsbyImageData
			}
		}
	}
	link: string
}

export type PostListItemType = {
	node: {
		id:string
		frontmatter: PostFrontmatterType
	}
}