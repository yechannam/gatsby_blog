import styled from "@emotion/styled";
import ProfileImage from "./ProfileImage";
import { FunctionComponent } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

const Background = styled.div`
	width: 100%;
	background-image: linear-gradient(60deg, #29323c 0%, #485564 100%);
	color: #ffffff;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 768px;
	height: 400px;
	margin: 0 auto;

	@media (max-width: 768px){
		width: 100%;
		height: 300px;
		padding: 0 20px
	}
	`

const SubTitle = styled.div`
	font-size: 20px;
	font-weight: 400;

	@media (max-width: 768px){
		font-size: 18px;
	}
`

const Title = styled.div`
	margin-top: 5px;
	font-size: 35px;
	font-weight: 700;

	@media (max-width: 768px){
		font-size: 30px;
	}
`

type IntroductionProps = {
	profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
	profileImage
}) {
	return (
		<Background>
			<Wrapper>
				<ProfileImage profileImage={profileImage}/>

					<SubTitle>Nice to meet you,</SubTitle>
					<Title>I'm Developer yecnam.</Title>
			</Wrapper>
		</Background>
	)
}

export default Introduction
