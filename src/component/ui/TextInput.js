import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
	width: calc(100% - 32px);
	padding: 16px;
	font-size: 16px;
	line-height: 20px;
	${(props) => props.height && `height:${props.height}px`};
`;

function TextInput({ height, value, onChange }) {
	return (
		<StyledTextarea height={height} value={value} onChange={onChange} />
	);
}

export default TextInput;