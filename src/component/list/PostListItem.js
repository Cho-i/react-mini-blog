import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
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

const StyledListTitle = styled.p`
	font-size: 20px;
	font-weight: 500;
`;

function PostListItem({ post, onClick }) {
	return (
		<StyledList onClick={onClick}>
			<StyledListTitle>{post.title}</StyledListTitle>
		</StyledList>
	);
}

export default PostListItem;