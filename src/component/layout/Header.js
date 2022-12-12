import styled from "styled-components";

const StyledMainTitle = styled.h1`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;

function Header({ children }) {
	return (
		<StyledMainTitle>{children}</StyledMainTitle>
	);
}

export default Header;