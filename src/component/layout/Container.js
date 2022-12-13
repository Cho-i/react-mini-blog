import styled from "styled-components";

const StyledContainer = styled.div`
	width: 100%;
	max-width: 720px;
	&>*{
		:not(:last-child){
			margin-bottom: 16px;
		}
	}
`;

function Container({ children }) {
	return (
		<StyledContainer>{children}</StyledContainer>
	);
}

export default Container;