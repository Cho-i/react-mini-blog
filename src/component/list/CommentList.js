import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	&>*{
		:not(:last-child){
			margin-bottom: 16px;
		}
	}
`;

function CommentList({ comments }) {
	return (
		<StyledWrapper>
			{
				comments.map((comment, i) => {
					return (
						<CommentListItem key={comment.id} comment={comment} />
					)
				})
			}
		</StyledWrapper>
	);
}

export default CommentList;