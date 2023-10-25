import styled from "@emotion/styled";
import { FunctionComponent } from "react";

const FooterWrapper = styled.div`
	display: flex;
	margin-top: auto;
	padding: 50px 0;
	font-size: 17px;
	text-align: center;
	line-height: 1.5;
	justify-content: center;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`

const Footer: FunctionComponent = function () {
	return (
		<FooterWrapper>
			Have a good day :)
			<br></br> 2023 yecnam
		</FooterWrapper>
	)
}

export default Footer