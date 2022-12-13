import React from "react";
import PostListItem from "./PostListItem";

function PostList({ dataPosts, onClickItem }) {
	return (
		<>
			{
				dataPosts.map((dataPost, i) => {
					return (
						<PostListItem
							key={dataPost.id}
							dataPost={dataPost}
							onClick={() => {
								onClickItem(dataPost);
							}}
						/>
					);
				})
			}
		</>
	);
}

export default PostList;