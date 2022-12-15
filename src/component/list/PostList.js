import React from "react";
import { useNavigate } from "react-router-dom";
import PostListItem from "./PostListItem";

function PostList({ posts, onClickItem }) {
	const navigate = useNavigate();

	return (
		<>
			{
				posts.map((post, i) => {
					return (
						<PostListItem
							key={post.id}
							post={post}
							onClick={() => {
								navigate(`/post/${post.id}`);
							}}
						/>
					);
				})
			}
		</>
	);
}

export default PostList;