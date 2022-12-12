import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	width: calc(100% - 32px);
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid gray;
	border-radius: 8px;
	cursor: pointer;
	background: white;
	:hover{
		background: lightgrey;
	}
`;

const StyledTitleText = styled.p`
	font-size: 20px;
	font-weight: 500;
`;

function PostListItem({ post, onClick }) {
	return (
		<StyledWrapper onClick={onClick}>
			<StyledTitleText>{post.title}</StyledTitleText>
		</StyledWrapper>
	);
}

export default PostListItem;