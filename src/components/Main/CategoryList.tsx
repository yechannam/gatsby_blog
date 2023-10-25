import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FunctionComponent, ReactNode } from "react"

export type CategoryListProps = {
	selectedCategory: string
	categoryList: {
		[key: string]: number
	}
}

type CategoryItemProps = {
	active: boolean;
}

type GatsbyLinkProps = {
	children: ReactNode;
	className?: string;
	to: string;
} & CategoryItemProps

const CategoryItem = styled(({active, ...props}: GatsbyLinkProps) => (
	<Link {...props} />
))`
	margin-right:20px;
	padding: 5px 0;
	font-size: 18px;
	font-weight: ${({active}) => (active ? '800' : '400')};
	cursor: pointer;

	&:last-of-type {
		margin-right: 0;
	}


	@media (max-width: 768px){
		font-size: 15px;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 768px;
	margin: 100px auto 0;
`

const CategoryList: FunctionComponent<CategoryListProps> = function({
	selectedCategory, 
	categoryList,
}) {
	return (<Wrapper>
		{Object.entries(categoryList).map(([name, count]) => (
			<CategoryItem 
				to={`/?category=${name}`}
				active={name === selectedCategory}
				key={name}	
			>
				#{name}({count})
			</CategoryItem>
		))}
	</Wrapper>)
}

export default CategoryList