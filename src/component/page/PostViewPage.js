import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

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

function PostViewPage({ posts, setPosts }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const postId = posts.find((x) => x.id == id);

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
				<StyledTitleText>{postId.title}</StyledTitleText>
				<StyledContentText>{postId.content}</StyledContentText>
			</StyledPostContainer>

			<StyledCommentLabel>댓글</StyledCommentLabel>
			<CommentList comments={postId.comments} />

			<TextInput
				height={40}
				value={comment}
				onChange={(e) => {
					setComment(e.target.value);
				}}
			/>
			<Button
				title="댓글 작성하기"
				onClick={() => {
					//navigate("/");
					//const copy = [...postId.comments]
					const newComment = {
						id: '',
						content: comment
					}
					//copy.push(newComment)
					//setPosts()
					// //titleCopy()
					console.log(posts[postId.id - 1])
				}}
			/>
		</>
	);
}

export default PostViewPage;