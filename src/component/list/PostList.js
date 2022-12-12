import React from "react";
import PostListItem from "./PostListItem";

function PostList({ posts, onClickItem }) {
	return (
		<>
			{
				posts.map((post, i) => {
					return (
						<PostListItem
							key={post.id}
							post={post}
							onClick={() => {
								onClickItem(post);
							}}
						/>
					);
				})
			}
		</>
	);
}

export default PostList;