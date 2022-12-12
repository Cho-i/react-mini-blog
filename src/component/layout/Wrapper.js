import styled from "styled-components";

const StyledWrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function Wrapper({ children }) {
	return (
		<StyledWrapper>{children}</StyledWrapper>
	);
}

export default Wrapper;