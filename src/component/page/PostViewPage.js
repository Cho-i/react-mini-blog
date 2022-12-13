import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const StyledPostContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid grey;
	border-radius: 8px;
`;

const StyledTitleText = styled.p`
	font-size: 28px;
	font-weight: 500;
`;

const StyledContentText = styled.p`
	font-size: 20px;
	line-height: 32px;
	white-space: pre-wrap;
`;

const StyledCommentLabel = styled.p`
	font-size: 16px;
	font-weight: 500;
`;

function PostViewPage() {
	const navigate = useNavigate();
	const { postId } = useParams();
	const post = data.find((item) => {
		return item.id == postId;
	});
	const [comment, setComment] = useState('');
	return (
		<>
			<Button
				title="뒤로 가기"
				onClick={() => {
					navigate("/");
				}}
			/>
			<StyledPostContainer>
				<StyledTitleText>{post.title}</StyledTitleText>
				<StyledContentText>{post.content}</StyledContentText>
			</StyledPostContainer>

			<StyledCommentLabel>댓글</StyledCommentLabel>
			<CommentList comments={post.comments} />

			<TextInput
				height={40}
				value={comment}
				onChange={(event) => {
					setComment(event.target.value);
				}}
			/>
			<Button
				title="댓글 작성하기"
				onClick={() => {
					navigate("/");
				}}
			/>
		</>
	);
}

export default PostViewPage;